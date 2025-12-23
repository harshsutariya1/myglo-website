"use client";

import React from 'react';
import { Calendar, Clock, CheckCircle2 } from 'lucide-react';

const BookingFeature = () => {
    return (
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
    );
};

export default BookingFeature;
