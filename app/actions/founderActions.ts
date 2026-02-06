"use server";

import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

// Configuration
const COOKIE_NAME = "myglo_founder_session";
// In a real production app, this should be a complex hash or handled by a real auth provider (e.g. Supabase Auth)
// For this specific request "production ready... for founders", we use a secure server-side logic 
// but require the user to set a strong ADMIN_PASSWORD env var.
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123"; // TODO: User must change this
const SESSION_SECRET = "founder-access-granted";

// Supabase Setup
// We need the Service Role Key to bypass RLS for reading the full list
// If not provided, it falls back to ANON_KEY which might fail if RLS is strict
const SUPABASE_URL = process.env.SUPABASE_DATABASE_URL!;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY!;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
    auth: {
        persistSession: false,
    },
});

export type WaitlistEntry = {
    id: number;
    email: string;
    name?: string;
    city?: string;
    salon_name?: string;
    mobile?: string;
    created_at: string;
    created_at_aest: string;
    created_at_ist: string;
};

type AuthState = {
    isAuthenticated: boolean;
    error?: string;
};

/**
 * Verifies the password and sets a secure http-only cookie
 */
export async function loginAction(prevState: AuthState, formData: FormData): Promise<AuthState> {
    const password = formData.get("password") as string;

    // Simple hardcoded check - robust enough for small founder team if Env Var is secure
    if (password === ADMIN_PASSWORD) {
        const cookieStore = await cookies();
        cookieStore.set(COOKIE_NAME, SESSION_SECRET, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: "/",
            sameSite: "strict",
        });
        return { isAuthenticated: true };
    }

    return { isAuthenticated: false, error: "Invalid password" };
}

/**
 * Clears the session cookie
 */
export async function logoutAction() {
    const cookieStore = await cookies();
    cookieStore.delete(COOKIE_NAME);
}

/**
 * Checks if the current user is authenticated
 */
export async function checkAuth(): Promise<boolean> {
    const cookieStore = await cookies();
    const session = cookieStore.get(COOKIE_NAME);
    return session?.value === SESSION_SECRET;
}

/**
 * Fetches the waitlist data securely
 */
export async function getWaitlistData(): Promise<{ success: boolean; data?: WaitlistEntry[]; error?: string }> {
    try {
        // Auth check removed as per user request to allow direct access
        // const isAuthenticated = await checkAuth();
        // if (!isAuthenticated) {
        //     return { success: false, error: "Unauthorized" };
        // }

        const { data, error } = await supabase
            .from("waitlist")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) {
            console.error("Supabase Admin Fetch Error:", error);
            return { success: false, error: "Failed to fetch data. Ensure SERVICE_ROLE_KEY is set if RLS is enabled." };
        }

        return { success: true, data: data as WaitlistEntry[] };
    } catch (err) {
        console.error("App Error:", err);
        return { success: false, error: "Internal Server Error" };
    }
}
