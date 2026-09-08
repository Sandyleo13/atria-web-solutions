import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      company,
      phone,
      service,
      budget,
      message,
    } = body;

    // Basic validation
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        {
          error: "Please fill in all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      // Temporary sender for local/testing
      from: "Atria Web Solutions <onboarding@resend.dev>",

      // Resend testing recipient
      to: ["sandipandas0816@gmail.com"],

      // Clicking Reply will reply directly to the person
      // who submitted the contact form.
      replyTo: email,

      subject: `New Project Inquiry — ${name}`,

      html: `
        <div
          style="
            font-family: Arial, Helvetica, sans-serif;
            max-width: 700px;
            margin: 0 auto;
            color: #222222;
          "
        >

          <!-- Header -->

          <div
            style="
              background: #ef4444;
              padding: 24px;
              border-radius: 12px 12px 0 0;
            "
          >
            <h1
              style="
                color: #ffffff;
                margin: 0;
                font-size: 26px;
              "
            >
              New Project Inquiry
            </h1>

            <p
              style="
                color: rgba(255,255,255,0.9);
                margin: 8px 0 0;
                font-size: 14px;
              "
            >
              A new contact form submission was received
              from the Atria Web Solutions website.
            </p>
          </div>

          <!-- Main Content -->

          <div
            style="
              padding: 28px;
              border: 1px solid #e5e7eb;
              border-top: none;
              border-radius: 0 0 12px 12px;
            "
          >

            <!-- Contact Information -->

            <h2
              style="
                margin-top: 0;
                margin-bottom: 20px;
                font-size: 20px;
              "
            >
              Contact Information
            </h2>

            <table
              style="
                width: 100%;
                border-collapse: collapse;
              "
            >

              <tr>
                <td
                  style="
                    padding: 10px 0;
                    font-weight: bold;
                    width: 160px;
                    vertical-align: top;
                  "
                >
                  Name
                </td>

                <td style="padding: 10px 0;">
                  ${escapeHtml(name)}
                </td>
              </tr>

              <tr>
                <td
                  style="
                    padding: 10px 0;
                    font-weight: bold;
                    vertical-align: top;
                  "
                >
                  Email
                </td>

                <td style="padding: 10px 0;">
                  ${escapeHtml(email)}
                </td>
              </tr>

              <tr>
                <td
                  style="
                    padding: 10px 0;
                    font-weight: bold;
                    vertical-align: top;
                  "
                >
                  Phone
                </td>

                <td style="padding: 10px 0;">
                  ${escapeHtml(phone || "Not provided")}
                </td>
              </tr>

              <tr>
                <td
                  style="
                    padding: 10px 0;
                    font-weight: bold;
                    vertical-align: top;
                  "
                >
                  Company
                </td>

                <td style="padding: 10px 0;">
                  ${escapeHtml(company || "Not provided")}
                </td>
              </tr>

              <tr>
                <td
                  style="
                    padding: 10px 0;
                    font-weight: bold;
                    vertical-align: top;
                  "
                >
                  Service
                </td>

                <td style="padding: 10px 0;">
                  ${escapeHtml(service)}
                </td>
              </tr>

              <tr>
                <td
                  style="
                    padding: 10px 0;
                    font-weight: bold;
                    vertical-align: top;
                  "
                >
                  Budget
                </td>

                <td style="padding: 10px 0;">
                  ${escapeHtml(budget || "Not provided")}
                </td>
              </tr>

            </table>

            <!-- Divider -->

            <hr
              style="
                border: none;
                border-top: 1px solid #e5e7eb;
                margin: 25px 0;
              "
            />

            <!-- Project Details -->

            <h2
              style="
                margin-bottom: 15px;
                font-size: 20px;
              "
            >
              Project Details
            </h2>

            <div
              style="
                background: #f9fafb;
                padding: 18px;
                border-radius: 10px;
                line-height: 1.7;
                white-space: pre-wrap;
                border: 1px solid #eeeeee;
              "
            >
              ${escapeHtml(message)}
            </div>

            <!-- Footer -->

            <div
              style="
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e5e7eb;
                color: #6b7280;
                font-size: 13px;
              "
            >
              This message was submitted through the
              Atria Web Solutions contact form.
            </div>

          </div>
        </div>
      `,
    });

    // Resend returned an error
    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          error: "Failed to send email.",
        },
        {
          status: 500,
        }
      );
    }

    // Success
    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully.",
      data,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        error: "Something went wrong. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}

/**
 * Prevent HTML injection inside the email body.
 */
function escapeHtml(value: string) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}