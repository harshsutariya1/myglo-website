"use client";

import React, { useState } from 'react';
import { Calendar, ArrowLeft, CheckCircle2, Home, Search, User } from 'lucide-react';

const BookingFeature = () => {
    const [step, setStep] = useState<'date' | 'list'>('date');

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
                <div className="relative w-[300px] h-[600px] bg-white rounded-[40px] border-[8px] border-[#140000] shadow-2xl overflow-hidden z-10 transform rotate-[2deg] hover:rotate-0 transition-transform duration-500 scale-75 sm:scale-90 lg:scale-100">
                    <div className="h-full w-full bg-white flex flex-col relative">
                        {/* Status Bar */}
                        <div className="h-6 w-full bg-white flex justify-between px-6 items-center pt-2 shrink-0">
                            <div className="text-[10px] font-bold">9:41</div>
                            <div className="flex gap-1"><div className="w-3 h-3 bg-gray-200 rounded-full"></div><div className="w-3 h-3 bg-gray-200 rounded-full"></div></div>
                        </div>

                        {step === 'date' ? (
                            <>
                                {/* Header */}
                                <div className="px-6 pt-4 pb-2 shrink-0">
                                    <ArrowLeft className="w-5 h-5 mb-4 text-[#140000]" />
                                    <h3 className="text-2xl font-bold text-[#140000]">Select a time</h3>
                                </div>

                                {/* Date Selector */}
                                <div className="flex gap-4 px-6 overflow-x-auto scrollbar-hide py-4 shrink-0 border-b border-gray-50 mb-4">
                                    {[
                                        { day: 'MON', date: '09', active: false },
                                        { day: 'TUE', date: '10', active: true },
                                        { day: 'WED', date: '11', active: false },
                                        { day: 'THU', date: '12', active: false },
                                        { day: 'FRI', date: '13', active: false },
                                        { day: 'SAT', date: '14', active: false },
                                        { day: 'SUN', date: '15', active: false },
                                    ].map((item, i) => (
                                        <div key={i} className={`flex flex-col items-center justify-center min-w-[3.5rem] py-3 rounded-2xl transition-colors cursor-pointer ${item.active ? 'bg-[#FFF3F0]' : 'bg-transparent'}`}>
                                            <span className={`text-[10px] font-bold mb-1 ${item.active ? 'text-[#E06052]' : 'text-gray-400'}`}>{item.day}</span>
                                            <span className={`text-lg font-bold ${item.active ? 'text-[#E06052]' : 'text-[#140000]'}`}>{item.date}</span>
                                            {item.active && <div className="w-1 h-1 bg-[#E06052] rounded-full mt-1"></div>}
                                        </div>
                                    ))}
                                </div>

                                {/* Time Grid */}
                                <div className="px-6 grid grid-cols-2 gap-3 overflow-y-auto mb-24 scrollbar-hide content-start">
                                    {[
                                        "10 am", "12:30 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5:30 pm", "4:30 pm", "5 pm", "6 pm"
                                    ].map((time, i) => (
                                        <div key={i} className={`py-3 rounded-2xl border text-center text-sm font-medium transition-colors cursor-pointer ${time === "2 pm" ? 'bg-[#FFF3F0] border-[#FFB6A3] text-[#140000]' : 'bg-white border-gray-100 text-[#140000] hover:border-gray-200'}`}>
                                            {time}
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom Button */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <button onClick={() => setStep('list')} className="w-full bg-[#FFB6A3] text-[#140000] font-bold py-4 rounded-2xl shadow-lg hover:bg-[#ffaa96] transition-colors">Continue</button>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* All Bookings View */}
                                <div className="px-6 pt-4 pb-4 shrink-0 flex items-center gap-4">
                                    <ArrowLeft
                                        className="w-5 h-5 text-[#140000] cursor-pointer hover:opacity-70 transition-opacity"
                                        onClick={() => setStep('date')}
                                    />

                                </div>

                                {/* Tabs */}
                                <div className="px-6 mb-6">
                                    <div className="bg-gray-100 p-1 rounded-2xl flex relative">
                                        <div className="w-1/2 bg-[#FFF3F0] text-[#E06052] py-2 rounded-xl text-center text-sm font-bold shadow-sm">Upcoming</div>
                                        <div className="w-1/2 text-gray-400 py-2 rounded-xl text-center text-sm font-bold cursor-pointer hover:text-gray-600 transition-colors">Completed</div>
                                    </div>
                                </div>

                                {/* Booking List */}
                                <div className="px-6 space-y-4 overflow-y-auto h-[calc(100%-230px)] scrollbar-hide pb-4">
                                    {[
                                        { day: 'FRI', date: '26', month: 'JUN', name: 'Lily Lashes', service: 'Natural lash extension', time: '1pm - 2pm', avatar: 'bg-orange-100' },
                                        { day: 'MON', date: '29', month: 'JUN', name: 'Nails Nirvana', service: 'French manicure', time: '10am - 11am', avatar: 'bg-purple-100' },
                                        { day: 'WED', date: '26', month: 'JUN', name: 'Korea Beauty', service: 'Natural lash extension', time: '5pm - 6pm', avatar: 'bg-pink-100' },
                                    ].map((booking, i) => (
                                        <div key={i} className="bg-white border border-gray-100 rounded-3xl p-4 flex gap-4 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="bg-gray-50 rounded-2xl p-3 flex flex-col items-center justify-center min-w-[3.5rem]">
                                                <span className="text-[10px] font-bold text-gray-500">{booking.day}</span>
                                                <span className="text-xl font-bold text-[#140000]">{booking.date}</span>
                                                <span className="text-[10px] font-bold text-gray-500">{booking.month}</span>
                                            </div>
                                            <div className="flex-1 py-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <div className={`w-5 h-5 rounded-full ${booking.avatar}`}></div>
                                                    <span className="text-xs text-gray-500 font-medium">{booking.name}</span>
                                                </div>
                                                <h4 className="font-bold text-sm mb-1 leading-tight">{booking.service}</h4>
                                                <div className="text-xs text-gray-400">{booking.time}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Dark Bottom Nav */}
                                <div className="absolute bottom-0 w-full h-20 bg-black rounded-b-[32px] flex justify-around items-center px-4 z-20 pb-2">
                                    <div className="flex flex-col items-center gap-1 text-gray-500">
                                        <Home size={20} />
                                        <span className="text-[10px]">Home</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1 text-gray-500">
                                        <Search size={20} />
                                        <span className="text-[10px]">Discover</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1 text-[#FFB6A3]">
                                        <Calendar size={20} />
                                        <span className="text-[10px] font-bold">Bookings</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1 text-gray-500">
                                        <User size={20} />
                                        <span className="text-[10px]">Profile</span>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingFeature;
