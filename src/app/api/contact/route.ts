import { NextResponse } from 'next/server'
import { Resend } from 'resend'

let resend: Resend | null = null

function getResend() {
  if (!resend) {
    resend = new Resend(process.env.RESEND_API_KEY!)
  }
  return resend
}

export async function POST(request: Request) {
  try {
    const requiredEnvVars = ['RESEND_API_KEY', 'RESEND_FROM_EMAIL', 'RESEND_TO_EMAIL', 'TURNSTILE_SECRET_KEY'] as const
    const missing = requiredEnvVars.filter((key) => !process.env[key])
    if (missing.length > 0) {
      console.error(`Missing environment variables: ${missing.join(', ')}`)
      return NextResponse.json(
        { error: 'Server configuration error. Please contact the administrator.' },
        { status: 500 }
      )
    }

    const { name, email, message, token } = await request.json()

    // Validate required fields
    if (!name || !email || !message || !token) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      )
    }

    // Verify Turnstile token
    const turnstileResponse = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: token,
        }),
      }
    )

    const turnstileData = await turnstileResponse.json()

    if (!turnstileData.success) {
      return NextResponse.json(
        { error: 'Security verification failed. Please try again.' },
        { status: 400 }
      )
    }

    // Send email via Resend
    const { error } = await getResend().emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.RESEND_TO_EMAIL!,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send message. Please try again later.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch {
    console.error('Contact form error')
    return NextResponse.json(
      { error: 'An unexpected error occurred.' },
      { status: 500 }
    )
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
