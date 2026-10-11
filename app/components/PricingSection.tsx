"use client";

import { Check, Zap, Sparkles } from 'lucide-react';

const PricingSection = () => {
    return (
        <section id="pricing" className="py-24 bg-[#140000] text-white relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#E06052]/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FFB6A3]/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
                        <span className="text-xs font-bold text-[#FFB6A3] uppercase tracking-wider">Simple Pricing</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">One Simple Fee</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Every salon and artist gets the same pricing. No subscription, no plans to choose between and no monthly cap.
                    </p>
                </div>

                {/* Pricing Card */}
                <div className="max-w-xl mx-auto">
                    <div className="group relative p-8 rounded-3xl bg-gradient-to-b from-[#2a1717] to-[#1a0f0f] border border-[#E06052]/30 hover:border-[#E06052] transition-all duration-300 hover:-translate-y-1 flex flex-col shadow-2xl shadow-black/50">
                        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#FFB6A3]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-2">Pay Per Booking</h3>
                            <p className="text-gray-400 text-sm">For salons, mobile techs and solo artists.</p>
                        </div>

                        <div className="mb-8">
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-bold text-[#E06052]">5.5%</span>
                                <span className="text-gray-300">per card booking</span>
                            </div>
                            <div className="mt-2 text-[#FFB6A3] font-semibold flex items-center gap-2">
                                <Zap size={16} className="fill-current" />
                                $0 / month. No subscription.
                            </div>
                            <p className="text-xs text-gray-500 mt-2">Only pay when a client pays by card through MyGlo.</p>
                        </div>

                        <ul className="space-y-4 mb-8 flex-grow">
                            <li className="flex items-start gap-3 text-gray-300">
                                <Check size={18} className="text-[#07944F] mt-1 shrink-0" />
                                <span>5.5% of the amount your client pays by card through MyGlo</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300">
                                <Check size={18} className="text-[#07944F] mt-1 shrink-0" />
                                <span>No subscription and no monthly cap</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300">
                                <Check size={18} className="text-[#07944F] mt-1 shrink-0" />
                                <span>Cash bookings carry no MyGlo fee</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300">
                                <Check size={18} className="text-[#07944F] mt-1 shrink-0" />
                                <span>Card processing is included in the 5.5%</span>
                            </li>
                        </ul>

                        <div className="mb-8 flex items-start gap-3 text-sm text-gray-300 bg-white/5 px-4 py-3 rounded-xl border border-white/10">
                            <Sparkles size={18} className="text-[#FFB6A3] mt-0.5 shrink-0" />
                            <span>
                                <span className="font-bold text-white">New providers:</span> your first 14 days of card payments carry no MyGlo fee.
                            </span>
                        </div>

                        <a href="#waitlist" className="block w-full py-4 rounded-xl bg-[#E06052] text-white text-center font-bold hover:bg-[#c94536] transition-colors shadow-lg shadow-[#E06052]/20">
                            Start for Free
                        </a>
                    </div>

                    <p className="text-center text-gray-500 text-sm mt-8 max-w-2xl mx-auto">
                        * Card payments are processed securely via Stripe Connect. The 5.5% includes standard card processing and any GST on MyGlo&apos;s fee, so there&apos;s no separate processing fee. The 14-day introductory period starts when card payments are first enabled on your account. All amounts in AUD.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
