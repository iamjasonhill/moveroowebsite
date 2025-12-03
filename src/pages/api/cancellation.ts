import type { APIRoute } from 'astro';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid
if (import.meta.env.SENDGRID_API_KEY) {
	sgMail.setApiKey(import.meta.env.SENDGRID_API_KEY);
}

export const POST: APIRoute = async ({ request }) => {
	try {
		// Check if SendGrid API key is configured
		if (!import.meta.env.SENDGRID_API_KEY) {
			console.error('SENDGRID_API_KEY is not configured');
			return new Response(
				JSON.stringify({
					error: 'Email service is not configured. Please contact support.',
				}),
				{
					status: 500,
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
		}

		// Always send to removals@moveroo.com.au
		const recipientEmail = 'removals@moveroo.com.au';

		// Parse form data
		const data = await request.json();
		const { name, email, phone, bookingReference, reason } = data;

		// Validate required fields
		if (!name || !email || !phone || !reason) {
			return new Response(
				JSON.stringify({
					error: 'Please fill in all required fields.',
				}),
				{
					status: 400,
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
		}

		// Create email content
		const emailContent = `
			<h2>Cancellation Request</h2>
			<p><strong>Name:</strong> ${name}</p>
			<p><strong>Email:</strong> ${email}</p>
			<p><strong>Phone:</strong> ${phone}</p>
			${bookingReference ? `<p><strong>Booking Reference:</strong> ${bookingReference}</p>` : ''}
			<p><strong>Reason for Cancellation:</strong></p>
			<p>${reason.replace(/\n/g, '<br>')}</p>
		`;

		// Prepare SendGrid message
		const msg = {
			to: recipientEmail,
			from: import.meta.env.SENDGRID_FROM_EMAIL || 'noreply@moveroo.com.au',
			replyTo: email,
			subject: `Cancellation Request from ${name}`,
			html: emailContent,
			text: `
				Cancellation Request
				
				Name: ${name}
				Email: ${email}
				Phone: ${phone}
				${bookingReference ? `Booking Reference: ${bookingReference}` : ''}
				
				Reason for Cancellation:
				${reason}
			`,
		};

		// Send email via SendGrid
		await sgMail.send(msg);

		return new Response(
			JSON.stringify({
				message: 'Your cancellation request has been submitted successfully.',
			}),
			{
				status: 200,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
	} catch (error) {
		console.error('Error sending cancellation request:', error);
		
		// Provide more specific error messages
		let errorMessage = 'An error occurred while submitting your request. Please try again later.';
		
		if (error instanceof Error) {
			if (error.message.includes('API key')) {
				errorMessage = 'Email service configuration error. Please contact support.';
			} else if (error.message.includes('email')) {
				errorMessage = 'Invalid email address. Please check your email and try again.';
			}
		}

		return new Response(
			JSON.stringify({
				error: errorMessage,
			}),
			{
				status: 500,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
	}
};

