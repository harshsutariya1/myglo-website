"use client";

import React from 'react';
import { BarChart3, Users, CreditCard } from 'lucide-react';

const BusinessSuite = () => {
    return (
        <section id="business" className="py-24 bg-[#140000] text-white relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#E06052]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FFB6A3]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-4 backdrop-blur-sm">
                        <span className="text-xs font-bold text-[#FFB6A3] uppercase tracking-wider">Business Intelligence</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">More Than Just a Booking App</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Manage your entire salon from your pocket. Powerful tools designed to save you time and increase revenue.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#FFB6A3]/50 transition-colors group">
                        <div className="w-12 h-12 rounded-xl bg-[#E06052]/20 flex items-center justify-center mb-6 text-[#E06052] group-hover:scale-110 transition-transform">
                            <BarChart3 size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Smart Analytics</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Track revenue, popular services, and client retention rates in real-time. Make data-driven decisions to grow your business.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#FFB6A3]/50 transition-colors group">
                        <div className="w-12 h-12 rounded-xl bg-[#FFB6A3]/20 flex items-center justify-center mb-6 text-[#FFB6A3] group-hover:scale-110 transition-transform">
                            <Users size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Client Management</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Keep detailed notes on client preferences, formulas, and history. Send automated reminders to reduce no-shows.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#FFB6A3]/50 transition-colors group">
                        <div className="w-12 h-12 rounded-xl bg-[#FC69C3]/20 flex items-center justify-center mb-6 text-[#FC69C3] group-hover:scale-110 transition-transform">
                            <CreditCard size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Seamless Payments</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Secure payment processing for deposits and full services. Handle refunds and tips with a single tap.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessSuite;
