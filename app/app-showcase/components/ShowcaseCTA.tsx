"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const ShowcaseCTA = () => {
    return (
        <div className="mt-32 text-center">
            <Link href="/#waitlist" className="bg-[#140000] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#333] transition-all shadow-xl hover:-translate-y-1 inline-flex items-center gap-2 text-lg">
                Join the Waitlist Now <ArrowLeft size={20} className="rotate-180" />
            </Link>
        </div>
    );
};

export default ShowcaseCTA;
