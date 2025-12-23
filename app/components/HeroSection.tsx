"use client";

import React from 'react';
import Link from 'next/link';
import {
    ChevronRight, CheckCircle2, User, Search, Heart, Calendar, LayoutTemplate,
    Home
} from 'lucide-react';

const HeroSection = () => {
    const [profileError, setProfileError] = React.useState(false);

    const scrollToWaitlist = () => {
        const element = document.getElementById('waitlist');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main className="relative z-10 max-w-7xl mx-auto px-6 pt-6 pb-12 lg:pt-20 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            {/* Left Column: Copy & Form */}
            <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF3F0] border border-[#FFB6A3]/30">
                    <span className="w-2 h-2 rounded-full bg-[#E06052] animate-pulse"></span>
                    <span className="text-xs font-semibold text-[#E06052] uppercase tracking-wider">Coming Soon to Gold Coast</span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-[#140000]">
                    Express Yourself.<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB6A3] to-[#FC69C3]">
                        Keep Track.
                    </span><br />
                    Stay Connected.
                </h1>

                <p className="text-lg text-[#534B4B] max-w-md leading-relaxed">
                    Fresha meets Instagram. The all-in-one beauty platform where you can discover local talent, book appointments instantly, and build your community.
                </p>

                {/* Call to Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <button
                        onClick={scrollToWaitlist}
                        className="bg-[#140000] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#333] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
                    >
                        Join Waitlist <ChevronRight size={20} />
                    </button>
                    <Link
                        href="/app-showcase"
                        className="px-8 py-4 rounded-xl font-bold border-2 border-[#140000]/10 hover:border-[#140000] text-[#140000] transition-all flex items-center justify-center gap-2 hover:-translate-y-1 bg-white/50 backdrop-blur-sm"
                    >
                        App Preview <LayoutTemplate size={20} />
                    </Link>
                </div>
            </div>

            {/* Right Column: App Mockup Carousel */}
            <div className="relative h-[600px] w-full mt-8 lg:mt-0 items-center justify-center perspective-1000 hidden min-[400px]:flex">
                {/* Decorative Background Blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#FFB6A3]/20 to-[#FC69C3]/20 rounded-full blur-3xl pointer-events-none"></div>

                {/* Left Card: Community (Blurred & Scaled Down) */}
                <div className="absolute left-[5%] lg:left-[10%] top-1/2 -translate-y-1/2 w-[240px] md:w-[260px] h-[480px] md:h-[520px] bg-white rounded-[32px] border-[6px] border-gray-100 shadow-xl overflow-hidden z-10 scale-90 opacity-60 blur-[1px] hidden sm:block pointer-events-none transform -rotate-6 transition-all duration-500">
                    <div className="h-full w-full bg-gray-50 flex flex-col p-4">
                        <div className="h-8 w-8 bg-gray-200 rounded-full mb-4"></div>
                        <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
                        <div className="h-32 w-full bg-gray-200 rounded-xl mb-4"></div>
                        <div className="space-y-2">
                            <div className="h-10 w-full bg-white rounded-lg p-2 flex items-center gap-2">
                                <div className="h-6 w-6 rounded-full bg-gray-100"></div>
                                <div className="h-2 w-1/2 bg-gray-100 rounded"></div>
                            </div>
                            <div className="h-10 w-full bg-white rounded-lg p-2 flex items-center gap-2">
                                <div className="h-6 w-6 rounded-full bg-gray-100"></div>
                                <div className="h-2 w-1/2 bg-gray-100 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Card: Booking (Blurred & Scaled Down) */}
                <div className="absolute right-[5%] lg:right-[10%] top-1/2 -translate-y-1/2 w-[240px] md:w-[260px] h-[480px] md:h-[520px] bg-white rounded-[32px] border-[6px] border-gray-100 shadow-xl overflow-hidden z-10 scale-90 opacity-60 blur-[1px] hidden sm:block pointer-events-none transform rotate-6 transition-all duration-500">
                    <div className="h-full w-full bg-white p-6 pt-10">
                        <div className="h-6 w-1/2 bg-gray-100 rounded mb-6"></div>
                        <div className="grid grid-cols-3 gap-2 mb-6">
                            <div className="aspect-square bg-blue-50 rounded-lg border border-blue-100"></div>
                            <div className="aspect-square bg-gray-50 rounded-lg"></div>
                            <div className="aspect-square bg-gray-50 rounded-lg"></div>
                        </div>
                        <div className="h-12 w-full bg-[#140000] rounded-xl mb-3 opacity-10"></div>
                        <div className="h-12 w-full bg-gray-50 rounded-xl"></div>
                    </div>
                </div>

                {/* Center Card: Discovery Feed (Main Focus) */}
                <div className="relative w-[280px] sm:w-[300px] h-[580px] sm:h-[600px] bg-white rounded-[40px] border-[8px] border-[#140000] shadow-2xl overflow-hidden z-30 transform hover:scale-[1.02] transition-transform duration-300">
                    {/* Status Bar */}
                    <div className="h-6 w-full bg-white flex justify-between px-6 items-center pt-2">
                        <div className="text-[10px] font-bold">9:41</div>
                        <div className="flex gap-1">
                            <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
                            <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
                        </div>
                    </div>

                    {/* App Header */}
                    <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-end bg-white/80 backdrop-blur-sm sticky top-0 z-10">
                        <h2 className="font-bold text-xl">Discover</h2>
                        <Search size={20} className="text-gray-400" />
                    </div>

                    {/* Feed Item */}
                    <div className="p-4 space-y-3 overflow-y-auto h-[calc(100%-110px)] scrollbar-hide">
                        {/* Post 1 */}
                        <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full overflow-hidden relative">
                                    {!profileError ? (
                                        <img
                                            src="https://blobcdn.same.energy/a/63/e6/63e66c7eefe6da2cf68830d6f5bf742191975df6"
                                            alt="Lily Lashes Beauty Profile"
                                            className="w-full h-full object-cover"
                                            onError={() => setProfileError(true)}
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-[#FFB6A3] to-[#FC69C3]"></div>
                                    )}
                                </div>
                                <div>
                                    <div className="font-bold text-xs">Lily Lashes</div>
                                    <div className="text-[10px] text-gray-500">Melbourne CBD • 2km</div>
                                </div>
                                <button className="ml-auto text-[10px] font-bold text-[#FFB6A3] border border-[#FFB6A3] px-2 py-1 rounded-full hover:bg-[#FFB6A3] hover:text-white transition-colors">+ Follow</button>
                            </div>

                            <div className="w-full aspect-square bg-gray-100 rounded-xl relative overflow-hidden group">
                                <img
                                    src="https://blobcdn.same.energy/d/69/dc/69dca881809cb72ab0ec9abf5f194fbf1e3cf464"
                                    alt="Natural hybrid set eyelashes work example"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold shadow-sm">
                                    $60
                                </div>
                            </div>

                            <div className="flex gap-4 pt-1">
                                <Heart size={20} className="text-[#140000]" />
                                <div className="text-xs font-semibold">284 likes</div>
                            </div>
                            <div className="text-xs text-gray-600">
                                <span className="font-bold text-black">Lily Lashes</span> Natural hybrid set for the weekend ✨
                            </div>
                        </div>
                    </div>

                    {/* Bottom Nav */}
                    <div className="absolute bottom-0 w-full h-16 bg-white border-t border-gray-100 flex justify-around items-center px-2 z-20">

                        <div className="flex flex-col items-center gap-1 text-gray-400">
                            <Home size={20} />
                            <span className="text-[10px]">Home</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <Search size={20} className="text-[#FFB6A3]" />
                            <span className="text-[10px] font-bold text-[#FFB6A3]">Discover</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 text-gray-400">
                            <Calendar size={20} />
                            <span className="text-[10px]">Bookings</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 text-gray-400">
                            <User size={20} />
                            <span className="text-[10px]">Profile</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default HeroSection;
