import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { EnquirySchema, type EnquiryResponse } from "@/lib/enquiry-schema";
import { CONTACT, SITE_NAME } from "@/lib/constants";

// ── Rate limiting ─────────────────────────────────────────────────────────────
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT_MAX) return true;
  entry.count += 1;
  return false;
}

// ── Email HTML template ───────────────────────────────────────────────────────
function buildEmailHtml(data: {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  projectLocation?: string;
  message: string;
  submittedAt: string;
}): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1.0"/></head>
<body style="margin:0;padding:0;font-family:'Segoe UI',Arial,sans-serif;background:#f4f4f5;color:#1a1a1a;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 0;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.08);">
        <tr><td style="background:#1a1a1a;padding:24px 32px;">
          <p style="margin:0;font-size:12px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#0e7a6e;">New Enquiry</p>
          <p style="margin:6px 0 0;font-size:20px;font-weight:700;color:#fff;">${SITE_NAME}</p>
        </td></tr>
        <tr><td style="padding:32px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="padding-bottom:18px;border-bottom:1px solid #e5e5e5;">
              <p style="margin:0 0 4px;font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#8a8a8a;">Full Name</p>
              <p style="margin:0;font-size:16px;font-weight:600;">${data.name}</p>
            </td></tr>
            <tr><td style="padding:18px 0;border-bottom:1px solid #e5e5e5;">
              <p style="margin:0 0 4px;font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#8a8a8a;">Email</p>
              <p style="margin:0;font-size:15px;"><a href="mailto:${data.email}" style="color:#0e7a6e;text-decoration:none;">${data.email}</a></p>
            </td></tr>
            ${data.phone ? `<tr><td style="padding:18px 0;border-bottom:1px solid #e5e5e5;">
              <p style="margin:0 0 4px;font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#8a8a8a;">Phone</p>
              <p style="margin:0;font-size:15px;"><a href="tel:${data.phone.replace(/\s/g,"")}" style="color:#0e7a6e;text-decoration:none;">${data.phone}</a></p>
            </td></tr>` : ""}
            ${data.service ? `<tr><td style="padding:18px 0;border-bottom:1px solid #e5e5e5;">
              <p style="margin:0 0 4px;font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#8a8a8a;">Service Required</p>
              <p style="margin:0;font-size:15px;font-weight:600;color:#0e7a6e;">${data.service}</p>
            </td></tr>` : ""}
            ${data.projectLocation ? `<tr><td style="padding:18px 0;border-bottom:1px solid #e5e5e5;">
              <p style="margin:0 0 4px;font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#8a8a8a;">Project Location</p>
              <p style="margin:0;font-size:15px;">${data.projectLocation}</p>
            </td></tr>` : ""}
            <tr><td style="padding:18px 0;">
              <p style="margin:0 0 8px;font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#8a8a8a;">Project Details</p>
              <p style="margin:0;font-size:15px;line-height:1.7;color:#3d3d3d;white-space:pre-wrap;">${data.message}</p>
            </td></tr>
          </table>
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;">
            <tr><td>
              <a href="mailto:${data.email}?subject=Re: Your Enquiry — ${SITE_NAME}"
                 style="display:inline-block;background:#1a1a1a;color:#fff;text-decoration:none;font-size:13px;font-weight:600;padding:12px 24px;border-radius:4px;">
                Reply to ${data.name}
              </a>
            </td></tr>
          </table>
        </td></tr>
        <tr><td style="background:#f7f5f2;padding:14px 32px;border-top:1px solid #e5e5e5;">
          <p style="margin:0;font-size:11px;color:#8a8a8a;">Received: ${data.submittedAt} · Sent via website enquiry form</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`.trim();
}

// ── API Route ─────────────────────────────────────────────────────────────────
export async function POST(request: NextRequest): Promise<NextResponse<EnquiryResponse>> {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, error: "Too many submissions. Please try again in an hour." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request." }, { status: 400 });
  }

  const parsed = EnquirySchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors as Record<string, string[]>;
    return NextResponse.json(
      { success: false, error: "Please check your details and try again.", fieldErrors },
      { status: 422 }
    );
  }

  const { name, email, phone, service, projectLocation, message } = parsed.data;

  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  // Dev fallback — no credentials configured
  if (!gmailUser || !gmailPass) {
    console.log("[enquiry] Dev mode — would have sent:", { name, email, phone, service, projectLocation, message });
    return NextResponse.json({
      success: true,
      message: "Thank you. Your enquiry has been received successfully. Our technical team will review your requirements and contact you within 24–48 business hours.",
    });
  }

  const submittedAt = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "long",
    timeStyle: "short",
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailPass },
  });

  try {
    await transporter.sendMail({
      from: `"${SITE_NAME} Website" <${gmailUser}>`,
      to: CONTACT.email,
      replyTo: `"${name}" <${email}>`,
      subject: `New Enquiry from ${name} — ${SITE_NAME}`,
      html: buildEmailHtml({ name, email, phone, service, projectLocation, message, submittedAt }),
    });

    return NextResponse.json({
      success: true,
      message: "Thank you. Your enquiry has been received successfully. Our technical team will review your requirements and contact you within 24–48 business hours.",
    });
  } catch (err) {
    console.error("[enquiry] Mail error:", err);
    return NextResponse.json(
      { success: false, error: "We could not send your enquiry. Please call or email us directly." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
