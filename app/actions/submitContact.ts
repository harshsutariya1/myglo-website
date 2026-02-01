"use server";

import { Resend } from "resend";

const RESEND_KEY = process.env.RESEND_API_KEY!;
const resend = new Resend(RESEND_KEY);

type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

type ActionResponse = {
  success: boolean;
  message: string;
};

export async function submitContact(formData: ContactFormData): Promise<ActionResponse> {
  const { firstName, lastName, email, message } = formData;

  if (!firstName || !lastName || !email || !message) {
    return { success: false, message: "All fields are required." };
  }

  try {
    const { error } = await resend.emails.send({
      from: process.env.NODE_ENV === 'development'
        ? "MyGlo Contact Form <onboarding@resend.dev>"
        : "MyGlo Contact Form <hello@myglo.app>",
      to: process.env.NODE_ENV === 'development' ? "harsh@myglo.app" : ["harsh@myglo.app", "sam@myglo.app"],
      replyTo: email,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
            body { margin: 0; padding: 0; background-color: #F3F3F5; font-family: 'Plus Jakarta Sans', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; }
            .mobile-padding { padding: 40px 20px; }
            @media only screen and (max-width: 600px) {
              .mobile-padding { padding: 20px 10px; }
              .header { padding: 32px 24px !important; }
              .content { padding: 32px 24px !important; }
            }
          </style>
        </head>
        <body style="margin: 0; padding: 0; background-color: #F3F3F5; font-family: 'Plus Jakarta Sans', Helvetica, Arial, sans-serif;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td align="center" class="mobile-padding" style="padding: 40px 20px;">
                <table align="center" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; width: 100%; background: #ffffff; border-radius: 20px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05); overflow: hidden;">
                  
                  <!-- Header -->
                  <tr>
                    <td class="header" style="background-color: #140000; padding: 40px; text-align: center;">
                      <h1 style="color: #ffffff; font-size: 24px; font-weight: 700; margin: 0; letter-spacing: -0.5px;">New Inquiry</h1>
                      <p style="color: #FFB6A3; font-size: 14px; margin: 8px 0 0 0; font-weight: 500;">Sent via MyGlo Website</p>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td class="content" style="padding: 48px;">
                      
                      <!-- Sender Info Box -->
                      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #FFF3F0; border-radius: 12px; margin-bottom: 32px;">
                        <tr>
                          <td style="padding: 24px;">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td style="padding-bottom: 16px;">
                                  <p style="margin: 0; font-size: 12px; color: #E06052; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">From</p>
                                  <p style="margin: 4px 0 0 0; font-size: 18px; color: #140000; font-weight: 700;">${firstName} ${lastName}</p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p style="margin: 0; font-size: 12px; color: #E06052; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Email Address</p>
                                  <p style="margin: 4px 0 0 0; font-size: 16px; color: #140000; font-weight: 500;">
                                    <a href="mailto:${email}" style="color: #140000; text-decoration: none; border-bottom: 1px solid #FFB6A3;">${email}</a>
                                  </p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>

                      <!-- Message Body -->
                      <p style="margin: 0 0 12px 0; font-size: 12px; color: #9CA3AF; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
                      <div style="background-color: #F9FAFB; border: 1px solid #E5E7EB; border-radius: 12px; padding: 24px;">
                        <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #374151; white-space: pre-wrap;">${message}</p>
                      </div>

                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #F9FAFB; padding: 24px; text-align: center; border-top: 1px solid #F3F4F6;">
                      <p style="color: #9CA3AF; font-size: 12px; margin: 0;">
                        This email was sent from the <strong>MyGlo Contact Form</strong>.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend Contact Error:", error);
      if (process.env.NODE_ENV === 'development') {
        return { success: false, message: `Dev Error: ${error.message}` };
      }
      return { success: false, message: "Failed to send message." };
    }

    // 2. Send Auto-Reply to User
    // We send this essentially "fire and forget" or await it.
    // We'll catch errors so it doesn't report failure if the admin email succeeded.
    try {
      await resend.emails.send({
        from: process.env.NODE_ENV === 'development'
          ? "MyGlo Team <onboarding@resend.dev>"
          : "MyGlo Team <hello@myglo.app>",
        to: email,
        subject: "We received your message! ✨",
        html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
            body { margin: 0; padding: 0; background-color: #FFF3F0; font-family: 'Plus Jakarta Sans', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; }
            .mobile-padding { padding: 40px 20px; }
            @media only screen and (max-width: 600px) {
              .mobile-padding { padding: 20px 10px; }
              .content { padding: 32px 24px !important; }
            }
          </style>
        </head>
        <body style="margin: 0; padding: 0; background-color: #FFF3F0; font-family: 'Plus Jakarta Sans', Helvetica, Arial, sans-serif;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td align="center" class="mobile-padding" style="padding: 40px 20px;">
                <table align="center" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; width: 100%; background: #ffffff; border-radius: 20px; box-shadow: 0 8px 30px rgba(20, 0, 0, 0.06); overflow: hidden; border: 1px solid rgba(255, 182, 163, 0.1);">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background-color: #140000; padding: 40px; text-align: center; background-image: radial-gradient(circle at top right, #2a1010 0%, #140000 100%);">
                      <h1 style="color: #ffffff; font-size: 24px; font-weight: 700; margin: 0; letter-spacing: -0.5px;">MyGlo</h1>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td class="content" style="padding: 48px;">
                      <h2 style="color: #140000; font-size: 20px; font-weight: 700; margin: 0 0 24px 0;">
                        Hi ${firstName},
                      </h2>
                      <p style="color: #534B4B; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
                        Thanks for reaching out! We have received your message and wanted to let you know that we're looking into it.
                      </p>
                      <p style="color: #534B4B; font-size: 16px; line-height: 1.6; margin: 0 0 32px 0;">
                        One of our team members will get back to you shortly. In the meantime, feel free to follow us on Instagram for updates.
                      </p>

                      <div style="background-color: #F9FAFB; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                        <p style="margin: 0; font-size: 12px; color: #9CA3AF; font-weight: 700; text-transform: uppercase;">Your Message</p>
                        <p style="margin: 8px 0 0 0; font-size: 14px; color: #374151; font-style: italic;">"${message.length > 100 ? message.substring(0, 100) + '...' : message}"</p>
                      </div>

                      <a href="https://instagram.com/mygloapp" style="color: #140000; text-decoration: none; font-weight: 600; font-size: 14px; border-bottom: 2px solid #FFB6A3;">
                        Follow us on Instagram &rarr;
                      </a>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #FBF9F9; padding: 24px; text-align: center; border-top: 1px solid #F3F4F6;">
                      <p style="color: #9CA3AF; font-size: 12px; margin: 0;">
                        &copy; ${new Date().getFullYear()} MyGlo Australia.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
        `,
      });
    } catch (replyErr) {
      console.error("Failed to send auto-reply to user:", replyErr);
    }

    return { success: true, message: "Message sent successfully!" };
  } catch (err) {
    console.error("Unexpected Contact Error:", err);
    return { success: false, message: "An unexpected error occurred." };
  }
}
