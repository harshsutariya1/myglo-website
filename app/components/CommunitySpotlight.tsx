"use client";

import React from 'react';
import { TrendingUp, MessageCircle, User, Palette } from 'lucide-react';

const CommunitySpotlight = () => {
    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF3F0] border border-[#FFB6A3]/30 mb-6">
                            <span className="text-xs font-bold text-[#E06052] uppercase tracking-wider">Community</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Join the Movement</h2>
                        <p className="text-[#534B4B] text-lg leading-relaxed mb-8">
                            MyGlo isn't just software; it's a community. Connect with other beauty professionals, share your latest creations, and set the trends for the Gold Coast beauty scene.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FAFAFA] border border-[#F3F3F5]">
                                <div className="w-10 h-10 rounded-full bg-[#140000] flex items-center justify-center text-white">
                                    <TrendingUp size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#140000]">Trend Spotting</h4>
                                    <p className="text-xs text-[#534B4B]">See what styles are popular in your area right now.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FAFAFA] border border-[#F3F3F5]">
                                <div className="w-10 h-10 rounded-full bg-[#140000] flex items-center justify-center text-white">
                                    <MessageCircle size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#140000]">Direct Connection</h4>
                                    <p className="text-xs text-[#534B4B]">Chat with clients and build lasting relationships.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Collage Mockup (CSS Only) */}
                    <div className="relative h-[500px]">
                        {/* Card 1 */}
                        <div className="absolute top-0 right-0 w-64 h-80 bg-white shadow-2xl rounded-3xl p-3 transform rotate-6 border border-gray-100 z-10 animate-float">
                            <div className="w-full h-48 bg-gray-100 rounded-2xl mb-3 overflow-hidden relative">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-300"><User size={40} /></div>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#FFB6A3] to-[#FC69C3]"></div>
                                <span className="text-xs font-bold">Sarah's Studio</span>
                            </div>
                            <p className="text-[10px] text-gray-500">Fresh set for the weekend! ✨ #GoldCoastLashes</p>
                        </div>

                        {/* Card 2 */}
                        <div className="absolute bottom-10 left-10 w-64 h-80 bg-white shadow-2xl rounded-3xl p-3 transform -rotate-3 border border-gray-100 z-20 animate-float-delayed">
                            <div className="w-full h-48 bg-gray-100 rounded-2xl mb-3 overflow-hidden relative">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-300"><Palette size={40} /></div>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-6 h-6 rounded-full bg-[#140000]"></div>
                                <span className="text-xs font-bold">Glam by Jess</span>
                            </div>
                            <p className="text-[10px] text-gray-500">Bridal trial ready 💍 Booking fast for 2026!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommunitySpotlight;
