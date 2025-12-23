"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Background from '../components/Background';
import { Search, User, Calendar, Heart, MapPin, ArrowLeft, Star, Clock, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const AppShowcase = () => {
    return (
        <div className="min-h-screen w-full font-sans text-[#140000] selection:bg-[#FFB6A3] selection:text-[#140000]" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
            <Background />
            <Navbar />

            <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-[#140000] mb-8 transition-colors">
                        <ArrowLeft size={16} /> Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Inside <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB6A3] to-[#FC69C3]">MyGlo</span>
                    </h1>
                    <p className="text-lg md:text-xl text-[#534B4B] max-w-2xl mx-auto leading-relaxed">
                        Explore the interface designed to turn beauty services into a visual, seamless experience.
                    </p>
                </div>

                {/* Feature 1: Discovery */}
                <section className="mb-32 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="flex justify-center relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#FFB6A3]/20 to-[#FC69C3]/20 blur-3xl rounded-full transform scale-90"></div>
                        {/* Phone Mockup: Discovery */}
                        <div className="relative w-[300px] h-[600px] bg-white rounded-[40px] border-[8px] border-[#140000] shadow-2xl overflow-hidden z-10 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                            <div className="h-6 w-full bg-white flex justify-between px-6 items-center pt-2">
                                <div className="text-[10px] font-bold">9:41</div>
                                <div className="flex gap-1"><div className="w-3 h-3 bg-gray-200 rounded-full"></div><div className="w-3 h-3 bg-gray-200 rounded-full"></div></div>
                            </div>
                            <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-end">
                                <h2 className="font-bold text-xl">Discover</h2>
                                <Search size={20} className="text-gray-400" />
                            </div>
                            <div className="p-4 space-y-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFB6A3] to-[#FC69C3]"></div>
                                    <div><div className="font-bold text-xs">Lily Lashes</div><div className="text-[10px] text-gray-500">Melbourne CBD • 2km</div></div>
                                </div>
                                <div className="w-full aspect-square bg-gray-100 rounded-xl relative overflow-hidden flex items-center justify-center text-gray-300">
                                    <User size={48} />
                                    <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold shadow-sm">$60</div>
                                </div>
                                <div>
                                    <div className="flex gap-4 mb-1">
                                        <Heart size={20} className="text-[#140000] fill-[#140000]" />
                                        <div className="text-xs font-semibold">284 likes</div>
                                    </div>
                                    <div className="text-xs text-gray-600"><span className="font-bold text-black">Lily Lashes</span> Natural hybrid set ✨</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-12 h-12 rounded-2xl bg-[#FFF3F0] flex items-center justify-center text-[#E06052] mb-6">
                            <Search size={24} />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Visual Discovery like never before.</h2>
                        <p className="text-lg text-[#534B4B] mb-8 leading-relaxed">
                            Say goodbye to boring text lists. Browse local artists through a verified visual feed where every photo is linked to a real service you can book.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 size={20} className="text-[#07944F] mt-1" />
                                <span className="text-[#140000] font-medium">Filter by style, price, and location</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 size={20} className="text-[#07944F] mt-1" />
                                <span className="text-[#140000] font-medium">Verified portfolio photos only</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 size={20} className="text-[#07944F] mt-1" />
                                <span className="text-[#140000] font-medium">Follow your favorite artists</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Feature 2: Booking */}
                <section className="mb-32 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="w-12 h-12 rounded-2xl bg-[#FFF3F0] flex items-center justify-center text-[#E06052] mb-6">
                            <Calendar size={24} />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Booking made effortless.</h2>
                        <p className="text-lg text-[#534B4B] mb-8 leading-relaxed">
                            Find a slot that works for you in seconds. No back-and-forth DMs, no calling during business hours. Just tap, confirm, and glow.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 size={20} className="text-[#07944F] mt-1" />
                                <span className="text-[#140000] font-medium">Real-time availability sync</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 size={20} className="text-[#07944F] mt-1" />
                                <span className="text-[#140000] font-medium">Instant confirmation</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 size={20} className="text-[#07944F] mt-1" />
                                <span className="text-[#140000] font-medium">Automated reminders</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-center order-1 lg:order-2 relative">
                        <div className="absolute inset-0 bg-gradient-to-tl from-[#FFB6A3]/20 to-[#FC69C3]/20 blur-3xl rounded-full transform scale-90"></div>
                        {/* Phone Mockup: Booking */}
                        <div className="relative w-[300px] h-[600px] bg-white rounded-[40px] border-[8px] border-[#140000] shadow-2xl overflow-hidden z-10 transform rotate-[2deg] hover:rotate-0 transition-transform duration-500">
                            <div className="h-full w-full bg-white flex flex-col">
                                <div className="p-6 pt-12">
                                    <h3 className="text-xl font-bold mb-6">Select Time</h3>
                                    <div className="space-y-4">
                                        <div className="flex gap-3">
                                            <div className="p-4 rounded-2xl border border-[#FFB6A3] bg-[#FFF3F0] flex-1 text-center shadow-sm">
                                                <div className="text-xs font-bold text-[#E06052] mb-1">MON</div>
                                                <div className="text-lg font-bold">12</div>
                                            </div>
                                            <div className="p-4 rounded-2xl border border-gray-100 flex-1 text-center opacity-50"><div className="text-xs font-bold text-gray-400 mb-1">TUE</div><div className="text-lg font-bold">13</div></div>
                                            <div className="p-4 rounded-2xl border border-gray-100 flex-1 text-center opacity-50"><div className="text-xs font-bold text-gray-400 mb-1">WED</div><div className="text-lg font-bold">14</div></div>
                                        </div>
                                    </div>
                                    <div className="mt-8 space-y-3">
                                        <div className="p-4 rounded-xl bg-[#140000] text-white flex justify-between items-center shadow-lg">
                                            <div className="flex items-center gap-2"><Clock size={16} /> <span className="font-bold">10:00 AM</span></div>
                                            <span className="font-bold bg-white/10 px-2 py-1 rounded text-sm">$60</span>
                                        </div>
                                        <div className="p-4 rounded-xl border border-gray-100 text-gray-400 flex justify-between">
                                            <span>11:30 AM</span>
                                        </div>
                                        <div className="p-4 rounded-xl border border-gray-100 text-gray-400 flex justify-between">
                                            <span>2:00 PM</span>
                                        </div>
                                    </div>
                                    <button className="w-full mt-auto bg-[#140000] text-white font-bold py-4 rounded-xl shadow-xl">Confirm Booking</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature 3: Profile */}
                <section className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="flex justify-center relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FFB6A3]/20 to-[#FC69C3]/20 blur-3xl rounded-full transform scale-90"></div>
                        {/* Phone Mockup: Profile */}
                        <div className="relative w-[300px] h-[600px] bg-white rounded-[40px] border-[8px] border-[#140000] shadow-2xl overflow-hidden z-10 transform rotate-[-1deg] hover:rotate-0 transition-transform duration-500">
                            <div className="relative h-48 bg-gray-100">
                                <div className="absolute -bottom-8 left-6 w-20 h-20 rounded-full border-4 border-white bg-gray-200"></div>
                            </div>
                            <div className="pt-10 px-6 pb-6">
                                <h2 className="text-2xl font-bold mb-1">Sarah's Studio</h2>
                                <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
                                    <MapPin size={14} /> <span>Surfers Paradise, GC</span>
                                </div>
                                <div className="flex gap-6 mb-6">
                                    <div className="text-center"><div className="font-bold text-lg">4.9</div><div className="text-[10px] text-gray-400">RATING</div></div>
                                    <div className="text-center"><div className="font-bold text-lg">2.1k</div><div className="text-[10px] text-gray-400">FOLLOWERS</div></div>
                                    <div className="text-center"><div className="font-bold text-lg">150+</div><div className="text-[10px] text-gray-400">REVIEWS</div></div>
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                    <div className="aspect-square bg-gray-100 rounded-lg"></div>
                                    <div className="aspect-square bg-gray-100 rounded-lg"></div>
                                    <div className="aspect-square bg-gray-100 rounded-lg"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-12 h-12 rounded-2xl bg-[#FFF3F0] flex items-center justify-center text-[#E06052] mb-6">
                            <User size={24} />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Build your brand.</h2>
                        <p className="text-lg text-[#534B4B] mb-8 leading-relaxed">
                            Your profile is your new website. Showcase your best work, collect verified reviews, and let your reputation do the selling for you.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 size={20} className="text-[#07944F] mt-1" />
                                <span className="text-[#140000] font-medium">Customizable portfolio</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 size={20} className="text-[#07944F] mt-1" />
                                <span className="text-[#140000] font-medium">Verified client reviews</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 size={20} className="text-[#07944F] mt-1" />
                                <span className="text-[#140000] font-medium">Integrated messaging</span>
                            </li>
                        </ul>
                    </div>
                </section>

                <div className="mt-32 text-center">
                    <Link href="/#waitlist" className="bg-[#140000] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#333] transition-all shadow-xl hover:-translate-y-1 inline-flex items-center gap-2 text-lg">
                        Join the Waitlist Now <ArrowLeft size={20} className="rotate-180" />
                    </Link>
                </div>

            </main>

            <Footer />
        </div>
    );
};

export default AppShowcase;
