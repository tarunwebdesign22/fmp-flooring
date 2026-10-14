import { Resend } from "resend";

const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || "tarun.sharma@tech2globe.in";
const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "FMP Flooring <noreply@furnishmyplace.com>";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function formatFields(fields) {
  return Object.entries(fields)
    .filter(([, value]) => value !== undefined && value !== null && value !== "")
    .map(([key, value]) => {
      const label = key.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());
      const display = typeof value === "boolean" ? (value ? "Yes" : "No") : String(value);
      return { label, display };
    });
}

export async function POST(request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { error: "Email is not configured. Missing RESEND_API_KEY." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const formType = typeof body?.formType === "string" ? body.formType : "Website form";
    const fields = body?.fields && typeof body.fields === "object" ? body.fields : {};

    const rows = formatFields(fields);
    if (!rows.length) {
      return Response.json({ error: "No form data provided." }, { status: 400 });
    }

    const textBody = [
      `New ${formType} submission`,
      "",
      ...rows.map(({ label, display }) => `${label}: ${display}`),
    ].join("\n");

    const htmlBody = `
      <h2>New ${escapeHtml(formType)} submission</h2>
      <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
        ${rows
          .map(
            ({ label, display }) => `
          <tr>
            <td style="padding:6px 12px 6px 0;font-weight:600;vertical-align:top">${escapeHtml(label)}</td>
            <td style="padding:6px 0">${escapeHtml(display)}</td>
          </tr>`
          )
          .join("")}
      </table>
    `;

    const replyTo =
      typeof fields.email === "string" && fields.email.includes("@") ? fields.email : undefined;

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: [CONTACT_TO_EMAIL],
      replyTo,
      subject: `[FMP Flooring] ${formType}${fields.name ? ` — ${fields.name}` : ""}`,
      text: textBody,
      html: htmlBody,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { error: error.message || "Failed to deliver form submission." },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return Response.json({ error: "Unexpected server error." }, { status: 500 });
  }
}
