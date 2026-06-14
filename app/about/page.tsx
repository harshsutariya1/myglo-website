"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Background from '../components/Background';
import { Heart, Globe, Zap, Users, ShieldCheck, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const AboutPage = () => {
    return (
        <div className="min-h-screen w-full font-sans text-[#140000] selection:bg-[#FFB6A3] selection:text-[#140000]">
            <Background />
            <Navbar />

            <main className="pt-24 pb-20 px-4 sm:px-6">
                {/* Hero Section */}
                <section className="max-w-7xl mx-auto text-center mb-24 md:mb-32 mt-8 md:mt-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-[#FFB6A3]/40 mb-8 shadow-sm">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#E06052] animate-pulse"></span>
                        <span className="text-xs font-bold text-[#E06052] uppercase tracking-widest">Our Story</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 tracking-tight leading-tight">
                        We are rewriting the <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB6A3] via-[#E06052] to-[#FC69C3] drop-shadow-sm">rulebook of beauty.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-[#534B4B] max-w-3xl mx-auto leading-relaxed font-medium">
                        MyGlo is built on a simple promise: to bridge the gap between talented beauty professionals and the clients who are looking for them.
                    </p>
                </section>

                {/* Mission & Vision Grid */}
                <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 mb-32">
                    <div className="glass-card p-10 md:p-14 rounded-[40px] md:col-span-1 relative overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 hover:border-[#FFB6A3]/30 transition-all duration-500 hover:-translate-y-1">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#FFB6A3]/30 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-700 ease-out"></div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-[#FFF3F0] to-white flex items-center justify-center text-[#E06052] mb-8 shadow-sm border border-[#FFF3F0]">
                                <Globe size={28} strokeWidth={2.5} />
                            </div>
                            <h2 className="text-4xl font-bold mb-6 tracking-tight">Our Mission</h2>
                            <p className="text-[#534B4B] text-lg leading-relaxed font-medium">
                                To democratize the beauty industry by providing high-end, professional tools to independent artists, enabling them to build thriving businesses on their own terms.
                            </p>
                        </div>
                    </div>
                    <div className="glass-card p-10 md:p-14 rounded-[40px] md:col-span-1 relative overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 hover:border-[#FC69C3]/30 transition-all duration-500 hover:-translate-y-1">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#FC69C3]/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-700 ease-out"></div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-[#FFF3F0] to-white flex items-center justify-center text-[#FC69C3] mb-8 shadow-sm border border-[#FFF3F0]">
                                <Sparkles size={28} strokeWidth={2.5} />
                            </div>
                            <h2 className="text-4xl font-bold mb-6 tracking-tight">Our Vision</h2>
                            <p className="text-[#534B4B] text-lg leading-relaxed font-medium">
                                A world where bookkeeping, scheduling, and marketing are automated, so beauty professionals can focus entirely on what they do best—creating art.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="max-w-6xl mx-auto mb-32">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-[#FFB6A3]/40 mb-6 shadow-sm">
                            <Users size={14} className="text-[#E06052]" />
                            <span className="text-xs font-bold text-[#E06052] uppercase tracking-widest">The Team</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Meet the Founders</h2>
                        <p className="text-[#534B4B] max-w-2xl mx-auto text-xl leading-relaxed">
                            The passionate minds working behind the scenes to revolutionize the beauty and wellness industry.
                        </p>
                    </div>

                    <div className="flex flex-col gap-24 md:gap-32">
                        {/* Sam */}
                        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 group">
                            <div className="w-full sm:w-2/3 md:w-[35%] lg:w-[30%] relative rounded-[32px] overflow-hidden aspect-square md:aspect-[4/5] shadow-xl transition-transform duration-700 group-hover:-translate-y-2 ring-1 ring-black/5">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#140000]/60 via-transparent to-transparent z-10 opacity-60"></div>
                                <Image 
                                    src="/team/sam.jpg" 
                                    alt="Sam Bartlett" 
                                    fill 
                                    sizes="(max-width: 768px) 100vw, 35vw"
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                            </div>
                            <div className="w-full md:w-[65%] lg:w-[70%] space-y-6">
                                <div>
                                    <h3 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">Sam Bartlett</h3>
                                    <p className="text-[#E06052] font-bold tracking-widest uppercase text-sm">Co-Founder & CEO</p>
                                </div>
                                <div className="space-y-4 text-[#534B4B] text-lg leading-relaxed font-medium">
                                    <p>
                                        Growing up with both parents working as masseuses, Sam saw firsthand the hard work, passion, and challenges that go into running a small business in the beauty and wellness industry. 
                                    </p>
                                    <p>
                                        Through MyGlo, he is focused on helping business owners be recognized for their work, build supportive communities, and create more opportunities to grow sustainable, successful businesses.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Harsh */}
                        <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16 group">
                            <div className="w-full sm:w-2/3 md:w-[35%] lg:w-[30%] relative rounded-[32px] overflow-hidden aspect-square md:aspect-[4/5] shadow-xl transition-transform duration-700 group-hover:-translate-y-2 ring-1 ring-black/5">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#140000]/60 via-transparent to-transparent z-10 opacity-60"></div>
                                <Image 
                                    src="/team/harsh.jpg" 
                                    alt="Harsh Sutariya" 
                                    fill 
                                    sizes="(max-width: 768px) 100vw, 35vw"
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                            </div>
                            <div className="w-full md:w-[65%] lg:w-[70%] space-y-6 text-left md:text-right">
                                <div>
                                    <h3 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">Harsh Sutariya</h3>
                                    <p className="text-[#E06052] font-bold tracking-widest uppercase text-sm">Co-Founder & CTO</p>
                                </div>
                                <div className="space-y-4 text-[#534B4B] text-lg leading-relaxed font-medium">
                                    <p>
                                        With a deep passion for building scalable, elegant, and user-centric technology, Harsh leads the engineering behind MyGlo's platform. 
                                    </p>
                                    <p>
                                        He thrives on solving complex problems and turning innovative ideas into seamless digital experiences, ensuring that beauty professionals and clients have the best tools at their fingertips.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="max-w-7xl mx-auto mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Driven by Values</h2>
                        <p className="text-[#534B4B] max-w-2xl mx-auto text-xl leading-relaxed">
                            We don't just build software; we build culture. These core principles guide every decision we make at MyGlo.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Heart size={28} strokeWidth={2.5} />,
                                title: "Community First",
                                description: "We emphasize local connection. The Australian beauty scene is unique, and we are building specifically to nurture it."
                            },
                            {
                                icon: <ShieldCheck size={28} strokeWidth={2.5} />,
                                title: "Radical Transparency",
                                description: "No hidden fees, no confusing algorithms. We believe in fair partnerships where everyone wins."
                            },
                            {
                                icon: <Zap size={28} strokeWidth={2.5} />,
                                title: "Relentless Innovation",
                                description: "We are constantly pushing the boundaries of what a booking platform can do, blending social discovery with utility."
                            }
                        ].map((value, index) => (
                            <div key={index} className="p-10 rounded-[32px] bg-white/70 backdrop-blur-sm border border-white/60 hover:border-[#FFB6A3]/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                                <div className="w-14 h-14 rounded-2xl bg-[#F3F3F5] group-hover:bg-[#FFF3F0] flex items-center justify-center text-[#140000] group-hover:text-[#E06052] transition-colors mb-8">
                                    {value.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 tracking-tight">{value.title}</h3>
                                <p className="text-[#534B4B] text-base leading-relaxed font-medium">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Team / Origins */}
                <section className="max-w-7xl mx-auto bg-[#140000] rounded-[48px] p-10 md:p-20 relative overflow-hidden text-center shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#FFB6A3] to-[#FC69C3] rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDuration: '8s' }}></div>
                    </div>

                    <div className="relative z-10 max-w-3xl mx-auto text-white">
                        <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">Born in Australia ☀️</h2>
                        <p className="text-gray-200 text-xl leading-relaxed mb-10 font-medium">
                            MyGlo started with a frustration: why is it so hard to find good local beauty services? We looked at the options and saw clunky directories or chaotic Instagram DMs. We knew there had to be a better way.<br /><br />
                            <span className="text-white font-bold">So we built it. A platform that feels as premium as the services it hosts.</span>
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link href="/#waitlist" className="bg-white text-[#140000] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#FFB6A3] hover:text-[#140000] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                Join our Journey
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default AboutPage;
