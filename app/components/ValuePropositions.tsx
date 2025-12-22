"use client";

import React from 'react';
import { Search, Calendar, Heart } from 'lucide-react';

const ValuePropositions = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-transparent to-slate-50/80 border-t border-[#E5E5E5]/50 backdrop-blur-sm relative">
            <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#F3F3F5] hover:border-[#FFB6A3] transition-colors group">
                        <div className="w-12 h-12 rounded-2xl bg-[#FFF3F0] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Search className="text-[#E06052]" size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Discover</h3>
                        <p className="text-[#534B4B] leading-relaxed">
                            Browse a visual feed of real work from salons near you. Filter by location, price, and style.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#F3F3F5] hover:border-[#FFB6A3] transition-colors group">
                        <div className="w-12 h-12 rounded-2xl bg-[#FFF3F0] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Calendar className="text-[#E06052]" size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Book Instantly</h3>
                        <p className="text-[#534B4B] leading-relaxed">
                            See real-time availability and book in seconds. No more DMs or waiting for callbacks.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#F3F3F5] hover:border-[#FFB6A3] transition-colors group">
                        <div className="w-12 h-12 rounded-2xl bg-[#FFF3F0] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Heart className="text-[#E06052]" size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Connect</h3>
                        <p className="text-[#534B4B] leading-relaxed">
                            Follow your favorite creators, save styles for inspiration, and join the beauty community.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValuePropositions;
