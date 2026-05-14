import type { APIRoute } from "astro";
import sgMail from "@sendgrid/mail";

declare const process:
	| {
			env?: Record<string, string | undefined>;
	  }
	| undefined;

const MAX_FIELD_LENGTHS = {
	name: 120,
	email: 254,
	phone: 40,
	bookingReference: 80,
	reason: 3000,
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function jsonResponse(body: Record<string, string>, status: number) {
	return new Response(JSON.stringify(body), {
		status,
		headers: {
			"Content-Type": "application/json",
		},
	});
}

function normalizeField(value: unknown, maxLength: number) {
	if (typeof value !== "string") {
		return "";
	}

	return value.trim().slice(0, maxLength);
}

function escapeHtml(value: string) {
	return value
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;");
}

function getServerEnv(name: string) {
	const runtimeValue = typeof process !== "undefined" ? process.env?.[name] : undefined;
	const buildValue = import.meta.env[name];

	return runtimeValue || buildValue || "";
}

export const POST: APIRoute = async ({ request }) => {
	try {
		const sendGridApiKey = getServerEnv("SENDGRID_API_KEY");
		const sendGridFromEmail = getServerEnv("SENDGRID_FROM_EMAIL") || "noreply@moveroo.com.au";

		// Check if SendGrid API key is configured
		if (!sendGridApiKey) {
			console.error("SENDGRID_API_KEY is not configured");
			return new Response(
				JSON.stringify({
					error:
						"Email service is not configured. Please call +61 7 2143 2557 or email removals@moveroo.com.au.",
				}),
				{
					status: 500,
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
		}

		sgMail.setApiKey(sendGridApiKey);

		// Always send to removals@moveroo.com.au
		const recipientEmail = "removals@moveroo.com.au";

		// Parse form data
		const data = await request.json();
		const honeypot = normalizeField(data.company, 120);

		if (honeypot) {
			return jsonResponse(
				{ message: "Your cancellation request has been submitted successfully." },
				200
			);
		}

		const name = normalizeField(data.name, MAX_FIELD_LENGTHS.name);
		const email = normalizeField(data.email, MAX_FIELD_LENGTHS.email).toLowerCase();
		const phone = normalizeField(data.phone, MAX_FIELD_LENGTHS.phone);
		const bookingReference = normalizeField(
			data.bookingReference,
			MAX_FIELD_LENGTHS.bookingReference
		);
		const reason = normalizeField(data.reason, MAX_FIELD_LENGTHS.reason);

		// Validate required fields
		if (!name || !email || !phone || !reason) {
			return jsonResponse({ error: "Please fill in all required fields." }, 400);
		}

		if (!emailPattern.test(email)) {
			return jsonResponse({ error: "Please enter a valid email address." }, 400);
		}

		// Create email content
		const escapedReason = escapeHtml(reason).replace(/\n/g, "<br>");
		const emailContent = `
			<h2>Cancellation Request</h2>
			<p><strong>Name:</strong> ${escapeHtml(name)}</p>
			<p><strong>Email:</strong> ${escapeHtml(email)}</p>
			<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
			${bookingReference ? `<p><strong>Booking Reference:</strong> ${escapeHtml(bookingReference)}</p>` : ""}
			<p><strong>Reason for Cancellation:</strong></p>
			<p>${escapedReason}</p>
		`;

		// Prepare SendGrid message
		const msg = {
			to: recipientEmail,
			from: sendGridFromEmail,
			replyTo: email,
			subject: `Cancellation Request from ${name.replace(/[\r\n]/g, " ")}`,
			html: emailContent,
			text: `
				Cancellation Request
				
				Name: ${name}
				Email: ${email}
				Phone: ${phone}
				${bookingReference ? `Booking Reference: ${bookingReference}` : ""}
				
				Reason for Cancellation:
				${reason}
			`,
		};

		// Send email via SendGrid
		await sgMail.send(msg);

		return jsonResponse(
			{ message: "Your cancellation request has been submitted successfully." },
			200
		);
	} catch (error) {
		console.error("Error sending cancellation request:", error);

		// Provide more specific error messages
		let errorMessage = "An error occurred while submitting your request. Please try again later.";

		if (error instanceof Error) {
			if (error.message.includes("API key")) {
				errorMessage = "Email service configuration error. Please contact support.";
			} else if (error.message.includes("email")) {
				errorMessage = "Invalid email address. Please check your email and try again.";
			}
		}

		return jsonResponse({ error: errorMessage }, 500);
	}
};
