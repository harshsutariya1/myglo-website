"use client";

import React from 'react';
import Image from 'next/image';
import { TrendingUp, MessageCircle, User, Palette, Heart, Share2, Zap } from 'lucide-react';

const CommunitySpotlight = () => {
    const [imgError1, setImgError1] = React.useState(false);
    const [imgError2, setImgError2] = React.useState(false);

    return (
        <section className="py-24 bg-gradient-to-b from-white to-rose-50/30 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#FFB6A3]/20 to-[#FC69C3]/20 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF3F0] border border-[#FFB6A3]/30 mb-6">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E06052] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E06052]"></span>
                            </span>
                            <span className="text-xs font-bold text-[#E06052] uppercase tracking-wider">Gold Coast Community</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#140000]">
                            Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB6A3] to-[#FC69C3]">Movement</span>
                        </h2>

                        <p className="text-[#534B4B] text-lg leading-relaxed mb-8">
                            MyGlo isn't just software; it's a thriving ecosystem. Connect with other beauty professionals, share your latest creations, and set the trends for the Gold Coast beauty scene.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                            <div className="p-4 rounded-2xl bg-white border border-[#F3F3F5] shadow-sm hover:border-[#FFB6A3] transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-[#FFF3F0] flex items-center justify-center text-[#E06052] mb-3 group-hover:scale-110 transition-transform">
                                    <TrendingUp size={20} />
                                </div>
                                <h4 className="font-bold text-[#140000] mb-1">Trend Spotting</h4>
                                <p className="text-xs text-[#534B4B]">See what styles are going viral in your area.</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-white border border-[#F3F3F5] shadow-sm hover:border-[#FFB6A3] transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-[#FFF3F0] flex items-center justify-center text-[#E06052] mb-3 group-hover:scale-110 transition-transform">
                                    <MessageCircle size={20} />
                                </div>
                                <h4 className="font-bold text-[#140000] mb-1">Direct Connection</h4>
                                <p className="text-xs text-[#534B4B]">Chat with clients and build lasting relationships.</p>
                            </div>
                        </div>

                        {/* Community Stats */}
                        <div className="flex gap-8 border-t border-[#E5E5E5] pt-8">
                            <div>
                                <div className="text-2xl font-bold text-[#140000]">500+</div>
                                <div className="text-xs font-semibold text-[#888080] uppercase tracking-wide">Salons Waiting</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-[#140000]">2026</div>
                                <div className="text-xs font-semibold text-[#888080] uppercase tracking-wide">Gold Coast Launch</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-[#140000]">1st</div>
                                <div className="text-xs font-semibold text-[#888080] uppercase tracking-wide">Community First</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Dynamic Visuals */}
                    <div className="relative h-[600px] w-full flex items-center justify-center">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-100/40 via-transparent to-transparent opacity-70"></div>

                        {/* Floating Card 1: Top Right */}
                        <div className="absolute top-4 right-4 w-60 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 transform rotate-3 animate-float z-20">
                            <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-3 overflow-hidden relative group">
                                {!imgError1 ? (
                                    <Image
                                        src="https://blobcdn.same.energy/b/46/04/460468a1833e2a21918e3e89bda1f8201c54c7cb"
                                        alt="Summer Balayage"
                                        fill
                                        className="object-cover"
                                        onError={() => setImgError1(true)}
                                        sizes="(max-width: 768px) 100vw, 300px"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-300 bg-gray-50">
                                        <User size={48} />
                                    </div>
                                )}
                                <div className="absolute bottom-2 left-2 bg-black/50 backdrop-blur-md px-2 py-1 rounded-lg text-white text-[10px] font-bold">
                                    @sarahstyles
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="text-xs font-bold text-gray-800">Summer Balayage ☀️</div>
                                <Heart size={14} className="text-[#E06052] fill-[#E06052]" />
                            </div>
                        </div>

                        {/* Floating Card 2: Bottom Left */}
                        <div className="absolute bottom-12 left-0 w-56 bg-white p-3 rounded-2xl shadow-2xl border border-gray-100 transform -rotate-2 animate-float-delayed z-30">
                            <div className="aspect-square bg-gradient-to-tr from-gray-100 to-gray-200 rounded-xl mb-3 overflow-hidden relative group">
                                {!imgError2 ? (
                                    <Image
                                        src="https://blobcdn.same.energy/a/63/e6/63e66c7eefe6da2cf68830d6f5bf742191975df6"
                                        alt="Service"
                                        fill
                                        className="object-cover"
                                        onError={() => setImgError2(true)}
                                        sizes="(max-width: 768px) 100vw, 300px"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-300 bg-gray-50">
                                        <Palette size={48} className="text-[#FC69C3]" />
                                    </div>
                                )}
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-[#140000] flex items-center justify-center text-white text-[10px] font-bold">G</div>
                                    <div className="text-xs font-bold">GlamCenter GC</div>
                                </div>
                                <p className="text-[10px] text-gray-500 leading-tight">
                                    Just had 3 cancellations for tomorrow! Grab them before they go 🔥
                                </p>
                                <div className="flex gap-2 pt-1">
                                    <span className="px-2 py-1 bg-[#FFF3F0] text-[#E06052] text-[10px] font-bold rounded-md">Book Now</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating Card 3: Center (Background) */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 bg-white/60 backdrop-blur-sm p-4 rounded-3xl border border-white/50 shadow-lg transform -rotate-6 z-10 scale-90 grayscale opacity-60">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                                <div className="h-2 w-20 bg-gray-200 rounded-full"></div>
                            </div>
                            <div className="h-32 w-full bg-gray-100 rounded-xl mb-3"></div>
                            <div className="h-2 w-3/4 bg-gray-200 rounded-full"></div>
                        </div>

                        {/* Live Activity Toast */}
                        <div className="absolute bottom-8 right-8 bg-[#140000] text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-1000 z-40">
                            <div className="relative">
                                <div className="w-2 h-2 bg-[#07944F] rounded-full"></div>
                                <div className="absolute inset-0 bg-[#07944F] rounded-full animate-ping opacity-75"></div>
                            </div>
                            <div className="text-xs">
                                <span className="font-bold">Sophie M.</span> just joined the <span className="text-[#FFB6A3]">Waitlist</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommunitySpotlight;
