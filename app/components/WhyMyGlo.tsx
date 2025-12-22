"use client";

import React from 'react';
import { Check, Minus, X } from 'lucide-react';

const WhyMyGlo = () => {
    return (
        <section className="py-24 bg-[#140000] text-white relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FFB6A3]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#E06052]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Why MyGlo?</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        We combine the best features of social media and booking software into one seamless experience.
                    </p>
                </div>

                <div className="overflow-x-auto">
                    <div className="min-w-[800px] bg-white/5 rounded-3xl shadow-xl border border-white/10 overflow-hidden backdrop-blur-sm">
                        <div className="grid grid-cols-4 bg-black/40 text-white p-6 items-center">
                            <div className="font-bold text-lg">Feature</div>
                            <div className="text-center font-semibold text-gray-400">Social Media</div>
                            <div className="text-center font-semibold text-gray-400">Booking App</div>
                            <div className="text-center font-bold text-[#FFB6A3] text-xl">MyGlo</div>
                        </div>

                        <div className="divide-y divide-white/10">
                            <div className="grid grid-cols-4 p-6 items-center hover:bg-white/5 transition-colors">
                                <div className="font-semibold text-white">Visual Portfolio Feed</div>
                                <div className="flex justify-center"><Check className="text-[#07944F]" /></div>
                                <div className="flex justify-center text-gray-500"><Minus size={16} /></div>
                                <div className="flex justify-center"><Check className="text-[#FFB6A3] stroke-[3px]" /></div>
                            </div>
                            <div className="grid grid-cols-4 p-6 items-center hover:bg-white/5 transition-colors">
                                <div className="font-semibold text-white">Real-Time Availability</div>
                                <div className="flex justify-center text-gray-500"><X size={20} /></div>
                                <div className="flex justify-center"><Check className="text-[#07944F]" /></div>
                                <div className="flex justify-center"><Check className="text-[#FFB6A3] stroke-[3px]" /></div>
                            </div>
                            <div className="grid grid-cols-4 p-6 items-center hover:bg-white/5 transition-colors">
                                <div className="font-semibold text-white">Community & Following</div>
                                <div className="flex justify-center"><Check className="text-[#07944F]" /></div>
                                <div className="flex justify-center text-gray-500"><X size={20} /></div>
                                <div className="flex justify-center"><Check className="text-[#FFB6A3] stroke-[3px]" /></div>
                            </div>
                            <div className="grid grid-cols-4 p-6 items-center hover:bg-white/5 transition-colors">
                                <div className="font-semibold text-white">Zero Ad Spend Reach</div>
                                <div className="flex justify-center text-gray-500"><X size={20} /></div>
                                <div className="flex justify-center text-gray-500"><X size={20} /></div>
                                <div className="flex justify-center"><Check className="text-[#FFB6A3] stroke-[3px]" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyMyGlo;
