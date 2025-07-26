# EmailJS Setup Guide

This guide will help you set up EmailJS to receive emails from your contact form directly in your inbox.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - **Outlook**
   - **Yahoo**
   - Or any other SMTP service
4. Follow the connection steps for your chosen provider
5. **Important**: Note down the **Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Message from {{from_name}}

Hello,

You have received a new message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply directly to this email to respond to {{from_name}}.
```

4. **Important**: Note down the **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" → "General"
2. Find your **Public Key**
3. Copy it for later use

## Step 5: Configure Environment Variables

1. Open the `.env.local` file in your project root
2. Replace the placeholder values with your actual EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## Step 6: Update Email Template Variables

In your EmailJS template, make sure you're using these variable names:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{message}}` - The message content
- `{{to_email}}` - Your email (optional, for reference)
- `{{reply_to}}` - Sender's email for replies

## Step 7: Test the Setup

1. Start your development server:
   ```bash
   npm run dev
   ```
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email inbox for the message

## Important Notes

- **Free Tier Limits**: EmailJS free tier allows 200 emails per month
- **Security**: Your EmailJS credentials are safe to use in frontend code as they're designed for client-side use
- **Spam Protection**: EmailJS has built-in spam protection
- **Email Delivery**: Emails should arrive within 1-2 minutes

## Troubleshooting

### Common Issues:

1. **Emails not arriving**: 
   - Check your spam folder
   - Verify all three environment variables are correct
   - Make sure the template variables match exactly

2. **Console errors**:
   - Check that environment variables are properly set
   - Ensure you're using the correct Service ID and Template ID

3. **"Forbidden" errors**:
   - Make sure your EmailJS service is properly connected
   - Check that your public key is correct

### Testing Configuration:

You can test your EmailJS setup directly in their dashboard before integrating with your site.

## Support

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/help/

Once you complete these steps, your contact form will send emails directly to your inbox!