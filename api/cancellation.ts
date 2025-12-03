import type { VercelRequest, VercelResponse } from '@vercel/node';
import sgMail from '@sendgrid/mail';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    });
  }

  try {
    // Check if SendGrid API key is configured
    const apiKey = process.env.SENDGRID_API_KEY;
    const fromEmail = process.env.SENDGRID_FROM_EMAIL || 'noreply@moveroo.com.au';
    const toEmail = process.env.SENDGRID_TO_EMAIL || 'info@moveroo.com.au';

    console.log('[Cancellation API] Request received');
    console.log('[Cancellation API] Environment check:', {
      hasApiKey: !!apiKey,
      fromEmail,
      toEmail
    });

    if (!apiKey) {
      console.error('[Cancellation API] SENDGRID_API_KEY is not configured');
      return res.status(500).json({
        success: false,
        message: 'Email service not configured - missing API key'
      });
    }

    // Initialize SendGrid with API key
    sgMail.setApiKey(apiKey);

    // Parse form data from body
    const { name, email, reference, reason } = req.body;

    console.log('[Cancellation API] Form data received:', {
      name,
      email,
      reference,
      reasonLength: reason?.length || 0
    });

    // Validate required fields
    if (!name || !email || !reference || !reason) {
      console.error('[Cancellation API] Missing required fields');
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Email content
    const msg = {
      to: toEmail,
      from: fromEmail,
      subject: `Cancellation Request - ${reference}`,
      text: `
Cancellation Request Received

Customer Details:
Name: ${name}
Email: ${email}
Reference Number: ${reference}

Reason for Cancellation:
${reason}

---
This request was submitted via the Moveroo cancellation form.
Please respond to the customer within 24 hours.
      `.trim(),
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #047857; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
    .content { background-color: #f9fafb; padding: 20px; border-radius: 8px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #047857; }
    .value { margin-top: 5px; }
    .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">Cancellation Request</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Customer Name:</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">Email Address:</div>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      </div>
      <div class="field">
        <div class="label">Booking Reference Number:</div>
        <div class="value">${reference}</div>
      </div>
      <div class="field">
        <div class="label">Reason for Cancellation:</div>
        <div class="value">${reason.replace(/\n/g, '<br>')}</div>
      </div>
    </div>
    <div class="footer">
      This request was submitted via the Moveroo cancellation form at moveroo.com.au/cancellation.<br>
      Please respond to the customer within 24 hours.
    </div>
  </div>
</body>
</html>
      `.trim(),
    };

    console.log('[Cancellation API] Attempting to send email via SendGrid...');
    console.log('[Cancellation API] Email details:', {
      to: toEmail,
      from: fromEmail,
      subject: msg.subject
    });

    // Send email
    const response = await sgMail.send(msg);

    console.log('[Cancellation API] SendGrid response:', {
      statusCode: response[0]?.statusCode,
      headers: response[0]?.headers
    });

    // Return success response
    return res.status(200).json({
      success: true,
      message: 'Cancellation request submitted successfully'
    });

  } catch (error) {
    console.error('[Cancellation API] Error occurred:', error);

    // Log detailed error information
    if (error && typeof error === 'object') {
      console.error('[Cancellation API] Error details:', {
        message: (error as Error).message,
        // @ts-ignore - SendGrid error properties
        code: error.code,
        // @ts-ignore
        response: error.response?.body
      });
    }

    return res.status(500).json({
      success: false,
      message: 'Failed to submit cancellation request',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
