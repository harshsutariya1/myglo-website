"use client";

import React from 'react';
import Image from 'next/image';
import { Search, User, Heart, CheckCircle2, Home, Calendar } from 'lucide-react';

const DiscoveryFeature = () => {
    const [profileError, setProfileError] = React.useState(false);

    return (
        <section className="mb-32 grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FFB6A3]/20 to-[#FC69C3]/20 blur-3xl rounded-full transform scale-90"></div>
                {/* Phone Mockup: Discovery */}
                <div className="relative w-[300px] h-[600px] bg-white rounded-[40px] border-[8px] border-[#140000] shadow-2xl overflow-hidden z-10 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500 scale-75 sm:scale-90 lg:scale-100">
                    <div className="h-6 w-full bg-white flex justify-between px-6 items-center pt-2">
                        <div className="text-[10px] font-bold">9:41</div>
                        <div className="flex gap-1"><div className="w-3 h-3 bg-gray-200 rounded-full"></div><div className="w-3 h-3 bg-gray-200 rounded-full"></div></div>
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
                                        <Image
                                            src="https://blobcdn.same.energy/a/63/e6/63e66c7eefe6da2cf68830d6f5bf742191975df6"
                                            alt="Lily Lashes"
                                            fill
                                            className="object-cover"
                                            onError={() => setProfileError(true)}
                                            sizes="32px"
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
                                <Image
                                    src="https://blobcdn.same.energy/d/69/dc/69dca881809cb72ab0ec9abf5f194fbf1e3cf464"
                                    alt="Post 1"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 300px"
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
    );
};

export default DiscoveryFeature;
