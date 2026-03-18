---
paths:
  - "src/app/api/**/*.ts"
  - "src/app/contact/**/*.tsx"
---

# Integrations

## Contact Form

- **Cloudflare Turnstile** for spam protection — client widget via `@marsidev/react-turnstile`, server-side token verification against Cloudflare's siteverify API
- **Resend** for email delivery — server-side only via `resend` package
- Form submissions go through `/api/contact` route (POST)
- Always verify Turnstile token server-side before sending email
- Emails sent from verified domain (`info@zcdcllp.com`), with Reply-To set to the submitter's email

## Environment Variables

Naming convention: prefix with the service name (`RESEND_`, `TURNSTILE_`). Use `NEXT_PUBLIC_` prefix only for client-exposed vars.

- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` — public, embedded in client
- `TURNSTILE_SECRET_KEY` — server-only, never expose to client
- `RESEND_API_KEY` — server-only
- `RESEND_FROM_EMAIL` — sender address (must be verified domain)
- `RESEND_TO_EMAIL` — recipient address for contact form submissions