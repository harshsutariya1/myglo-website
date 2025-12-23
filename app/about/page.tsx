"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Background from '../components/Background';
import { Heart, Globe, Zap, Users, ShieldCheck, Sparkles } from 'lucide-react';
import Link from 'next/link';

const AboutPage = () => {
    return (
        <div className="min-h-screen w-full font-sans text-[#140000] selection:bg-[#FFB6A3] selection:text-[#140000]">
            <Background />
            <Navbar />

            <main className="pt-24 pb-20 px-6">
                {/* Hero Section */}
                <section className="max-w-7xl mx-auto text-center mb-20 md:mb-32">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF3F0] border border-[#FFB6A3]/30 mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#E06052] animate-pulse"></span>
                        <span className="text-xs font-semibold text-[#E06052] uppercase tracking-wider">Our Story</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
                        We are rewriting the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB6A3] to-[#FC69C3]">rulebook of beauty.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-[#534B4B] max-w-2xl mx-auto leading-relaxed">
                        MyGlo is built on a simple promise: to bridge the gap between talented beauty professionals and the clients who are looking for them.
                    </p>
                </section>

                {/* Mission & Vision Grid */}
                <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 mb-24">
                    <div className="glass-card p-10 rounded-[32px] md:col-span-1 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#FFB6A3]/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-2xl bg-[#FFF3F0] flex items-center justify-center text-[#E06052] mb-6">
                                <Globe size={24} />
                            </div>
                            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                            <p className="text-[#534B4B] leading-relaxed">
                                To democratize the beauty industry by providing high-end, professional tools to independent artists, enabling them to build thriving businesses on their own terms.
                            </p>
                        </div>
                    </div>
                    <div className="glass-card p-10 rounded-[32px] md:col-span-1 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#FC69C3]/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-2xl bg-[#FFF3F0] flex items-center justify-center text-[#E06052] mb-6">
                                <Sparkles size={24} />
                            </div>
                            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                            <p className="text-[#534B4B] leading-relaxed">
                                A world where bookkeeping, scheduling, and marketing are automated, so beauty professionals can focus entirely on what they do best—creating art.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="max-w-7xl mx-auto mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Driven by Values</h2>
                        <p className="text-[#534B4B] max-w-xl mx-auto">
                            We don't just build software; we build culture. These core principles guide every decision we make at MyGlo.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Heart size={24} />,
                                title: "Community First",
                                description: "We emphasize local connection. The Gold Coast beauty scene is unique, and we are building specifically to nurture it."
                            },
                            {
                                icon: <ShieldCheck size={24} />,
                                title: "Radical Transparency",
                                description: "No hidden fees, no confusing algorithms. We believe in fair partnerships where everyone wins."
                            },
                            {
                                icon: <Zap size={24} />,
                                title: "Relentless Innovation",
                                description: "We are constantly pushing the boundaries of what a booking platform can do, blending social discovery with utility."
                            }
                        ].map((value, index) => (
                            <div key={index} className="p-8 rounded-3xl bg-white border border-gray-100 hover:border-[#FFB6A3] shadow-sm hover:shadow-xl transition-all duration-300 group">
                                <div className="w-12 h-12 rounded-2xl bg-[#F3F3F5] group-hover:bg-[#FFF3F0] flex items-center justify-center text-[#140000] group-hover:text-[#E06052] transition-colors mb-6">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                                <p className="text-[#534B4B] text-sm leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Team / Origins */}
                <section className="max-w-7xl mx-auto bg-[#140000] rounded-[40px] p-8 md:p-16 relative overflow-hidden text-center">
                    <div className="absolute top-0 left-0 w-full h-full opacity-20">
                        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#FFB6A3] to-[#FC69C3] rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
                    </div>

                    <div className="relative z-10 max-w-3xl mx-auto text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Born in the Gold Coast ☀️</h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            MyGlo started with a frustration: why is it so hard to find good local beauty services? We looked at the options and saw clunky directories or chaotic Instagram DMs. We knew there had to be a better way.<br /><br />
                            So we built it. A platform that feels as premium as the services it hosts.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link href="/#waitlist" className="bg-white text-[#140000] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors">
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
