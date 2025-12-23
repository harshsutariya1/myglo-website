"use client";

import React, { useState } from 'react';
import { Smartphone, ShieldCheck, Clock, Link as LinkIcon, BarChart3, MessageCircle, ArrowRight } from 'lucide-react';

const FeaturesSection = () => {
    const [activeFeatureTab, setActiveFeatureTab] = useState('client');

    return (
        <section id="features" className="py-16 md:py-24 bg-gradient-to-br from-white via-rose-50/20 to-orange-50/20 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-1/2 left-[-200px] w-[600px] h-[600px] bg-[#FFB6A3]/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none animate-pulse-slow"></div>
            <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#E06052]/5 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <span className="text-[#E06052] font-semibold text-xs md:text-sm tracking-wider uppercase mb-3 block">Platform Features</span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#140000] tracking-tight">The Future of Beauty Booking</h2>
                    <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                        Whether you're looking for the perfect lash tech or running a busy salon, MyGlo is built to simplify your life.
                    </p>

                    {/* Enhanced Toggle Switch */}
                    <div className="inline-flex bg-white border border-gray-100 p-1.5 rounded-2xl relative shadow-sm box-content">
                        {/* Sliding Background Pill */}
                        <div
                            className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-[#140000] rounded-xl shadow-md transition-all duration-300 ease-in-out ${activeFeatureTab === 'partner' ? 'translate-x-[calc(100%+6px)]' : 'left-1.5'
                                }`}
                        />

                        <button
                            onClick={() => setActiveFeatureTab('client')}
                            className={`relative z-10 px-6 md:px-10 py-2.5 rounded-xl text-sm font-bold transition-colors duration-300 min-w-[140px] md:min-w-[160px] ${activeFeatureTab === 'client' ? 'text-white' : 'text-gray-500 hover:text-[#140000]'
                                }`}
                        >
                            I'm a Client
                        </button>
                        <button
                            onClick={() => setActiveFeatureTab('partner')}
                            className={`relative z-10 px-6 md:px-10 py-2.5 rounded-xl text-sm font-bold transition-colors duration-300 min-w-[140px] md:min-w-[160px] ${activeFeatureTab === 'partner' ? 'text-white' : 'text-gray-500 hover:text-[#140000]'
                                }`}
                        >
                            I'm a Partner
                        </button>
                    </div>
                </div>

                <div className="min-h-[400px] transition-all duration-500 ease-in-out">
                    {activeFeatureTab === 'client' ? (
                        <div className="grid md:grid-cols-3 gap-6 md:gap-8 animate-in fade-in slide-in-from-bottom-8 duration-500">
                            {/* Client Card 1 */}
                            <div className="bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-white/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
                                <div className="w-14 h-14 rounded-2xl bg-[#FFF3F0] flex items-center justify-center mb-6 text-[#E06052] group-hover:scale-110 transition-transform duration-300">
                                    <Smartphone size={26} />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#140000]">Visual Discovery</h3>
                                <p className="text-gray-500 leading-relaxed text-sm md:text-base mb-6 flex-grow">
                                    Don't just read about a salon, see their work. Search for "Blonde Balayage" or "Gel Tips" and browse a visual feed of real results.
                                </p>
                            </div>

                            {/* Client Card 2 */}
                            <div className="bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-white/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
                                <div className="w-14 h-14 rounded-2xl bg-[#FFF3F0] flex items-center justify-center mb-6 text-[#E06052] group-hover:scale-110 transition-transform duration-300">
                                    <ShieldCheck size={26} />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#140000]">Verified & Trusted</h3>
                                <p className="text-gray-500 leading-relaxed text-sm md:text-base mb-6 flex-grow">
                                    Book with confidence. Read verified reviews from the community and see portfolio photos linked to actual bookings.
                                </p>
                            </div>

                            {/* Client Card 3 */}
                            <div className="bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-white/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
                                <div className="w-14 h-14 rounded-2xl bg-[#FFF3F0] flex items-center justify-center mb-6 text-[#E06052] group-hover:scale-110 transition-transform duration-300">
                                    <Clock size={26} />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#140000]">Real-Time Availability</h3>
                                <p className="text-gray-500 leading-relaxed text-sm md:text-base mb-6 flex-grow">
                                    Need a last-minute glow up? Filter by "Available Today" to find open slots instantly without calling around.
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-3 gap-6 md:gap-8 animate-in fade-in slide-in-from-bottom-8 duration-500">
                            {/* Partner Card 1: Integrated Booking Engine */}
                            <div className="bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-white/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
                                <div className="w-14 h-14 rounded-2xl bg-[#FFF3F0] flex items-center justify-center mb-6 text-[#E06052] group-hover:scale-110 transition-transform duration-300">
                                    <LinkIcon size={26} />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#140000]">Integrated Booking Engine</h3>
                                <p className="text-gray-500 leading-relaxed text-sm md:text-base mb-6 flex-grow">
                                    <strong className="text-[#140000]">Everything you need in one place.</strong> Manage your calendar, clients, and payments seamlessly with our powerful built-in booking system.
                                </p>
                            </div>

                            {/* Partner Card 2 */}
                            <div className="bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-white/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
                                <div className="w-14 h-14 rounded-2xl bg-[#FFF3F0] flex items-center justify-center mb-6 text-[#E06052] group-hover:scale-110 transition-transform duration-300">
                                    <BarChart3 size={26} />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#140000]">Automated Marketing</h3>
                                <p className="text-gray-500 leading-relaxed text-sm md:text-base mb-6 flex-grow">
                                    Every photo you post is a potential booking. Your work appears in local discovery feeds, turning "likes" into appointments automatically.
                                </p>
                            </div>

                            {/* Partner Card 3 */}
                            <div className="bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-white/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
                                <div className="w-14 h-14 rounded-2xl bg-[#FFF3F0] flex items-center justify-center mb-6 text-[#E06052] group-hover:scale-110 transition-transform duration-300">
                                    <MessageCircle size={26} />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#140000]">Community Growth</h3>
                                <p className="text-gray-500 leading-relaxed text-sm md:text-base mb-6 flex-grow">
                                    Build a loyal following. Clients follow your profile, get notified of your availability, and engage with your brand in a dedicated beauty ecosystem.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
