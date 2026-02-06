"use client";

import React, { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { loginAction } from "@/app/actions/founderActions";
import { Lock } from "lucide-react";

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            disabled={pending}
            className={`w-full py-3 px-4 bg-[#140000] text-white rounded-xl font-medium transition-all transform active:scale-95 text-sm
        ${pending ? "opacity-70 cursor-wait" : "hover:bg-[#2a0a0a] hover:shadow-lg"}`}
        >
            {pending ? "Unlocking..." : "Access Dashboard"}
        </button>
    );
}

export default function LoginPage() {
    const [state, formAction] = useActionState(loginAction, {
        isAuthenticated: false,
    });

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#FBF9F9] px-4 font-sans">
            <div className="w-full max-w-md">
                {/* Logo/Header */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-[#140000] mb-2 tracking-tight">Founder Access</h1>
                    <p className="text-[#888080] text-sm">Restricted area. Please identify yourself.</p>
                </div>

                {/* Card */}
                <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgba(20,0,0,0.04)] border border-[#F3F3F5]">
                    <form action={formAction} className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="password" className="text-xs font-bold text-[#140000] uppercase tracking-wider ml-1">
                                Security Code
                            </label>
                            <div className="relative group">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="••••••••••••"
                                    required
                                    className="w-full bg-[#FAFAFA] border border-[#E5E5E5] text-[#140000] text-lg px-4 py-3 rounded-xl outline-none focus:border-[#FFB6A3] focus:ring-4 focus:ring-[#FFB6A3]/10 transition-all placeholder:text-[#D4D4D4]"
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#D4D4D4] group-focus-within:text-[#FFB6A3] transition-colors">
                                    <Lock size={18} />
                                </div>
                            </div>
                        </div>

                        {state.error && (
                            <div className="p-3 rounded-lg bg-red-50 text-red-600 text-xs font-medium flex items-center justify-center animate-in fade-in slide-in-from-top-1">
                                {state.error}
                            </div>
                        )}

                        <SubmitButton />
                    </form>
                </div>

                {/* Footer */}
                <div className="mt-8 text-center">
                    <p className="text-[10px] text-[#D4D4D4] uppercase tracking-widest font-semibold">
                        MyGlo Secure Environment
                    </p>
                </div>
            </div>
        </div>
    );
}
