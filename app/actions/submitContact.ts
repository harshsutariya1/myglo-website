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
            from: "MyGlo Contact Form <onboarding@resend.dev>", // Using testing domain
            to: "hr.sutariya1@gmail.com", // Send to user's email
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

        return { success: true, message: "Message sent successfully!" };
    } catch (err) {
        console.error("Unexpected Contact Error:", err);
        return { success: false, message: "An unexpected error occurred." };
    }
}
