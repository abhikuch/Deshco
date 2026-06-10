import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  property?: string;
  message?: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.RESEND_API_KEY;
  const fromEmail = import.meta.env.RESEND_FROM_EMAIL ?? 'Deshco <onboarding@resend.dev>';
  const toEmail = import.meta.env.RESEND_TO_EMAIL ?? 'homes@deshco.ae';

  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: 'Email service is not configured. Please try WhatsApp or call us directly.' }),
      { status: 503, headers: { 'Content-Type': 'application/json' } },
    );
  }

  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request body.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { name, email, phone, property, message } = body;

  if (!name?.trim() || !email?.trim()) {
    return new Response(JSON.stringify({ error: 'Name and email are required.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!isValidEmail(email)) {
    return new Response(JSON.stringify({ error: 'Please provide a valid email address.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const resend = new Resend(apiKey);

  const html = `
    <h2>New property enquiry — Deshco.ae</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ''}
    ${property ? `<p><strong>Property:</strong> ${escapeHtml(property)}</p>` : ''}
    ${message ? `<p><strong>Message:</strong></p><p>${escapeHtml(message)}</p>` : ''}
    <hr />
    <p style="color:#888;font-size:12px;">Sent from deshco.ae contact form</p>
  `;

  const { data, error } = await resend.emails.send(
    {
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `Property enquiry from ${name}`,
      html,
    },
    { idempotencyKey: `contact/${email}/${Date.now()}` },
  );

  if (error) {
    console.error('Resend error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send message. Please try again.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ success: true, id: data?.id }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
