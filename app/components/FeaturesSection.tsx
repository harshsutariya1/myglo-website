"use client";

import React, { useState } from 'react';
import { Smartphone, ShieldCheck, Clock, Link as LinkIcon, BarChart3, MessageCircle } from 'lucide-react';

const FeaturesSection = () => {
    const [activeFeatureTab, setActiveFeatureTab] = useState('client');
    return (
        <section id="features" className="py-24 bg-gradient-to-br from-white via-rose-50/30 to-orange-50/30 relative overflow-hidden">
            {/* Decorative blob for features */}
            <div className="absolute top-1/2 left-[-200px] w-[600px] h-[600px] bg-[#FFB6A3]/20 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none animate-pulse" style={{ animationDuration: '8s' }}></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">The Future of Beauty Booking</h2>
                    <p className="text-[#534B4B] text-lg max-w-2xl mx-auto mb-8">
                        Whether you're looking for the perfect lash tech or running a busy salon, MyGlo is built to make your life easier.
                    </p>

                    {/* Toggle Switch */}
                    <div className="inline-flex bg-[#F3F3F5] p-1.5 rounded-2xl relative shadow-inner">
                        {/* Sliding Background Pill */}
                        <div
                            className={`absolute top-1.5 bottom-1.5 left-1.5 w-[calc(50%-6px)] bg-white rounded-xl shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.4,0.0,0.2,1)] ${activeFeatureTab === 'partner' ? 'translate-x-full' : 'translate-x-0'
                                }`}
                        />

                        <button
                            onClick={() => setActiveFeatureTab('client')}
                            className={`relative z-10 px-8 py-3 rounded-xl text-sm font-bold transition-colors duration-300 min-w-[160px] ${activeFeatureTab === 'client' ? 'text-[#140000]' : 'text-[#534B4B] hover:text-[#140000]'
                                }`}
                        >
                            I'm a Client
                        </button>
                        <button
                            onClick={() => setActiveFeatureTab('partner')}
                            className={`relative z-10 px-8 py-3 rounded-xl text-sm font-bold transition-colors duration-300 min-w-[160px] ${activeFeatureTab === 'partner' ? 'text-[#140000]' : 'text-[#534B4B] hover:text-[#140000]'
                                }`}
                        >
                            I'm a Partner
                        </button>
                    </div>
                </div>

                <div className="transition-all duration-500 ease-in-out">
                    {activeFeatureTab === 'client' ? (
                        <div className="grid md:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="glass-card p-8 rounded-3xl border border-[#F3F3F5] shadow-lg shadow-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFB6A3] to-[#FC69C3] flex items-center justify-center mb-6 text-white shadow-md group-hover:scale-110 transition-transform">
                                    <Smartphone size={28} />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">Visual Discovery</h3>
                                <p className="text-[#534B4B] leading-relaxed">
                                    Don't just read about a salon, see their work. Search for "Blonde Balayage" or "Gel Tips" and browse a visual feed of real results from local artists.
                                </p>
                            </div>

                            <div className="glass-card p-8 rounded-3xl border border-[#F3F3F5] shadow-lg shadow-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                <div className="w-14 h-14 rounded-2xl bg-white border border-[#E5E5E5] flex items-center justify-center mb-6 text-[#140000] shadow-sm group-hover:scale-110 transition-transform">
                                    <ShieldCheck size={28} />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">Verified & Trusted</h3>
                                <p className="text-[#534B4B] leading-relaxed">
                                    Book with confidence. Read verified reviews from the community and see portfolio photos that are actually linked to the service you're booking.
                                </p>
                            </div>

                            <div className="glass-card p-8 rounded-3xl border border-[#F3F3F5] shadow-lg shadow-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                <div className="w-14 h-14 rounded-2xl bg-white border border-[#E5E5E5] flex items-center justify-center mb-6 text-[#140000] shadow-sm group-hover:scale-110 transition-transform">
                                    <Clock size={28} />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">Real-Time Availability</h3>
                                <p className="text-[#534B4B] leading-relaxed">
                                    Need a last-minute glow up? Filter by "Available Today" to find open slots instantly without calling around.
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="glass-card p-8 rounded-3xl border-2 border-[#140000] shadow-xl shadow-gray-200 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                                <div className="absolute top-0 right-0 bg-[#140000] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl">
                                    SALON FAVORITE
                                </div>
                                <div className="w-14 h-14 rounded-2xl bg-[#140000] flex items-center justify-center mb-6 text-white shadow-md group-hover:scale-110 transition-transform">
                                    <LinkIcon size={28} />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">Hybrid Booking Engine</h3>
                                <p className="text-[#534B4B] leading-relaxed">
                                    <span className="font-bold text-[#140000]">Love your current software? Keep it.</span> MyGlo lets you link your existing system (Fresha, Timely, etc.) directly to your profile. Or, use our full-featured native calendar for free.
                                </p>
                            </div>

                            <div className="glass-card p-8 rounded-3xl border border-[#F3F3F5] shadow-lg shadow-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                <div className="w-14 h-14 rounded-2xl bg-white border border-[#E5E5E5] flex items-center justify-center mb-6 text-[#140000] shadow-sm group-hover:scale-110 transition-transform">
                                    <BarChart3 size={28} />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">Automated Marketing</h3>
                                <p className="text-[#534B4B] leading-relaxed">
                                    Every photo you post is a potential booking. Your work appears in local discovery feeds, turning "likes" into appointments automatically without ad spend.
                                </p>
                            </div>

                            <div className="glass-card p-8 rounded-3xl border border-[#F3F3F5] shadow-lg shadow-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                <div className="w-14 h-14 rounded-2xl bg-white border border-[#E5E5E5] flex items-center justify-center mb-6 text-[#140000] shadow-sm group-hover:scale-110 transition-transform">
                                    <MessageCircle size={28} />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">Community Growth</h3>
                                <p className="text-[#534B4B] leading-relaxed">
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
