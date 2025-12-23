"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Instagram, Mail } from 'lucide-react';

const Navbar = () => {
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
        <nav className="relative z-50 w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
            <Link href="/" className="flex items-center gap-2 cursor-pointer">
                {/* Logo */}
                <div className="w-10 h-10 relative">
                    <img
                        src="/MyGlo3D_4.png"
                        alt="MyGlo Logo"
                        className="w-full h-full object-contain"
                    />
                </div>
                <span className="text-2xl font-bold tracking-tight">MyGlo</span>
            </Link>
            <div className="flex gap-4 items-center">
                <a
                    href="#features"
                    onClick={(e) => handleScroll(e, 'features')}
                    className="hidden md:block text-sm font-semibold text-[#534B4B] hover:text-[#140000] mr-2"
                >
                    Features
                </a>
                <a
                    href="#business"
                    onClick={(e) => handleScroll(e, 'business')}
                    className="hidden md:block text-sm font-semibold text-[#534B4B] hover:text-[#140000] mr-2"
                >
                    Business
                </a>
                <a
                    href="#faq"
                    onClick={(e) => handleScroll(e, 'faq')}
                    className="hidden md:block text-sm font-semibold text-[#534B4B] hover:text-[#140000] mr-2"
                >
                    FAQ
                </a>
                <a
                    href="#contact"
                    onClick={(e) => handleScroll(e, 'contact')}
                    className="hidden md:block text-sm font-semibold text-[#534B4B] hover:text-[#140000] mr-4"
                >
                    Contact
                </a>
                <a href="#" className="p-2 rounded-full hover:bg-[#F3F3F5] transition-colors">
                    <Instagram size={20} color="#140000" />
                </a>
                <a href="mailto:hello@myglo.app" className="p-2 rounded-full hover:bg-[#F3F3F5] transition-colors">
                    <Mail size={20} color="#140000" />
                </a>
            </div>
        </nav>
    );
};
export default Navbar;
