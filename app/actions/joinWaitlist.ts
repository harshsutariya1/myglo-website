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
                Welcome to the Future of Beauty Business. <span style="color: #FFB6A3;">✨</span>
              </h2>
              
              <p style="color: #534B4B; font-size: 16px; line-height: 1.7; margin: 0 0 24px 0;">
                You've just taken the first step toward elevating your salon. 
                MyGlo is designed to give you effortless control over bookings, maximize your visibility, and connect you with serious clients in the Gold Coast.
              </p>
              
              <p style="color: #534B4B; font-size: 16px; line-height: 1.7; margin: 0 0 32px 0;">
                You are now on our priority waitlist for service providers. We will notify you the moment we launch so you can claim your profile and start growing.
              </p>

              <!-- Perks Section -->
              <div style="background-color: #FFF3F0; border-radius: 16px; padding: 32px; margin-bottom: 32px; border: 1px solid rgba(255, 182, 163, 0.4);">
                <p style="color: #140000; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 16px 0;">Waitlist Perks</p>
                
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td width="24" valign="top" style="padding-bottom: 16px;">
                      <span style="font-size: 18px;">🚀</span>
                    </td>
                    <td style="padding-left: 16px; padding-bottom: 16px;">
                      <p style="margin: 0; color: #140000; font-weight: 600; font-size: 15px;">Early Access</p>
                      <p style="margin: 4px 0 0 0; color: #534B4B; font-size: 14px; line-height: 1.5;">Be the first to set up your portfolio and attract new clients.</p>
                    </td>
                  </tr>
                  <tr>
                    <td width="24" valign="top">
                      <span style="font-size: 18px;">💎</span>
                    </td>
                    <td style="padding-left: 16px;">
                      <p style="margin: 0; color: #140000; font-weight: 600; font-size: 15px;">Launch Special</p>
                      <p style="margin: 4px 0 0 0; color: #534B4B; font-size: 14px; line-height: 1.5;">Enjoy 0% fees for the first 3 months.</p>
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

type JoinWaitlistData = {
  email: string;
  name: string;
  city: string;
  salonName: string;
  mobile?: string;
};

export async function joinWaitlist(data: JoinWaitlistData): Promise<ActionResponse> {
  const { email, name, city, salonName, mobile } = data;

  if (!email || !email.includes("@")) {
    return { success: false, message: "Invalid email address." };
  }
  if (!name || name.trim().length === 0) {
    return { success: false, message: "Name is required." };
  }
  if (!city || city.trim().length === 0) {
    return { success: false, message: "City is required." };
  }
  if (!salonName || salonName.trim().length === 0) {
    return { success: false, message: "Salon Name is required." };
  }

  try {
    console.log(`[JoinWaitlist] Attempting to register: ${email}, Name: ${name}, Salon: ${salonName}`);

    // 1. Insert into Supabase
    // We omit 'created_at' fields to let the Database handle the Timezone logic via DEFAULT values
    const { data: insertedData, error: dbError } = await supabase
      .from("waitlist")
      .insert([{
        email,
        name,
        city,
        salon_name: salonName,
        mobile
      }])
      .select(); // Select back to confirm insertion

    if (insertedData) {
      console.log(`[JoinWaitlist] DB Insert Success. ID: ${insertedData[0]?.id}`);
    }

    // Handle duplicate key error (code 23505 in Postgres)
    if (dbError) {
      if (dbError.code === "23505") {
        // Unique violation: The user is already on the list.
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
    }

    // 3. Send Internal Notification to Admins
    try {
      await resend.emails.send({
        from: "MyGlo System <hello@myglo.app>",
        to: ["harsh@myglo.app"],
        subject: `New Waitlist Signup: ${name} from ${salonName}`,
        html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
             body { margin: 0; padding: 0; background-color: #F3F3F5; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; }
             .container { max-width: 600px; width: 100%; margin: 40px auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
             .header { background-color: #140000; padding: 32px; text-align: center; }
             .content { padding: 40px 32px; }
             .card { background-color: #F8F9FA; border-radius: 12px; border: 1px solid #E9ECEF; padding: 24px; }
             .label { font-size: 11px; font-weight: 700; text-transform: uppercase; color: #6C757D; letter-spacing: 0.5px; margin-bottom: 4px; }
             .value { font-size: 16px; font-weight: 600; color: #212529; margin: 0; }
             .row { margin-bottom: 20px; }
             .cta-button { display: inline-block; background-color: #140000; color: #ffffff; padding: 14px 28px; font-size: 14px; font-weight: 700; text-decoration: none; border-radius: 8px; margin-top: 24px; }
          </style>
        </head>
        <body>
          <div class="container">
            <!-- Header -->
            <div class="header">
               <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 600;">MyGlo Admin Notification</h1>
            </div>

            <!-- Content -->
            <div class="content">
              <div style="text-align: center; margin-bottom: 32px;">
                <span style="background-color: #ECFDF5; color: #059669; padding: 6px 12px; border-radius: 100px; font-size: 12px; font-weight: 700; text-transform: uppercase; border: 1px solid #D1FAE5;">New Waitlist Lead</span>
                <h2 style="font-size: 24px; color: #140000; margin: 16px 0 8px 0;">${salonName}</h2>
                <p style="color: #6C757D; margin: 0; font-size: 15px;">just joined the waitlist.</p>
              </div>

              <div class="card">
                <div class="row">
                   <div style="display: inline-block; width: 48%; vertical-align: top;">
                      <p class="label">Contact Name</p>
                      <p class="value">${name}</p>
                   </div>
                   <div style="display: inline-block; width: 48%; vertical-align: top;">
                      <p class="label">City</p>
                      <p class="value">${city}</p>
                   </div>
                </div>
                
                <div class="row">
                   <div style="display: inline-block; width: 48%; vertical-align: top;">
                      <p class="label">Email</p>
                      <p class="value"><a href="mailto:${email}" style="color: #140000; text-decoration: none; border-bottom: 1px dotted #140000;">${email}</a></p>
                   </div>
                   <div style="display: inline-block; width: 48%; vertical-align: top;">
                      <p class="label">Mobile</p>
                      <p class="value">${mobile || '<span style="color: #ADB5BD; font-weight: 400;">Not provided</span>'}</p>
                   </div>
                </div>

                <div style="border-top: 1px solid #E9ECEF; margin: 16px 0;"></div>
                
                <div>
                   <p class="label" style="margin-bottom: 8px;">Quick Actions</p>
                   <p style="margin: 0; font-size: 13px;">
                      <a href="mailto:${email}?subject=Welcome%20to%20MyGlo&body=Hi%20${name.split(' ')[0]}," style="color: #E06052; text-decoration: none; font-weight: 600;">Email this lead &rarr;</a>
                   </p>
                </div>
              </div>

              <div style="text-align: center;">
                 <a href="https://myglo.app/waitlist" class="cta-button">View Full Dashboard</a>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background-color: #F8F9FA; padding: 16px; text-align: center; border-top: 1px solid #E9ECEF;">
               <p style="font-size: 11px; color: #ADB5BD; margin: 0;">Sent automatically by MyGlo Website</p>
            </div>
          </div>
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
