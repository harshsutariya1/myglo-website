"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Footer = () => {
    const pathname = usePathname();
    const router = useRouter();

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        if (pathname !== '/') {
            router.push(`/#${id}`);
            return;
        }

        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-white/80 backdrop-blur-md py-6 border-t border-[#E5E5E5]">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-sm text-[#888080]">
                    &copy; 2025 MyGlo Australia. All rights reserved.
                </div>
                <div className="flex gap-6 text-sm font-semibold text-[#140000]">
                    <Link href="/privacy" className="hover:text-[#FFB6A3]">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-[#FFB6A3]">Terms of Service</Link>
                    <a
                        href="#contact"
                        onClick={(e) => handleScroll(e, 'contact')}
                        className="hover:text-[#FFB6A3]"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
