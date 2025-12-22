"use client";

import React from 'react';
import { UserCheck, Lock, Star } from 'lucide-react';

const TrustSafety = () => {
    return (
        <section className="py-24 bg-[#140000] text-white relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#E06052]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#FFB6A3]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Trust & Safety</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        We take the worry out of booking. Your security is our priority.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center hover:border-[#FFB6A3]/50 transition-colors group">
                        <div className="w-16 h-16 bg-[#E06052]/20 rounded-full flex items-center justify-center mx-auto mb-6 text-[#E06052] group-hover:scale-110 transition-transform">
                            <UserCheck size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Verified Providers</h3>
                        <p className="text-gray-400">Every salon and artist on MyGlo goes through a verification process to ensure they are legitimate businesses.</p>
                    </div>
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center hover:border-[#FFB6A3]/50 transition-colors group">
                        <div className="w-16 h-16 bg-[#FFB6A3]/20 rounded-full flex items-center justify-center mx-auto mb-6 text-[#FFB6A3] group-hover:scale-110 transition-transform">
                            <Lock size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Secure Payments</h3>
                        <p className="text-gray-400">We use industry-standard encryption (Stripe) to keep your payment details safe. No funny business.</p>
                    </div>
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center hover:border-[#FFB6A3]/50 transition-colors group">
                        <div className="w-16 h-16 bg-[#FC69C3]/20 rounded-full flex items-center justify-center mx-auto mb-6 text-[#FC69C3] group-hover:scale-110 transition-transform">
                            <Star size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Genuine Reviews</h3>
                        <p className="text-gray-400">Only clients who have actually completed a booking can leave a review. Say goodbye to fake 5-star ratings.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustSafety;
