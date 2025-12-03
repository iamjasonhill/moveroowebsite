import type { APIRoute } from 'astro';
import sgMail from '@sendgrid/mail';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    // Check if SendGrid API key is configured
    const apiKey = import.meta.env.SENDGRID_API_KEY;
    if (!apiKey) {
      console.error('SENDGRID_API_KEY is not configured');
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Email service not configured'
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

    // Validate required fields
    if (!name || !email || !reference || !reason) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'All fields are required'
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Email to your team
    const toEmail = import.meta.env.SENDGRID_TO_EMAIL || 'info@moveroo.com.au';

    // Email content
    const msg = {
      to: toEmail,
      from: import.meta.env.SENDGRID_FROM_EMAIL || 'noreply@moveroo.com.au',
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

    // Send email
    await sgMail.send(msg);

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
    console.error('SendGrid error:', error);

    return new Response(
      JSON.stringify({
        success: false,
        message: 'Failed to submit cancellation request'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};
