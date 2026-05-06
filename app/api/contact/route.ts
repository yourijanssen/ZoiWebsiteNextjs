import { Resend } from "resend";

export const runtime = "nodejs";

const adminRecipients = (
  process.env.CONTACT_ADMIN_EMAILS ||
  "zipalife@gmail.com,yourijanssen123@gmail.com"
)
  .split(",")
  .map((email) => email.trim())
  .filter(Boolean);

const fromEmail =
  process.env.RESEND_FROM_EMAIL || "Zoi Pantou <onboarding@resend.dev>";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  language?: unknown;
  website?: unknown;
};

// Escapes user-submitted values before inserting them in email HTML.
function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// Converts unknown form values into bounded strings for validation and email output.
function normalizeField(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function buildAdminEmail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  return `
    <div style="font-family: Arial, sans-serif; color: #17302f; line-height: 1.6;">
      <h1 style="font-size: 22px;">New contact form message</h1>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
    </div>
  `;
}

function buildVisitorEmail({
  name,
  language,
}: {
  name: string;
  language: string;
}) {
  if (language === "el") {
    return {
      subject: "Λάβαμε το μήνυμά σας",
      html: `
        <div style="font-family: Arial, sans-serif; color: #17302f; line-height: 1.6;">
          <h1 style="font-size: 22px;">Σας ευχαριστούμε, ${escapeHtml(name)}</h1>
          <p>Λάβαμε το μήνυμά σας και θα επικοινωνήσουμε μαζί σας σύντομα.</p>
          <p>Ζωή Παντού</p>
        </div>
      `,
    };
  }

  return {
    subject: "We received your message",
    html: `
      <div style="font-family: Arial, sans-serif; color: #17302f; line-height: 1.6;">
        <h1 style="font-size: 22px;">Thank you, ${escapeHtml(name)}</h1>
        <p>We received your message and will contact you soon.</p>
        <p>Zoi Pantou</p>
      </div>
    `,
  };
}

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    return Response.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (normalizeField(payload.website, 200)) {
    return Response.json({ ok: true });
  }

  const name = normalizeField(payload.name, 120);
  const email = normalizeField(payload.email, 160).toLowerCase();
  const message = normalizeField(payload.message, 4000);
  const language = normalizeField(payload.language, 2) === "el" ? "el" : "en";

  if (!name || !emailPattern.test(email) || message.length < 10) {
    return Response.json(
      { error: "Please fill in all required fields correctly." },
      { status: 400 },
    );
  }

  const resend = new Resend(resendApiKey);
  const visitorEmail = buildVisitorEmail({ name, language });

  const [adminResult, visitorResult] = await Promise.all([
    resend.emails.send({
      from: fromEmail,
      to: adminRecipients,
      replyTo: email,
      subject: `New contact form message from ${name}`,
      html: buildAdminEmail({ name, email, message }),
    }),
    resend.emails.send({
      from: fromEmail,
      to: email,
      subject: visitorEmail.subject,
      html: visitorEmail.html,
    }),
  ]);

  if (adminResult.error || visitorResult.error) {
    return Response.json(
      {
        error:
          adminResult.error?.message ||
          visitorResult.error?.message ||
          "Email could not be sent.",
      },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
