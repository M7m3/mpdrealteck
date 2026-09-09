import nodemailer, { type Transporter } from 'nodemailer'
import { Resend } from 'resend'
import { OTP_TTL_MINUTES } from '@/lib/otp'

const FROM_EMAIL = process.env.OTP_FROM_EMAIL || 'MPD Realteck <tushar@mpdrealteck.in>'
const ADMIN_EMAIL = process.env.ADMIN_NOTIFICATION_EMAIL || 'tushar@mpdrealteck.in'

type SendResult = { delivered: boolean }

interface MailInput {
  to: string
  subject: string
  html: string
  replyTo?: string
}

let smtpTransport: Transporter | null | undefined

function getSmtpTransport() {
  if (smtpTransport !== undefined) return smtpTransport

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    smtpTransport = null
    return smtpTransport
  }

  const port = Number(SMTP_PORT) || 587
  smtpTransport = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465, // true for 465 (SSL), false for 587 (STARTTLS)
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })
  return smtpTransport
}

function getResendClient(): Resend | null {
  const key = process.env.RESEND_API_KEY
  if (!key) return null
  return new Resend(key)
}

async function sendMail(input: MailInput): Promise<SendResult> {
  const smtp = getSmtpTransport()
  if (smtp) {
    await smtp.sendMail({
      from: FROM_EMAIL,
      to: input.to,
      subject: input.subject,
      html: input.html,
      replyTo: input.replyTo,
    })
    return { delivered: true }
  }

  const resend = getResendClient()
  if (resend) {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: input.to,
      subject: input.subject,
      html: input.html,
      replyTo: input.replyTo,
    })
    return { delivered: true }
  }

  console.log(`[DEV MODE — no SMTP/RESEND configured] To: ${input.to} | Subject: ${input.subject}`)
  return { delivered: false }
}

function otpEmailHtml(code: string, purpose: 'verify-email' | 'reset-password') {
  const digits = code.split('')
  const copy =
    purpose === 'reset-password'
      ? {
          eyebrow: 'Reset Your Password',
          heading: 'Your password reset code',
          body: 'Enter this code to choose a new password for your MPD Realteck account.',
        }
      : {
          eyebrow: 'Verify Your Email',
          heading: 'Your verification code',
          body: 'Enter this code to verify your email and finish creating your MPD Realteck account.',
        }
  return `
<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background-color:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8fafc;padding:40px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="480" cellpadding="0" cellspacing="0" style="max-width:480px;width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0;">
            <tr>
              <td style="background-color:#0f172a;padding:28px 32px;">
                <span style="font-size:20px;font-weight:800;letter-spacing:-0.02em;color:#ffffff;text-transform:uppercase;">
                  MPD <span style="color:#3b82f6;">Realteck</span>
                </span>
              </td>
            </tr>
            <tr>
              <td style="padding:40px 32px 8px 32px;text-align:center;">
                <p style="margin:0;font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#2563eb;">
                  ${copy.eyebrow}
                </p>
                <h1 style="margin:12px 0 0 0;font-size:24px;font-weight:800;color:#0f172a;letter-spacing:-0.01em;">
                  ${copy.heading}
                </h1>
                <p style="margin:12px 0 0 0;font-size:14px;line-height:1.6;color:#475569;">
                  ${copy.body}
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 32px;text-align:center;">
                <table role="presentation" cellpadding="0" cellspacing="0" align="center">
                  <tr>
                    ${digits
                      .map(
                        (d) => `
                    <td style="width:44px;height:56px;background-color:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;text-align:center;vertical-align:middle;margin:0 4px;">
                      <span style="font-size:26px;font-weight:800;color:#0f172a;font-family:'SF Mono',Consolas,monospace;">${d}</span>
                    </td>
                    <td style="width:6px;"></td>
                    `
                      )
                      .join('')}
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:0 32px 32px 32px;text-align:center;">
                <p style="margin:0;font-size:12px;color:#94a3b8;">
                  This code expires in ${OTP_TTL_MINUTES} minutes. If you didn't request this, you can safely ignore this email.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px;background-color:#f8fafc;border-top:1px solid #e2e8f0;">
                <p style="margin:0;font-size:11px;color:#94a3b8;text-align:center;">
                  &copy; ${new Date().getFullYear()} MPD Realteck Infrastructure Group &middot; Agra, Uttar Pradesh
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`
}

export async function sendOtpEmail(email: string, code: string, purpose: 'verify-email' | 'reset-password' = 'verify-email') {
  const subject =
    purpose === 'reset-password'
      ? `${code} is your MPD Realteck password reset code`
      : `${code} is your MPD Realteck verification code`

  return sendMail({
    to: email,
    subject,
    html: otpEmailHtml(code, purpose),
  })
}

export async function sendAccountInquiryEmail(input: { name: string; email: string; message: string }) {
  const html = `
<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background-color:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:40px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="520" cellpadding="0" cellspacing="0" style="max-width:520px;width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0;">
            <tr>
              <td style="background-color:#0f172a;padding:24px 32px;">
                <span style="font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#3b82f6;">
                  New Account Inquiry
                </span>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px;">
                <p style="margin:0 0 4px 0;font-size:11px;font-weight:700;text-transform:uppercase;color:#94a3b8;">From</p>
                <p style="margin:0 0 16px 0;font-size:15px;font-weight:600;color:#0f172a;">${input.name} &lt;${input.email}&gt;</p>
                <p style="margin:0 0 4px 0;font-size:11px;font-weight:700;text-transform:uppercase;color:#94a3b8;">Message</p>
                <p style="margin:0;font-size:14px;line-height:1.6;color:#334155;white-space:pre-wrap;">${input.message}</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`

  return sendMail({
    to: ADMIN_EMAIL,
    replyTo: input.email,
    subject: `New account inquiry from ${input.name}`,
    html,
  })
}

export async function sendBlogNotificationEmail(input: {
  to: string
  title: string
  excerpt: string
  slug: string
  unsubscribeToken: string
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mpdrealteck.in'
  const postUrl = `${siteUrl}/invest/insights/${input.slug}`
  const unsubscribeUrl = `${siteUrl}/api/notify-unsubscribe?token=${input.unsubscribeToken}`

  const html = `
<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background-color:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8fafc;padding:40px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="520" cellpadding="0" cellspacing="0" style="max-width:520px;width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0;">
            <tr>
              <td style="background-color:#0f172a;padding:28px 32px;">
                <span style="font-size:20px;font-weight:800;letter-spacing:-0.02em;color:#ffffff;text-transform:uppercase;">
                  MPD <span style="color:#3b82f6;">Realteck</span>
                </span>
              </td>
            </tr>
            <tr>
              <td style="padding:32px 32px 8px 32px;">
                <p style="margin:0;font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#2563eb;">
                  New Market Trends Update
                </p>
                <h1 style="margin:12px 0 0 0;font-size:22px;font-weight:800;color:#0f172a;letter-spacing:-0.01em;line-height:1.3;">
                  ${input.title}
                </h1>
                <p style="margin:12px 0 0 0;font-size:14px;line-height:1.6;color:#475569;">
                  ${input.excerpt}
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 32px 32px 32px;">
                <a href="${postUrl}" style="display:inline-block;background-color:#2563eb;color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;padding:12px 24px;border-radius:8px;">
                  Read the Full Update
                </a>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px;background-color:#f8fafc;border-top:1px solid #e2e8f0;">
                <p style="margin:0;font-size:11px;color:#94a3b8;text-align:center;">
                  &copy; ${new Date().getFullYear()} MPD Realteck Infrastructure Group &middot; Agra, Uttar Pradesh
                </p>
                <p style="margin:8px 0 0 0;font-size:11px;color:#94a3b8;text-align:center;">
                  <a href="${unsubscribeUrl}" style="color:#94a3b8;">Unsubscribe from these updates</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`

  return sendMail({
    to: input.to,
    subject: `${input.title} — MPD Realteck Market Trends`,
    html,
  })
}
