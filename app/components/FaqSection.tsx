"use client";

import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

const FaqSection = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "When is MyGlo launching?",
            answer: "We are launching exclusively in the Gold Coast, Australia in early 2026. Join our waitlist to be the first to know when we go live in your suburb."
        },
        {
            question: "Is MyGlo free for clients?",
            answer: "Yes! MyGlo is 100% free for clients to browse, discover, and book appointments. You only pay for the beauty services you book."
        },
        {
            question: "I'm a salon owner. Can I use my existing booking system?",
            answer: "MyGlo is an all-in-one platform designed to replace expensive, fragmented software. We provide a complete, built-in booking system, calendar, and client management tool that works seamlessly with your visual portfolio. No external links required."
        },
        {
            question: "How is MyGlo different from Instagram?",
            answer: "Instagram is for everything; MyGlo is specifically for beauty. Our search is built for services (e.g., 'Blonde Specialist' or 'Nail Art'), and every post links directly to a booking option. No more DMing for appointments."
        }
    ];

    return (
        <section id="faq" className="py-20 bg-gradient-to-b from-slate-50/50 to-white border-t border-[#E5E5E5]/50 relative">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-[#E5E5E5] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#FFB6A3] bg-white"
                        >
                            <button
                                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                                className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-[#FAFAFA] transition-colors"
                            >
                                <span className="font-bold text-lg text-[#140000] pr-4">{faq.question}</span>
                                {openFaqIndex === index ? (
                                    <Minus className="text-[#FFB6A3] flex-shrink-0" size={24} />
                                ) : (
                                    <Plus className="text-[#140000] flex-shrink-0" size={24} />
                                )}
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className="p-6 pt-0 text-[#534B4B] leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default FaqSection;
