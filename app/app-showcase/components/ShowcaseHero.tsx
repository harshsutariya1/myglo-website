"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const ShowcaseHero = () => {
    return (
        <div className="text-center mb-20">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-[#140000] mb-8 transition-colors">
                <ArrowLeft size={16} /> Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Inside <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB6A3] to-[#FC69C3]">MyGlo</span>
            </h1>
            <p className="text-lg md:text-xl text-[#534B4B] max-w-2xl mx-auto leading-relaxed">
                Explore the interface designed to turn beauty services into a visual, seamless experience.
            </p>
        </div>
    );
};

export default ShowcaseHero;
