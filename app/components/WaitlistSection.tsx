"use client";

import React, { useState } from 'react';
import { ChevronRight, CheckCircle2, User, Building2, MapPin, Smartphone, Mail } from 'lucide-react';

import { joinWaitlist } from '../actions/joinWaitlist';

const WaitlistSection = () => {
    // Form State
    const [formData, setFormData] = useState({
        name: '',
        city: '',
        salonName: '',
        email: '',
        mobile: ''
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic Client Validation
        if (!formData.email || !formData.name || !formData.city || !formData.salonName) {
            setMessage("Please fill in all required fields.");
            setStatus('error');
            return;
        }

        setStatus('loading');
        setMessage('');

        try {
            const result = await joinWaitlist({
                email: formData.email,
                name: formData.name,
                city: formData.city,
                salonName: formData.salonName,
                mobile: formData.mobile
            });

            if (result.success) {
                setStatus('success');
                setFormData({ name: '', city: '', salonName: '', email: '', mobile: '' });
            } else {
                setStatus('error');
                setMessage(result.message);
            }
        } catch (error) {
            setStatus('error');
            setMessage('Something went wrong. Please try again.');
        }
    };

    return (
        <section id="waitlist" className="py-12 md:py-24 bg-[#140000] text-white relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[#FFB6A3]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#E06052]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-md mx-auto text-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Join the Waitlist</h2>
                    <p className="text-gray-400 text-sm md:text-base mb-8">
                        Be the first to know when we launch in your area.
                    </p>

                    {/* Early Bird Offer */}
                    <div className="bg-gradient-to-r from-[#FFB6A3]/20 to-[#E06052]/20 border border-[#FFB6A3]/30 rounded-2xl p-6 backdrop-blur-md mb-8 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB6A3]/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform"></div>
                        <div className="relative z-10">
                            <h3 className="text-[#FFB6A3] font-bold uppercase tracking-widest text-xs mb-4">🚀 Launch Exclusive</h3>
                            <div className="flex justify-center">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-white mb-1">0% Fees</div>
                                    <div className="text-xs text-gray-300">
                                        For Salons & Artists for the first <span className="text-[#FFB6A3] font-bold">3 months</span> after launch.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-lg bg-white/5 border border-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-xl shadow-[#FFB6A3]/5 mx-auto">
                    {status === 'success' ? (
                        <div className="flex flex-col items-center justify-center py-6 text-center space-y-3 animate-in fade-in zoom-in duration-300">
                            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#07944F]/20 rounded-full flex items-center justify-center mb-2">
                                <CheckCircle2 size={28} className="md:w-8 md:h-8" color="#07944F" />
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-white">You're on the list!</h3>
                            <p className="text-sm md:text-base text-gray-400">We'll notify you as soon as we launch in your area.</p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="text-sm font-semibold text-[#FFB6A3] hover:text-[#E06052] mt-4"
                            >
                                Register another email
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Name */}
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs font-semibold text-gray-400 ml-1 uppercase">Full Name</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                                            <User size={16} />
                                        </div>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            required
                                            placeholder="Jane Doe"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-white/10 border border-white/20 rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#FFB6A3] focus:border-transparent transition-all placeholder:text-gray-600 text-white"
                                        />
                                    </div>
                                </div>

                                {/* City */}
                                <div className="space-y-2">
                                    <label htmlFor="city" className="text-xs font-semibold text-gray-400 ml-1 uppercase">City</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                                            <MapPin size={16} />
                                        </div>
                                        <input
                                            type="text"
                                            name="city"
                                            id="city"
                                            required
                                            placeholder="Gold Coast"
                                            value={formData.city}
                                            onChange={handleChange}
                                            className="w-full bg-white/10 border border-white/20 rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#FFB6A3] focus:border-transparent transition-all placeholder:text-gray-600 text-white"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Salon Name */}
                            <div className="space-y-2">
                                <label htmlFor="salonName" className="text-xs font-semibold text-gray-400 ml-1 uppercase">Salon / Business Name</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                                        <Building2 size={16} />
                                    </div>
                                    <input
                                        type="text"
                                        name="salonName"
                                        id="salonName"
                                        required
                                        placeholder="Glow Beauty Studio"
                                        value={formData.salonName}
                                        onChange={handleChange}
                                        className="w-full bg-white/10 border border-white/20 rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#FFB6A3] focus:border-transparent transition-all placeholder:text-gray-600 text-white"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Email */}
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs font-semibold text-gray-400 ml-1 uppercase">Email Address</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                                            <Mail size={16} />
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            required
                                            placeholder="jane@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-white/10 border border-white/20 rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#FFB6A3] focus:border-transparent transition-all placeholder:text-gray-600 text-white"
                                        />
                                    </div>
                                </div>

                                {/* Mobile */}
                                <div className="space-y-2">
                                    <label htmlFor="mobile" className="text-xs font-semibold text-gray-400 ml-1 uppercase">Mobile (Optional)</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                                            <Smartphone size={16} />
                                        </div>
                                        <input
                                            type="tel"
                                            name="mobile"
                                            id="mobile"
                                            placeholder="0400 000 000"
                                            value={formData.mobile}
                                            onChange={handleChange}
                                            className="w-full bg-white/10 border border-white/20 rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#FFB6A3] focus:border-transparent transition-all placeholder:text-gray-600 text-white"
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full bg-white text-[#140000] mt-4 px-6 py-4 rounded-xl font-bold hover:bg-gray-200 transition-colors flex items-center justify-center shadow-lg"
                            >
                                {status === 'loading' ? (
                                    <div className="w-5 h-5 border-2 border-[#140000]/30 border-t-[#140000] rounded-full animate-spin"></div>
                                ) : (
                                    <span className="flex items-center gap-2">Join Waitlist <ChevronRight size={18} /></span>
                                )}
                            </button>

                            {status === 'error' && (
                                <p className="text-xs text-red-400 text-center font-semibold animate-in fade-in slide-in-from-top-1 bg-red-400/10 p-2 rounded-lg border border-red-400/20">
                                    {message}
                                </p>
                            )}

                            <p className="text-xs text-gray-500 text-center pt-2">
                                Join 2,000+ others waiting for launch.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </section >
    );
};

export default WaitlistSection;
