import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ message: 'Email service is not configured' });
  }

  const emailSubject = subject?.trim()
    ? `Contact form: ${subject.trim()}`
    : 'New contact form submission';

  const html = `
    <div style="font-family: system-ui, sans-serif; color: #111; line-height: 1.6;">
      <h1 style="font-size: 20px; margin-bottom: 16px;">New contact form submission</h1>
      <p style="margin: 0 0 10px;"><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p style="margin: 0 0 10px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p style="margin: 0 0 10px;"><strong>Subject:</strong> ${escapeHtml(subject || 'No subject')}</p>
      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
      <div style="white-space: pre-wrap;">${escapeHtml(message)}</div>
    </div>
  `;

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.RESEND_TO_EMAIL || 'cmeckson38@gmail.com',
      subject: emailSubject,
      html,
    });

    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}naaam
