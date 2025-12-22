"use client";

import React, { useState } from 'react';
import {
    ChevronRight, CheckCircle2, User, Search, Heart, Calendar
} from 'lucide-react';

const HeroSection = () => {
    const [email, setEmail] = useState('');
    const [userType, setUserType] = useState('client'); // 'client' | 'salon'
    const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success'

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setStatus('loading');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setEmail('');
        }, 1500);
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

                {/* Waitlist Form */}
                <div className="w-full max-w-md glass-card p-6 rounded-2xl shadow-xl shadow-[#FFB6A3]/10 mx-auto lg:mx-0">
                    {status === 'success' ? (
                        <div className="flex flex-col items-center justify-center py-8 text-center space-y-3 animate-in fade-in zoom-in duration-300">
                            <div className="w-16 h-16 bg-[#07944F]/10 rounded-full flex items-center justify-center mb-2">
                                <CheckCircle2 size={32} color="#07944F" />
                            </div>
                            <h3 className="text-xl font-bold text-[#140000]">You're on the list!</h3>
                            <p className="text-[#534B4B]">We'll notify you as soon as we launch in your area.</p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="text-sm font-semibold text-[#FFB6A3] hover:text-[#E06052] mt-4"
                            >
                                Register another email
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* User Type Toggle */}
                            <div className="bg-[#F3F3F5] p-1 rounded-xl flex">
                                <button
                                    type="button"
                                    onClick={() => setUserType('client')}
                                    className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${userType === 'client'
                                        ? 'bg-white text-[#140000] shadow-sm'
                                        : 'text-[#534B4B] hover:text-[#140000]'
                                        }`}
                                >
                                    I'm a Client
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setUserType('salon')}
                                    className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${userType === 'salon'
                                        ? 'bg-white text-[#140000] shadow-sm'
                                        : 'text-[#534B4B] hover:text-[#140000]'
                                        }`}
                                >
                                    I'm a Salon
                                </button>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-semibold text-[#140000]">
                                    {userType === 'client' ? 'Get early access' : 'Join as a Partner'}
                                </label>
                                <div className="flex gap-2">
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        placeholder={userType === 'client' ? 'jane@example.com' : 'salon@business.com'}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="flex-1 bg-white border border-[#E5E5E5] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#FFB6A3] transition-all placeholder:text-[#888080]"
                                    />
                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="bg-[#140000] text-white px-6 rounded-xl font-semibold hover:bg-[#333] transition-colors flex items-center justify-center min-w-[100px]"
                                    >
                                        {status === 'loading' ? (
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        ) : (
                                            <span className="flex items-center gap-1">Join <ChevronRight size={16} /></span>
                                        )}
                                    </button>
                                </div>
                                <p className="text-xs text-[#888080]">
                                    {userType === 'client'
                                        ? 'Join 2,000+ others waiting for launch.'
                                        : 'Exclusive launch rates for the first 50 partners.'}
                                </p>
                            </div>
                        </form>
                    )}
                </div>
            </div>

            {/* Right Column: App Mockup */}
            <div className="relative h-[500px] lg:h-[800px] w-full mt-8 lg:mt-0 select-none pointer-events-none flex items-center justify-center lg:block">
                {/* Phone 1: Discovery Feed */}
                <div className="absolute top-0 left-1/2 -translate-x-[60%] lg:translate-x-0 lg:left-auto lg:right-28 w-[280px] sm:w-[300px] h-[580px] sm:h-[600px] bg-white rounded-[40px] border-[8px] border-[#140000] shadow-2xl overflow-hidden animate-float z-20 scale-[0.85] sm:scale-100 origin-top lg:origin-center">
                    {/* Status Bar */}
                    <div className="h-6 w-full bg-white flex justify-between px-6 items-center pt-2">
                        <div className="text-[10px] font-bold">9:41</div>
                        <div className="flex gap-1">
                            <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
                            <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
                        </div>
                    </div>

                    {/* App Header */}
                    <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-end">
                        <h2 className="font-bold text-xl">Discover</h2>
                        <Search size={20} className="text-gray-400" />
                    </div>

                    {/* Feed Item */}
                    <div className="p-4 space-y-3">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFB6A3] to-[#FC69C3]"></div>
                            <div>
                                <div className="font-bold text-xs">Lily Lashes</div>
                                <div className="text-[10px] text-gray-500">Melbourne CBD • 2km</div>
                            </div>
                            <button className="ml-auto text-[10px] font-bold text-[#FFB6A3] border border-[#FFB6A3] px-2 py-1 rounded-full">+ Follow</button>
                        </div>

                        {/* Image Placeholder */}
                        <div className="w-full aspect-square bg-[#F3F3F5] rounded-xl relative overflow-hidden group">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                                <User size={48} />
                            </div>
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

                    {/* Bottom Nav */}
                    <div className="absolute bottom-0 w-full h-16 bg-white border-t border-gray-100 flex justify-around items-center px-2">
                        <div className="flex flex-col items-center gap-1">
                            <Search size={20} className="text-[#FFB6A3]" />
                            <span className="text-[10px] font-bold text-[#FFB6A3]">Discover</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 opacity-40">
                            <Calendar size={20} />
                            <span className="text-[10px]">Bookings</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 opacity-40">
                            <User size={20} />
                            <span className="text-[10px]">Profile</span>
                        </div>
                    </div>
                </div>

                {/* Phone 2: Booking Flow */}
                <div className="absolute top-8 left-1/2 translate-x-[-15%] lg:translate-x-0 lg:top-20 lg:right-0 w-[260px] sm:w-[280px] h-[520px] sm:h-[550px] bg-gray-50 rounded-[40px] border-[8px] border-[#E06052]/20 shadow-xl overflow-hidden animate-float-delayed z-10 opacity-90 scale-[0.85] sm:scale-95 lg:scale-95 origin-top lg:origin-bottom-right">
                    <div className="h-full w-full bg-white opacity-90 flex flex-col">
                        <div className="p-6 pt-12">
                            <h3 className="text-lg font-bold mb-4">Select Time</h3>
                            <div className="space-y-3">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex gap-3">
                                        <div className={`p-3 rounded-xl border flex-1 text-center ${i === 1 ? 'border-[#FFB6A3] bg-[#FFF3F0]' : 'border-gray-100'}`}>
                                            <div className="text-xs font-bold text-gray-500">MON</div>
                                            <div className="text-sm font-bold">1{i}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 space-y-2">
                                <div className="p-3 rounded-lg bg-[#140000] text-white text-sm flex justify-between">
                                    <span>10:00 AM</span>
                                    <span className="font-bold">$60</span>
                                </div>
                                <div className="p-3 rounded-lg border border-gray-100 text-gray-400 text-sm">
                                    11:30 AM
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default HeroSection;
