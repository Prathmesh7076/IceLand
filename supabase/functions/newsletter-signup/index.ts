import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req: Request) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { email } = await req.json();

    // Validate email
    if (!email || typeof email !== "string") {
      console.error("Missing or invalid email");
      return new Response(
        JSON.stringify({ error: "A valid email is required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || email.length > 255) {
      console.error("Invalid email format:", email);
      return new Response(
        JSON.stringify({ error: "Please enter a valid email address" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Save to database
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { error: dbError } = await supabase
      .from("newsletter_subscribers")
      .upsert({ email, is_active: true }, { onConflict: "email" });

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save subscription" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("Subscriber saved:", email);

    // Send welcome email via Resend
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      try {
        const { error: emailError } = await resend.emails.send({
          from: "Iceland Adventures <onboarding@resend.dev>",
          to: [email],
          subject: "Welcome to the Rope Team! 🏔️",
          html: `
            <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #f8f9fa;">
              <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="font-size: 28px; color: #0f1a2e; letter-spacing: 3px; margin: 0;">ICELAND</h1>
                <p style="font-size: 10px; color: #0f1a2e; letter-spacing: 5px; margin: 0;">ADVENTURES</p>
              </div>
              <div style="background: white; border-radius: 8px; padding: 40px 30px; box-shadow: 0 2px 10px rgba(0,0,0,0.08);">
                <h2 style="color: #0f1a2e; font-size: 22px; margin-top: 0;">Welcome to the Rope Team!</h2>
                <p style="color: #555; line-height: 1.6; font-size: 15px;">
                  You're now part of the crew. Expect weekly dispatches on mountain weather, road status, and gear hacks directly from the valley.
                </p>
                <p style="color: #555; line-height: 1.6; font-size: 15px;">
                  Safe enough for the kids. Wild enough for the soul.
                </p>
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                  <p style="color: #999; font-size: 12px; margin: 0;">
                    © 2025 Iceland Adventures | Solang Valley, Manali, HP
                  </p>
                </div>
              </div>
            </div>
          `,
        });

        if (emailError) {
          console.error("Email send error:", emailError);
        } else {
          console.log("Welcome email sent to:", email);
        }
      } catch (emailErr) {
        console.error("Resend error:", emailErr);
      }
    } else {
      console.warn("RESEND_API_KEY not set, skipping welcome email");
    }

    return new Response(
      JSON.stringify({ message: "Successfully subscribed!" }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});
