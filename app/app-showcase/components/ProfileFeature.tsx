"use client";

import React from 'react';
import { User, MapPin, CheckCircle2 } from 'lucide-react';

const ProfileFeature = () => {
    return (
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
    );
};

export default ProfileFeature;
