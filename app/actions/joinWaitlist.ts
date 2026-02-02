"use server";

import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

// --- Configuration & Types ---

// Ensure these environment variables are available in Netlify
const SUPABASE_URL = process.env.SUPABASE_DATABASE_URL!;
const SUPABASE_KEY = process.env.SUPABASE_ANON_KEY!; // Use Anon Key for public access (RLS protected)
const RESEND_KEY = process.env.RESEND_API_KEY!;

// Initialize Clients
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
const resend = new Resend(RESEND_KEY);

type ActionResponse = {
  success: boolean;
  message: string;
};

// --- Branded Email Template ---
const getWelcomeEmailHtml = () => `
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    /* Font import removed for better email client compatibility and privacy. Using system font stack. */
    body { margin: 0; padding: 0; background-color: #FFF3F0; font-family: 'Plus Jakarta Sans', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; }
    .mobile-padding { padding: 40px 20px; }
    @media only screen and (max-width: 600px) {
      .mobile-padding { padding: 20px 10px; }
      .content-padding { padding: 32px 24px !important; }
      .header-padding { padding: 32px 24px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #FFF3F0; font-family: 'Plus Jakarta Sans', Helvetica, Arial, sans-serif;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td align="center" class="mobile-padding" style="padding: 40px 20px;">
        <table align="center" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; width: 100%; background: #ffffff; border-radius: 24px; box-shadow: 0 8px 30px rgba(20, 0, 0, 0.06); overflow: hidden; border: 1px solid rgba(255, 182, 163, 0.1);">
          
          <!-- Header -->
          <tr>
            <td class="header-padding" style="background-color: #140000; padding: 48px; text-align: center; background-image: radial-gradient(circle at top right, #2a1010 0%, #140000 100%);">
              <h1 style="color: #ffffff; font-size: 32px; font-weight: 800; margin: 0; letter-spacing: -1px;">MyGlo</h1>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td class="content-padding" style="padding: 48px 48px;">
              <h2 style="color: #140000; font-size: 24px; font-weight: 700; margin: 0 0 24px 0; line-height: 1.3;">
                Welcome to the inner circle. <span style="color: #FFB6A3;">✨</span>
              </h2>
              
              <p style="color: #534B4B; font-size: 16px; line-height: 1.7; margin: 0 0 24px 0;">
                You've just secured your spot for the future of beauty. 
                We represent the new standard in beauty booking—combining effortless discovery with instant access to the Gold Coast's best artists. Get ready for an experience that's as beautiful as the results.
              </p>
              
              <p style="color: #534B4B; font-size: 16px; line-height: 1.7; margin: 0 0 32px 0;">
                You are now on our priority waitlist. We will notify you the moment MyGlo launches in the Gold Coast.
              </p>

              <!-- Perks Section -->
              <div style="background-color: #FFF3F0; border-radius: 16px; padding: 32px; margin-bottom: 32px; border: 1px solid rgba(255, 182, 163, 0.4);">
                <p style="color: #140000; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 16px 0;">Waitlist Perks</p>
                
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td width="24" valign="top" style="padding-bottom: 16px;">
                      <span style="font-size: 18px;">💎</span>
                    </td>
                    <td style="padding-left: 16px; padding-bottom: 16px;">
                      <p style="margin: 0; color: #140000; font-weight: 600; font-size: 15px;">Early Access</p>
                      <p style="margin: 4px 0 0 0; color: #534B4B; font-size: 14px; line-height: 1.5;">Be the first to download the app and secure appointments.</p>
                    </td>
                  </tr>
                  <tr>
                    <td width="24" valign="top">
                      <span style="font-size: 18px;">🎁</span>
                    </td>
                    <td style="padding-left: 16px;">
                      <p style="margin: 0; color: #140000; font-weight: 600; font-size: 15px;">Exclusive Launch Offers</p>
                      <p style="margin: 4px 0 0 0; color: #534B4B; font-size: 14px; line-height: 1.5;">Unlock special discounts and rewards just for our founding members.</p>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- CTA Button -->
              <table border="0" cellspacing="0" cellpadding="0" width="100%">
                <tr>
                  <td align="center" style="padding-top: 8px;">
                    <a href="https://myglo.app" style="display: inline-block; background-color: #140000; color: #ffffff; padding: 18px 36px; font-size: 16px; font-weight: 600; text-decoration: none; border-radius: 100px; box-shadow: 0 4px 14px 0 rgba(0,0,0,0.2);">
                      Visit Website
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Decorative Separator -->
          <tr>
            <td style="height: 4px; background: linear-gradient(90deg, #FFB6A3 0%, #FC69C3 100%);"></td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #FBF9F9; padding: 32px; text-align: center;">
              <p style="color: #9CA3AF; font-size: 13px; margin: 0 0 8px 0; font-weight: 500;">
                &copy; ${new Date().getFullYear()} MyGlo Australia.
              </p>
              <p style="color: #D1D5DB; font-size: 12px; margin: 0;">
                Made with <span style="color: #E06052;">&#10084;</span> in Gold Coast
              </p>
              <div style="margin-top: 24px;">
                 <a href="https://instagram.com/mygloapp" style="display: inline-block; margin: 0 8px; color: #140000; text-decoration: none; font-size: 12px; font-weight: 600;">Instagram</a>
                 <span style="color: #E5E7EB;">•</span>
                 <a href="https://myglo.app" style="display: inline-block; margin: 0 8px; color: #140000; text-decoration: none; font-size: 12px; font-weight: 600;">Website</a>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

// --- Server Action ---

export async function joinWaitlist(email: string): Promise<ActionResponse> {
  if (!email || !email.includes("@")) {
    return { success: false, message: "Invalid email address." };
  }

  try {
    // 1. Insert into Supabase
    const { error: dbError } = await supabase
      .from("waitlist")
      .insert([{ email, created_at: new Date().toISOString() }]);

    // Handle duplicate key error (code 23505 in Postgres)
    if (dbError) {
      if (dbError.code === "23505") {
        // Unique violation: The user is already on the list.
        // We treat this as a "success" to the user, but don't send another email.
        return { success: true, message: "You are already on the list!" };
      }
      console.error("Supabase Error:", dbError);
      return { success: false, message: "Failed to join waitlist. Please try again." };
    }

    // 2. Send Welcome Email via Resend
    const { error: emailError } = await resend.emails.send({
      from: "MyGlo <hello@myglo.app>",
      to: email,
      subject: "Welcome to the MyGlo Waitlist! ✨",
      html: getWelcomeEmailHtml(),
    });

    if (emailError) {
      console.error("Resend Error:", emailError);

      // In Development, we want to know if the email failed (e.g. Resend unauthorized)


      // In Production, we fail silently on email to not alarm the user (since DB insert worked)
    }

    // 3. Send Internal Notification to Admins
    // We fire and forget this so not to block the user response, or we can await it.
    // For simplicity, we await it but catch errors softly so it doesn't fail the user request.
    try {
      await resend.emails.send({
        from: "MyGlo System <hello@myglo.app>",
        to: ["harsh@myglo.app"],
        subject: `New Waitlist Signup: ${email}`,
        html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            /* Font import removed for better email client compatibility and privacy. Using system font stack. */
            body { margin: 0; padding: 0; background-color: #F3F3F5; font-family: 'Plus Jakarta Sans', Helvetica, Arial, sans-serif; }
          </style>
        </head>
        <body style="margin: 0; padding: 40px 20px; background-color: #F3F3F5;">
          <table align="center" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; width: 100%; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05); font-family: 'Plus Jakarta Sans', sans-serif;">
            
            <!-- Header -->
            <tr>
              <td style="background-color: #140000; padding: 32px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">🚀 New Signup</h1>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding: 40px;">
                <p style="margin: 0 0 24px 0; color: #4B5563; font-size: 16px;">
                  A new user has just joined the <strong>MyGlo Waitlist</strong>.
                </p>

                <div style="background-color: #F3F4F6; padding: 24px; border-radius: 12px; border: 1px solid #E5E7EB;">
                  <p style="margin: 0 0 8px 0; color: #6B7280; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">User Email</p>
                  <p style="margin: 0; color: #111827; font-size: 20px; font-weight: 600; word-break: break-all;">
                    <a href="mailto:${email}" style="color: #111827; text-decoration: none;">${email}</a>
                  </p>
                </div>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background-color: #F9FAFB; padding: 20px; text-align: center; border-top: 1px solid #F3F4F6;">
                <p style="margin: 0; color: #9CA3AF; font-size: 12px;">
                  Sent from MyGlo Website
                </p>
              </td>
            </tr>
          </table>
        </body>
        </html>
        `,
      });
    } catch (adminErr) {
      console.error("Failed to send admin notification:", adminErr);
    }

    return { success: true, message: "Successfully joined!" };

  } catch (err) {
    console.error("Unexpected Error:", err);
    return { success: false, message: "An unexpected error occurred." };
  }
}
