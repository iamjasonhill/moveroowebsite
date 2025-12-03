# SendGrid Setup Instructions

The cancellation form on the website uses SendGrid to send emails. Follow these steps to configure it:

## 1. Get Your SendGrid API Key

1. Log in to your SendGrid account at https://app.sendgrid.com
2. Navigate to Settings → API Keys
3. Click "Create API Key"
4. Give it a name (e.g., "Moveroo Cancellation Form")
5. Select "Full Access" or at minimum "Mail Send" permission
6. Click "Create & View"
7. **Copy the API key immediately** (you won't be able to see it again)

## 2. Verify Your Sender Email

1. Go to Settings → Sender Authentication in SendGrid
2. Verify the domain `moveroo.com.au` or at minimum verify the email `noreply@moveroo.com.au`
3. Follow SendGrid's verification process (DNS records or single sender verification)

## 3. Configure Environment Variables

### For Local Development:

Create a `.env` file in the project root:

```bash
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
SENDGRID_FROM_EMAIL=noreply@moveroo.com.au
SENDGRID_TO_EMAIL=info@moveroo.com.au
```

### For Vercel (Production):

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add the following variables:
   - `SENDGRID_API_KEY` - Your SendGrid API key
   - `SENDGRID_FROM_EMAIL` - `noreply@moveroo.com.au` (must be verified in SendGrid)
   - `SENDGRID_TO_EMAIL` - `info@moveroo.com.au` (where cancellation requests will be sent)
4. Apply to all environments (Production, Preview, Development)
5. Redeploy your site for changes to take effect

## 4. Test the Form

1. Visit https://moveroo.com.au/cancellation/
2. Fill out the form with test data
3. Submit and check that you receive the email at the configured `SENDGRID_TO_EMAIL` address
4. Verify the email formatting looks correct

## Troubleshooting

- **403 Forbidden**: Check that your API key has the correct permissions
- **Email not received**: Verify that `SENDGRID_FROM_EMAIL` is verified in your SendGrid account
- **500 Error**: Check Vercel logs or browser console for specific error messages
- **Environment variables not working**: Make sure you redeployed after adding them to Vercel

## Email Template

The cancellation request emails include:
- Customer name
- Customer email address
- Booking reference number
- Reason for cancellation
- Professional HTML formatting
- Timestamp and source information
