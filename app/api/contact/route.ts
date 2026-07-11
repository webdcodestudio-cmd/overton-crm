import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "RESEND_API_KEY is not configured" },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  try {
    const body = await req.json();
    const { name, email, mobile, companyName, userType } = body;

    // ── VALIDATION ──
    if (!name || !email || !mobile || !companyName || !userType) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 },
      );
    }

    // ── USER TYPE LABEL ──
    const userTypeLabels: Record<string, string> = {
      developer: "Real Estate Developer",
      broker: "Real Estate Broker",
      "broker-mandate": "Broker Mandate",
    };

    const userTypeLabel = userTypeLabels[userType] || userType;

    // ── SEND EMAIL ──
    const { data, error } = await resend.emails.send({
      from: "Overton CRM <noreply@overton.in/>",
      to: ["crmoverton@gmail.com"],
      subject: `🚀 New Free Trial Request — ${name} (${userTypeLabel})`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </head>
          <body style="margin:0;padding:0;background:#F8F9FE;font-family:Arial,sans-serif;">

            <div style="max-width:600px;margin:40px auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

              <!-- HEADER -->
              <div style="background:linear-gradient(135deg,#1a1060 0%,#3525a8 55%,#0F1629 100%);padding:32px 40px;">
                <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:800;letter-spacing:-0.5px;">
                  Overton CRM
                </h1>
                <p style="margin:8px 0 0;color:rgba(255,255,255,0.6);font-size:14px;">
                  New Free Trial Request
                </p>
              </div>

              <!-- BODY -->
              <div style="padding:32px 40px;">

                <div style="background:#EEF1FE;border-radius:12px;padding:20px;margin-bottom:24px;">
                  <p style="margin:0;color:#3D5AF1;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:1px;">
                    🚀 New Lead
                  </p>
                  <h2 style="margin:8px 0 0;color:#0F1629;font-size:22px;font-weight:800;">
                    ${name}
                  </h2>
                  <p style="margin:4px 0 0;color:#4A5578;font-size:14px;">
                    ${userTypeLabel}
                  </p>
                </div>

                <!-- DETAILS TABLE -->
                <table style="width:100%;border-collapse:collapse;">
                  <tr>
                    <td style="padding:12px 0;border-bottom:1px solid #E3E7F4;">
                      <span style="color:#6B7499;font-size:13px;">👤 Name</span>
                    </td>
                    <td style="padding:12px 0;border-bottom:1px solid #E3E7F4;text-align:right;">
                      <span style="color:#0F1629;font-size:13px;font-weight:600;">${name}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:12px 0;border-bottom:1px solid #E3E7F4;">
                      <span style="color:#6B7499;font-size:13px;">📱 Mobile</span>
                    </td>
                    <td style="padding:12px 0;border-bottom:1px solid #E3E7F4;text-align:right;">
                      <span style="color:#0F1629;font-size:13px;font-weight:600;">${mobile}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:12px 0;border-bottom:1px solid #E3E7F4;">
                      <span style="color:#6B7499;font-size:13px;">📧 Email</span>
                    </td>
                    <td style="padding:12px 0;border-bottom:1px solid #E3E7F4;text-align:right;">
                      <a href="mailto:${email}" style="color:#3D5AF1;font-size:13px;font-weight:600;text-decoration:none;">${email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:12px 0;border-bottom:1px solid #E3E7F4;">
                      <span style="color:#6B7499;font-size:13px;">🏢 Company</span>
                    </td>
                    <td style="padding:12px 0;border-bottom:1px solid #E3E7F4;text-align:right;">
                      <span style="color:#0F1629;font-size:13px;font-weight:600;">${companyName}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:12px 0;">
                      <span style="color:#6B7499;font-size:13px;">👥 Type</span>
                    </td>
                    <td style="padding:12px 0;text-align:right;">
                      <span style="background:#EEF1FE;color:#3D5AF1;font-size:12px;font-weight:700;padding:4px 12px;border-radius:20px;">${userTypeLabel}</span>
                    </td>
                  </tr>
                </table>

                <!-- SUBMISSION INFO -->
                <div style="margin-top:32px;background:#F3EFFE;border-radius:12px;padding:16px 20px;border-left:4px solid #7C3AED;">
                  <p style="margin:0;color:#7C3AED;font-size:13px;font-weight:700;">
                    ✦ New Trial Request Received
                  </p>
                  <p style="margin:6px 0 0;color:#4A5578;font-size:13px;">
                    Submitted on: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
                  </p>
                </div>

              </div>

              <!-- FOOTER -->
              <div style="background:#F8F9FE;padding:20px 40px;border-top:1px solid #E3E7F4;">
                <p style="margin:0;color:#9BA3C0;font-size:12px;text-align:center;">
                  Overton CRM · Ahmedabad, Gujarat, India · overton.in
                </p>
              </div>

            </div>

          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { message: "Failed to send email" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "Form submitted successfully", id: data?.id },
      { status: 200 },
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
