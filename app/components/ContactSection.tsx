"use client";

import React from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
    return (
        <section id="contact" className="py-20 bg-gradient-to-t from-pink-50/40 to-white border-t border-[#E5E5E5]/50 relative overflow-hidden">
            {/* Decorative Blob for contact section */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#FC69C3]/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF3F0] border border-[#FFB6A3]/30 mb-6">
                            <span className="text-xs font-semibold text-[#E06052] uppercase tracking-wider">Get In Touch</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Have questions? <br />We'd love to hear from you.</h2>
                        <p className="text-lg text-[#534B4B] mb-8 leading-relaxed max-w-md">
                            Whether you're a salon owner looking to partner or a client with feedback, our team is here to help.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E5E5] flex items-center justify-center shadow-sm">
                                    <Mail className="text-[#FFB6A3]" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Email Us</h3>
                                    <a href="mailto:hello@myglo.app" className="text-[#534B4B] hover:text-[#E06052] transition-colors">hello@myglo.app</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E5E5] flex items-center justify-center shadow-sm">
                                    <MapPin className="text-[#FC69C3]" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Location</h3>
                                    <p className="text-[#534B4B]">Gold Coast, Australia</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass-card p-8 rounded-3xl shadow-xl shadow-[#FFB6A3]/5 bg-white">
                        <form className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-[#140000]">First Name</label>
                                    <input type="text" className="w-full bg-[#F3F3F5] border-transparent rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#FFB6A3] transition-all" placeholder="Jane" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-[#140000]">Last Name</label>
                                    <input type="text" className="w-full bg-[#F3F3F5] border-transparent rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#FFB6A3] transition-all" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-[#140000]">Email</label>
                                <input type="email" className="w-full bg-[#F3F3F5] border-transparent rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#FFB6A3] transition-all" placeholder="jane@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-[#140000]">Message</label>
                                <textarea rows={4} className="w-full bg-[#F3F3F5] border-transparent rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#FFB6A3] transition-all resize-none" placeholder="How can we help you?"></textarea>
                            </div>
                            <button type="button" className="w-full bg-[#140000] text-white py-4 rounded-xl font-bold hover:bg-[#333] transition-colors flex items-center justify-center gap-2">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
