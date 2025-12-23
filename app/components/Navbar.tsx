"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Instagram, Mail, Menu, X } from 'lucide-react';

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        setIsMenuOpen(false);
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
        <>
            <header
                className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
                    }`}
            >
                <div className="w-full px-6 flex justify-between items-center max-w-7xl mx-auto">
                    <Link href="/" className="flex items-center gap-2 cursor-pointer z-50">
                        {/* Logo */}
                        <div className={`relative transition-all duration-300 ${isScrolled ? 'w-8 h-8' : 'w-10 h-10'}`}>
                            <img
                                src="/MyGlo3D_4.png"
                                alt="MyGlo Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <span className={`font-bold tracking-tight transition-all duration-300 ${isScrolled ? 'text-xl' : 'text-2xl'}`}>
                            MyGlo
                        </span>
                    </Link>
                    <nav className="flex gap-4 items-center z-50">
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
                        <a href="#" className="p-2 rounded-full hover:bg-[#F3F3F5] transition-colors hidden md:block">
                            <Instagram size={20} color="#140000" />
                        </a>
                        <a href="mailto:hello@myglo.app" className="p-2 rounded-full hover:bg-[#F3F3F5] transition-colors hidden md:block">
                            <Mail size={20} color="#140000" />
                        </a>

                        {/* Mobile Hamburger */}
                        <button
                            className="md:hidden p-2 text-[#140000] hover:bg-[#F3F3F5] rounded-full transition-colors"
                            onClick={() => setIsMenuOpen(true)}
                            aria-label="Open menu"
                        >
                            <Menu size={24} />
                        </button>
                    </nav>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-[100] bg-white/90 backdrop-blur-lg transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full p-6">
                    <div className="flex justify-end mb-8 relative z-10">
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="p-2 text-[#140000] hover:bg-gray-100 rounded-full transition-colors"
                            aria-label="Close menu"
                        >
                            <X size={32} />
                        </button>
                    </div>

                    <div className="flex flex-col items-center justify-center flex-1 gap-10 -mt-20">
                        <a
                            href="#features"
                            onClick={(e) => handleScroll(e, 'features')}
                            className="text-3xl font-bold text-[#140000] hover:text-[#E06052] transition-colors"
                        >
                            Features
                        </a>
                        <a
                            href="#business"
                            onClick={(e) => handleScroll(e, 'business')}
                            className="text-3xl font-bold text-[#140000] hover:text-[#E06052] transition-colors"
                        >
                            Business
                        </a>
                        <a
                            href="#faq"
                            onClick={(e) => handleScroll(e, 'faq')}
                            className="text-3xl font-bold text-[#140000] hover:text-[#E06052] transition-colors"
                        >
                            FAQ
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => handleScroll(e, 'contact')}
                            className="text-3xl font-bold text-[#140000] hover:text-[#E06052] transition-colors"
                        >
                            Contact
                        </a>

                        <div className="flex gap-8 mt-4">
                            <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                                <Instagram size={28} color="#140000" />
                            </a>
                            <a href="mailto:hello@myglo.app" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                                <Mail size={28} color="#140000" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Navbar;
