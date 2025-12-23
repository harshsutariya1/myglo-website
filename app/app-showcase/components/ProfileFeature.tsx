"use client";

import React from 'react';
import { User, MapPin, CheckCircle2, ChevronLeft, Share, MoreHorizontal, MessageCircle, BadgeCheck, Star, Play, Layers } from 'lucide-react';

const ProfileFeature = () => {
    const [imgError, setImgError] = React.useState(false);
    const [imageErrors, setImageErrors] = React.useState<Record<number, boolean>>({});

    const portfolioPosts = [
        "https://blobcdn.same.energy/d/69/dc/69dca881809cb72ab0ec9abf5f194fbf1e3cf464",
        "https://blobcdn.same.energy/b/46/04/460468a1833e2a21918e3e89bda1f8201c54c7cb",
        "https://blobcdn.same.energy/b/46/51/4651ccf26118f2b44da91b160f5fdf48bfc43f4c",
        "https://blobcdn.same.energy/a/51/b1/51b178ca584bc4e7fe165674583618d318c4d4e2",
        "https://blobcdn.same.energy/a/ca/68/ca68a364dfc9bbfd519110de488b06ac9461e3ba",
        "https://blobcdn.same.energy/a/97/ee/97ee58250792bfdc75028733f6b1ace57c0b6416"
    ];

    const handleImageError = (index: number) => {
        setImageErrors(prev => ({ ...prev, [index]: true }));
    };

    return (
        <section className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFB6A3]/20 to-[#FC69C3]/20 blur-3xl rounded-full transform scale-90"></div>
                <div className="relative w-[300px] h-[600px] bg-white rounded-[40px] border-[8px] border-[#140000] shadow-2xl overflow-hidden z-10 transform rotate-[-1deg] hover:rotate-0 transition-transform duration-500 scale-75 sm:scale-90 lg:scale-100">
                    <div className="h-full w-full bg-white flex flex-col relative">
                        {/* Status Bar & Fixed Header */}
                        <div className="absolute top-0 w-full z-30">
                            {/* Status Bar */}
                            <div className="w-full h-6 flex justify-between px-6 items-center pt-2">
                                <div className="text-[10px] font-bold">9:41</div>
                                <div className="flex gap-1"><div className="w-3 h-3 bg-gray-900/20 rounded-full"></div><div className="w-3 h-3 bg-gray-900/20 rounded-full"></div></div>
                            </div>

                            {/* Nav Icons */}
                            <div className="flex justify-between text-[#140000] px-6 pt-4">
                                <div className="w-8 h-8 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer shadow-sm hover:bg-white transition-colors"><ChevronLeft size={18} /></div>
                                <div className="flex gap-2">
                                    <div className="w-8 h-8 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer shadow-sm hover:bg-white transition-colors"><Share size={16} /></div>
                                    <div className="w-8 h-8 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer shadow-sm hover:bg-white transition-colors"><MoreHorizontal size={16} /></div>
                                </div>
                            </div>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-hidden pb-24">
                            {/* Cover Image */}
                            <div className="h-32 bg-gradient-to-r from-[#FFB6A3] to-[#FC69C3] opacity-30"></div>

                            {/* Profile Info */}
                            <div className="px-6 relative -mt-10 mb-6">
                                <div className="flex justify-between items-end mb-4">
                                    <div className="w-20 h-20 rounded-full border-4 border-white bg-gray-50 shadow-sm relative overflow-hidden flex items-center justify-center text-gray-300">
                                        {!imgError ? (
                                            <img
                                                src="https://blobcdn.same.energy/a/63/e6/63e66c7eefe6da2cf68830d6f5bf742191975df6"
                                                alt="Profile"
                                                className="absolute inset-0 w-full h-full object-cover"
                                                onError={() => setImgError(true)}
                                            />
                                        ) : (
                                            <User size={32} />
                                        )}
                                    </div>
                                    <div className="flex gap-2 mb-2">
                                        <button className="h-8 px-4 rounded-full border border-gray-200 text-xs font-bold flex items-center gap-1 hover:bg-gray-50 transition-colors">Follow</button>
                                        <button className="h-8 w-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"><MessageCircle size={14} /></button>
                                    </div>
                                </div>

                                <div className="flex items-center gap-1 mb-1">
                                    <h2 className="text-xl font-bold text-[#140000]">Sarah's Studio</h2>
                                    <BadgeCheck size={16} className="text-[#07944F] fill-green-100" />
                                </div>
                                <div className="flex items-center gap-1 text-gray-500 text-xs mb-5">
                                    <MapPin size={12} /> <span>Surfers Paradise, Gold Coast</span>
                                </div>

                                {/* Stats */}
                                <div className="flex justify-between py-4 border-y border-gray-50 mb-5">
                                    <div className="text-center w-1/3 border-r border-gray-50">
                                        <div className="font-bold text-lg flex items-center justify-center gap-1">4.9 <Star size={12} className="fill-[#FFB6A3] text-[#FFB6A3]" /></div>
                                        <div className="text-[10px] text-gray-400 font-medium tracking-wide">RATING</div>
                                    </div>
                                    <div className="text-center w-1/3 border-r border-gray-50">
                                        <div className="font-bold text-lg">2.1k</div>
                                        <div className="text-[10px] text-gray-400 font-medium tracking-wide">FOLLOWERS</div>
                                    </div>
                                    <div className="text-center w-1/3">
                                        <div className="font-bold text-lg">150+</div>
                                        <div className="text-[10px] text-gray-400 font-medium tracking-wide">REVIEWS</div>
                                    </div>
                                </div>

                                {/* Tabs */}
                                <div className="flex gap-8 border-b border-gray-100 mb-4 px-2">
                                    <div className="pb-3 border-b-2 border-[#140000] font-bold text-xs uppercase tracking-wider text-[#140000]">Portfolio</div>
                                    <div className="pb-3 text-gray-400 font-bold text-xs uppercase tracking-wider hover:text-gray-600 cursor-pointer transition-colors">Services</div>
                                </div>

                                {/* Portfolio Grid */}
                                <div className="grid grid-cols-3 gap-1 rounded-2xl overflow-hidden pb-8">
                                    {portfolioPosts.map((url, index) => (
                                        <div key={index} className="aspect-square bg-gray-100 relative group overflow-hidden">
                                            {!imageErrors[index] && (
                                                <img
                                                    src={url}
                                                    alt={`Portfolio ${index + 1}`}
                                                    className="absolute inset-0 w-full h-full object-cover z-0"
                                                    onError={() => handleImageError(index)}
                                                />
                                            )}
                                            <div className={`absolute inset-0 flex items-center justify-center transition-colors cursor-pointer z-10 ${!imageErrors[index] ? 'bg-transparent hover:bg-black/10' : 'bg-gray-50 text-gray-200 hover:bg-gray-100'}`}>
                                                {/* Indicators for Video/carousel */}
                                                {(index === 2) && <Play size={20} className="text-white drop-shadow-md fill-white/50" />}
                                                {(index === 0 || index === 4) && <Layers size={20} className="text-white drop-shadow-md absolute top-2 right-2" />}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sticky Bottom Action */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent pt-10 z-20">
                            <button className="w-full bg-[#140000] text-white py-3.5 rounded-xl font-bold text-sm shadow-xl shadow-black/5 hover:bg-[#333] transition-colors flex items-center justify-center gap-2">
                                Book Appointment
                            </button>
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
