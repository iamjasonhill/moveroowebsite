import type { APIRoute } from 'astro';
import sgMail from '@sendgrid/mail';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    // Check if SendGrid API key is configured
    const apiKey = import.meta.env.SENDGRID_API_KEY;
    const fromEmail = import.meta.env.SENDGRID_FROM_EMAIL || 'noreply@moveroo.com.au';
    const toEmail = import.meta.env.SENDGRID_TO_EMAIL || 'info@moveroo.com.au';

    console.log('[Cancellation API] Request received');
    console.log('[Cancellation API] Environment check:', {
      hasApiKey: !!apiKey,
      fromEmail,
      toEmail
    });

    if (!apiKey) {
      console.error('[Cancellation API] SENDGRID_API_KEY is not configured');
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Email service not configured - missing API key'
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Initialize SendGrid with API key
    sgMail.setApiKey(apiKey);

    // Parse form data
    const formData = await request.formData();
    const name = formData.get('name')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const reference = formData.get('reference')?.toString() || '';
    const reason = formData.get('reason')?.toString() || '';

    console.log('[Cancellation API] Form data received:', {
      name,
      email,
      reference,
      reasonLength: reason.length
    });

    // Validate required fields
    if (!name || !email || !reference || !reason) {
      console.error('[Cancellation API] Missing required fields');
      return new Response(
        JSON.stringify({
          success: false,
          message: 'All fields are required'
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
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
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Cancellation request submitted successfully'
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

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

    return new Response(
      JSON.stringify({
        success: false,
        message: 'Failed to submit cancellation request',
        error: error instanceof Error ? error.message : 'Unknown error'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};
