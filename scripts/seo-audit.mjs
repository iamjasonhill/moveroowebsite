#!/usr/bin/env node
/**
 * SEO Audit Script for Moveroo
 * 
 * Triggers an SEO audit using the technical.again.com.au API
 * and displays actionable results to help improve the site.
 * 
 * Usage:
 *   npm run seo:audit [url]
 *   npm run seo:audit https://moveroo.com.au
 *   npm run seo:audit http://localhost:4321
 */

import { config } from 'dotenv';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
config({ path: resolve(__dirname, '../.env') });

const API_BASE = 'https://technical.again.com.au/api';
const TOKEN = process.env.SEO_AUDITOR_TOKEN;

if (!TOKEN) {
  console.error('❌ SEO_AUDITOR_TOKEN not found in .env file');
  console.error('   Get your token at: https://technical.again.com.au/api-access');
  process.exit(1);
}

const DEFAULT_URL = 'https://moveroo.com.au';
const targetUrl = process.argv[2] || DEFAULT_URL;

console.log('🔍 Moveroo SEO Auditor');
console.log('━'.repeat(50));
console.log(`📍 Target: ${targetUrl}`);
console.log('');

async function startAudit(url) {
  const response = await fetch(`${API_BASE}/audit`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ url })
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to start audit: ${response.status} - ${error}`);
  }

  return response.json();
}

async function checkStatus(auditId) {
  const response = await fetch(`${API_BASE}/audit/${auditId}`, {
    headers: {
      'Authorization': `Bearer ${TOKEN}`
    }
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to check status: ${response.status} - ${error}`);
  }

  return response.json();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function displayResults(results) {
  console.log('');
  console.log('━'.repeat(50));
  console.log('📊 AUDIT RESULTS');
  console.log('━'.repeat(50));
  console.log('');
  
  // Overall score with color indicator
  const score = results.overall_score;
  let scoreEmoji = '🔴';
  if (score >= 80) scoreEmoji = '🟢';
  else if (score >= 60) scoreEmoji = '🟡';
  else if (score >= 40) scoreEmoji = '🟠';
  
  console.log(`${scoreEmoji} Overall Score: ${score}/100`);
  console.log('');
  
  if (results.summary) {
    console.log('📝 Summary:');
    console.log(`   ${results.summary}`);
    console.log('');
  }
  
  if (results.action_items && results.action_items.length > 0) {
    console.log('🎯 ACTION ITEMS:');
    console.log('─'.repeat(50));
    
    results.action_items.forEach((item, index) => {
      console.log('');
      if (item.category) {
        console.log(`📂 ${item.category.toUpperCase()}`);
      }
      
      if (item.issues && Array.isArray(item.issues)) {
        item.issues.forEach((issue) => {
          const priorityEmoji = issue.priority === 'high' ? '🔴' : 
                               issue.priority === 'medium' ? '🟡' : '🟢';
          console.log(`   ${priorityEmoji} ${issue.title || issue.description || issue}`);
          if (issue.remediation) {
            console.log(`      💡 Fix: ${issue.remediation}`);
          }
        });
      } else if (typeof item === 'string') {
        console.log(`   • ${item}`);
      } else {
        console.log(`   • ${JSON.stringify(item)}`);
      }
    });
  }
  
  console.log('');
  console.log('━'.repeat(50));
  console.log('✅ Audit complete! Use these insights to improve Moveroo.');
  console.log('');
}

async function runAudit() {
  try {
    // Start the audit
    console.log('🚀 Starting SEO audit...');
    const { audit_id, status_url } = await startAudit(targetUrl);
    console.log(`   Audit ID: ${audit_id}`);
    console.log('');
    
    // Poll for results
    console.log('⏳ Waiting for results...');
    let attempts = 0;
    const maxAttempts = 60; // 5 minutes max (5 second intervals)
    
    while (attempts < maxAttempts) {
      const status = await checkStatus(audit_id);
      
      if (status.status === 'pending' || status.status === 'running') {
        const progress = status.progress || 'Processing...';
        process.stdout.write(`\r   ${progress}                    `);
        await sleep(5000);
        attempts++;
      } else {
        // Audit complete
        process.stdout.write('\r   Done!                              \n');
        displayResults(status);
        return;
      }
    }
    
    console.error('');
    console.error('⏰ Audit timed out. Check manually at:');
    console.error(`   ${API_BASE}/audit/${audit_id}`);
    
  } catch (error) {
    console.error('');
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

runAudit();
