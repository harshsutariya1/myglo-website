"use client";

import React from 'react';
import { Check, ShieldCheck, Zap, Sparkles, HelpCircle } from 'lucide-react';

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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Choose How You Grow</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Whether you're just starting out or running an empire, we have a model that fits. No hidden costs, no contracts.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
                    {/* Option A: Freelancer */}
                    <div className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#FFB6A3]/50 transition-all duration-300 hover:-translate-y-1 flex flex-col">
                        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#FFB6A3]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-2">The Freelancer</h3>
                            <p className="text-gray-400 text-sm">Perfect for mobile techs, solo artists & startups.</p>
                        </div>

                        <div className="mb-8">
                            <div className="flex items-baseline gap-1">
                                <span className="text-5xl font-bold text-white">$0</span>
                                <span className="text-gray-400">/ month</span>
                            </div>
                            <div className="mt-2 text-[#FFB6A3] font-semibold flex items-center gap-2">
                                <Zap size={16} className="fill-current" />
                                7.5% per booking
                            </div>
                            <p className="text-xs text-gray-500 mt-2">Only pay when you make money.</p>
                        </div>

                        <ul className="space-y-4 mb-8 flex-grow">
                            <li className="flex items-start gap-3 text-gray-300">
                                <Check size={18} className="text-[#07944F] mt-1 shrink-0" />
                                <span>No monthly subscription fees</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300">
                                <Check size={18} className="text-[#07944F] mt-1 shrink-0" />
                                <span>Full access to all features</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300">
                                <Check size={18} className="text-[#07944F] mt-1 shrink-0" />
                                <span>Unlimited portfolio uploads</span>
                            </li>
                        </ul>

                        <button className="w-full py-4 rounded-xl bg-white/10 text-white font-bold hover:bg-white/20 transition-colors border border-white/5">
                            Start for Free
                        </button>
                    </div>

                    {/* Option B: Power Salon */}
                    <div className="relative p-8 rounded-3xl bg-gradient-to-b from-[#2a1717] to-[#1a0f0f] border border-[#E06052]/30 hover:border-[#E06052] transition-all duration-300 hover:-translate-y-1 flex flex-col shadow-2xl shadow-black/50">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#E06052] text-white text-xs font-bold rounded-full uppercase tracking-wide shadow-lg">
                            Most Popular
                        </div>

                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-2 text-white">The Power Salon</h3>
                            <p className="text-gray-400 text-sm">For established salons with high volume.</p>
                        </div>

                        <div className="mb-8">
                            <div className="flex items-baseline gap-1">
                                <span className="text-5xl font-bold text-[#E06052]">$59</span>
                                <span className="text-gray-300">/ month</span>
                            </div>
                            <div className="mt-2 text-green-400 font-semibold flex items-center gap-2">
                                <Sparkles size={16} />
                                0% commission
                            </div>
                            <p className="text-xs text-gray-500 mt-2">Flat fee. Keep 100% of your earnings.</p>
                        </div>

                        <ul className="space-y-4 mb-8 flex-grow">
                            <li className="flex items-start gap-3 text-gray-300">
                                <Check size={18} className="text-[#E06052] mt-1 shrink-0" />
                                <span>Predictable monthly cost</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300">
                                <Check size={18} className="text-[#E06052] mt-1 shrink-0" />
                                <span>No booking fees for you</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300">
                                <Check size={18} className="text-[#E06052] mt-1 shrink-0" />
                                <span>Priority support</span>
                            </li>
                        </ul>

                        <button className="w-full py-4 rounded-xl bg-[#E06052] text-white font-bold hover:bg-[#c94536] transition-colors shadow-lg shadow-[#E06052]/20">
                            Get Pro Access
                        </button>
                    </div>
                </div>

                {/* The Safety Cap Feature */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative rounded-3xl overflow-hidden">
                        {/* Gradient Border Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#FFB6A3] via-[#E06052] to-[#FFB6A3] opacity-20"></div>
                        
                        <div className="relative bg-[#1a0f0f]/80 backdrop-blur-xl p-8 md:p-12 border border-white/10 m-[1px] rounded-[23px] flex flex-col md:flex-row items-center gap-8 md:gap-12">
                            <div className="shrink-0 relative">
                                <div className="absolute inset-0 bg-[#E06052] blur-2xl opacity-20"></div>
                                <ShieldCheck size={80} className="text-[#E06052] relative z-10" />
                            </div>
                            
                            <div className="flex-grow text-center md:text-left">
                                <h3 className="text-2xl font-bold text-white mb-3">The "Safety Cap" Guarantee 🛡️</h3>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    Start on the commission plan without fear. If your commissions in a single month ever exceed <span className="text-[#FFB6A3] font-bold">$59</span>, we automatically cap your fee at $59.
                                </p>
                                <div className="inline-flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                                    <span className="w-2 h-2 rounded-full bg-[#07944F]"></span>
                                    <span>You never pay more than the pros.</span>
                                </div>
                            </div>

                            <div className="shrink-0 flex flex-col items-center gap-2">
                                <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold">We are Partners</div>
                                <div className="text-lg font-bold text-white">Not Predators</div>
                            </div>
                        </div>
                    </div>
                    
                    <p className="text-center text-gray-500 text-sm mt-8 max-w-2xl mx-auto">
                        * All plans include secure payments via Stripe Connect. Standard credit card processing fees apply.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
