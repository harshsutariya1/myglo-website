"use client";

import React from 'react';
import { Check, Zap, Flag } from 'lucide-react';

const RoadmapSection = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF3F0] border border-[#FFB6A3]/30 mb-4">
                        <span className="text-xs font-bold text-[#E06052] uppercase tracking-wider">Roadmap</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Journey</h2>
                    <p className="text-[#534B4B] text-lg max-w-2xl mx-auto">
                        From concept to global expansion, we are building the future of beauty one step at a time.
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-[#F3F3F5] -translate-y-1/2 z-0 rounded-full"></div>
                    <div className="hidden md:block absolute top-12 left-0 w-1/2 h-1 bg-gradient-to-r from-[#140000] via-[#FFB6A3] to-[#E06052] -translate-y-1/2 z-0 rounded-full"></div>

                    {/* Timeline Line (Mobile) */}
                    <div className="md:hidden absolute top-0 bottom-0 left-6 w-1 bg-[#F3F3F5] z-0 rounded-full"></div>
                    <div className="md:hidden absolute top-0 h-1/2 left-6 w-1 bg-gradient-to-b from-[#140000] via-[#FFB6A3] to-[#E06052] z-0 rounded-full"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                        {/* Step 1: Completed */}
                        <div className="flex md:flex-col items-start md:items-center gap-6 md:gap-0 group">
                            <div className="w-12 h-12 rounded-full bg-[#140000] text-white flex items-center justify-center font-bold border-4 border-white shadow-xl relative z-10 shrink-0 md:mb-8 transition-transform group-hover:scale-110">
                                <Check size={20} />
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-[#E5E5E5] shadow-sm hover:shadow-md transition-all w-full relative group-hover:-translate-y-1">
                                {/* Connector arrow for desktop */}
                                <div className="hidden md:block absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-[#E5E5E5] rotate-45"></div>
                                {/* Connector arrow for mobile */}
                                <div className="md:hidden absolute top-4 -left-2 w-4 h-4 bg-white border-b border-l border-[#E5E5E5] rotate-45"></div>

                                <span className="text-[#140000] font-bold text-xs uppercase tracking-wider mb-2 block opacity-60">2024</span>
                                <h3 className="font-bold text-lg mb-2 text-[#140000]">Concept Born</h3>
                                <p className="text-sm text-[#534B4B]">MVP funded, partnership formed, and initial designs finalized.</p>
                            </div>
                        </div>

                        {/* Step 2: Active */}
                        <div className="flex md:flex-col items-start md:items-center gap-6 md:gap-0 group">
                            <div className="relative z-10 shrink-0 md:mb-8">
                                <div className="absolute inset-0 bg-[#FFB6A3] blur-lg opacity-50 animate-pulse"></div>
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB6A3] to-[#E06052] text-white flex items-center justify-center font-bold border-4 border-white shadow-xl relative transition-transform group-hover:scale-110">
                                    <Zap size={20} fill="currentColor" />
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border-2 border-[#FFB6A3] shadow-lg shadow-[#FFB6A3]/10 w-full relative group-hover:-translate-y-1 transition-transform">
                                {/* Connector arrow desktop */}
                                <div className="hidden md:block absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-[#FFB6A3] rotate-45"></div>
                                {/* Connector arrow mobile */}
                                <div className="md:hidden absolute top-4 -left-2 w-4 h-4 bg-white border-b border-l border-[#FFB6A3] rotate-45"></div>

                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-[#E06052] font-bold text-xs uppercase tracking-wider block">NOW</span>
                                    <span className="flex h-2 w-2 relative">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E06052] opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E06052]"></span>
                                    </span>
                                </div>
                                <h3 className="font-bold text-lg mb-2 text-[#140000]">Building MVP</h3>
                                <p className="text-sm text-[#534B4B]">Developing core features, securing foundation partners, and building the salon waitlist.</p>
                            </div>
                        </div>

                        {/* Step 3: Future */}
                        <div className="flex md:flex-col items-start md:items-center gap-6 md:gap-0 group opacity-80 hover:opacity-100 transition-opacity">
                            <div className="w-12 h-12 rounded-full bg-white text-[#534B4B] flex items-center justify-center font-bold border-4 border-[#F3F3F5] shadow-sm relative z-10 shrink-0 md:mb-8 transition-colors group-hover:border-[#FFB6A3] group-hover:text-[#FFB6A3]">
                                3
                            </div>
                            <div className="bg-[#FAFAFA] p-6 rounded-2xl border border-[#E5E5E5] w-full relative group-hover:bg-white group-hover:shadow-md transition-all">
                                {/* Connector arrow */}
                                <div className="hidden md:block absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FAFAFA] border-t border-l border-[#E5E5E5] rotate-45 group-hover:bg-white transition-colors"></div>
                                <div className="md:hidden absolute top-4 -left-2 w-4 h-4 bg-[#FAFAFA] border-b border-l border-[#E5E5E5] rotate-45 group-hover:bg-white transition-colors"></div>

                                <span className="text-[#888080] font-bold text-xs uppercase tracking-wider mb-2 block">May 2026</span>
                                <h3 className="font-bold text-lg mb-2 text-[#140000]">GC Launch</h3>
                                <p className="text-sm text-[#534B4B]">Official launch in Gold Coast, Australia. First 500 salons ready to go.</p>
                            </div>
                        </div>

                        {/* Step 4: Future */}
                        <div className="flex md:flex-col items-start md:items-center gap-6 md:gap-0 group opacity-60 hover:opacity-100 transition-opacity">
                            <div className="w-12 h-12 rounded-full bg-white text-[#534B4B] flex items-center justify-center font-bold border-4 border-[#F3F3F5] shadow-sm relative z-10 shrink-0 md:mb-8 transition-colors group-hover:border-[#E06052] group-hover:text-[#E06052]">
                                <Flag size={20} />
                            </div>
                            <div className="bg-[#FAFAFA] p-6 rounded-2xl border border-[#E5E5E5] w-full relative group-hover:bg-white group-hover:shadow-md transition-all">
                                {/* Connector arrow */}
                                <div className="hidden md:block absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FAFAFA] border-t border-l border-[#E5E5E5] rotate-45 group-hover:bg-white transition-colors"></div>
                                <div className="md:hidden absolute top-4 -left-2 w-4 h-4 bg-[#FAFAFA] border-b border-l border-[#E5E5E5] rotate-45 group-hover:bg-white transition-colors"></div>

                                <span className="text-[#888080] font-bold text-xs uppercase tracking-wider mb-2 block">2027</span>
                                <h3 className="font-bold text-lg mb-2 text-[#140000]">Global Scale</h3>
                                <p className="text-sm text-[#534B4B]">Expansion to major cities (Syd, Melb) and international markets.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoadmapSection;
