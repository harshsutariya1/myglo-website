'use client';

import Link from 'next/link';
import { Check, Home, ArrowRight, Sparkles } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function WelcomeClient() {
    useEffect(() => {
        // Trigger a refined, premium confetti burst on load
        const duration = 1.5 * 1000;
        const end = Date.now() + duration;

        const frame = () => {
            confetti({
                particleCount: 2,
                angle: 60,
                spread: 60,
                origin: { x: 0 },
                colors: ['#FFB6A3', '#FC69C3', '#9D4EDD', '#FFD166'],
                disableForReducedMotion: true
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 60,
                origin: { x: 1 },
                colors: ['#FFB6A3', '#FC69C3', '#9D4EDD', '#FFD166'],
                disableForReducedMotion: true
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        };
        frame();
    }, []);

    const containerVariants: Variants = {
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 20,
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 100, damping: 10 }
        }
    };

    return (
        <main className="flex-grow flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6 py-20 bg-[#FAFAFA]">
            {/* Elegant Ambient Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Animated Orbs */}
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-tr from-[#FFB6A3]/40 to-[#FC69C3]/20 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        x: [0, -50, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-gradient-to-bl from-[#9D4EDD]/20 to-[#FFD166]/20 rounded-full blur-[100px]"
                />
                <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 mix-blend-overlay pointer-events-none" 
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                ></div>
            </div>

            {/* Premium Glassmorphic Card */}
            <motion.div 
                className="relative z-10 w-full max-w-2xl text-center flex flex-col items-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="backdrop-blur-2xl bg-white/70 border border-white/80 shadow-[0_8px_40px_rgb(0,0,0,0.04)] rounded-[2.5rem] p-10 sm:p-16 w-full flex flex-col items-center relative overflow-hidden">
                    
                    {/* Subtle inner highlight for 3D effect */}
                    <div className="absolute inset-0 rounded-[2.5rem] border border-white mix-blend-overlay pointer-events-none"></div>

                    {/* Exquisite Success Icon */}
                    <motion.div className="mb-10 relative flex items-center justify-center" variants={itemVariants}>
                        {/* Glowing backdrop rings */}
                        <motion.div 
                            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 bg-gradient-to-tr from-[#10B981] to-[#34D399] blur-2xl rounded-full opacity-40 w-32 h-32 -m-4"
                        ></motion.div>
                        
                        {/* Physical-looking icon container */}
                        <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-b from-white to-[#F0FDF4] shadow-[0_10px_25px_rgb(16,185,129,0.2)] border border-[#E2E8F0] flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white opacity-60"></div>
                            <motion.div
                                initial={{ scale: 0, rotate: -45 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.3 }}
                            >
                                <Check size={48} strokeWidth={3} className="text-[#10B981] drop-shadow-sm relative z-10" aria-hidden="true" />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Elegant Typography */}
                    <motion.div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10B981]/10 text-[#059669] text-sm font-semibold mb-6 border border-[#10B981]/20" variants={itemVariants}>
                        <Sparkles size={16} />
                        <span>Email Verified Successfully</span>
                    </motion.div>

                    <motion.h1 
                        className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] mb-5 tracking-tight leading-tight"
                        variants={itemVariants}
                    >
                        Welcome to MyGlo
                    </motion.h1>
                    
                    <motion.p 
                        className="text-[#475569] text-lg sm:text-xl mb-12 max-w-[28rem] mx-auto leading-relaxed font-medium"
                        variants={itemVariants}
                    >
                        We are absolutely thrilled to have you on board. Your journey towards a brighter experience starts here.
                    </motion.p>

                    {/* Premium Action Buttons */}
                    <motion.div 
                        className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full max-w-md mx-auto"
                        variants={itemVariants}
                    >
                        <Link
                            href="/"
                            className="group relative w-full sm:w-auto px-8 py-4 bg-[#0F172A] text-white rounded-full font-bold text-sm sm:text-base transition-all duration-300 hover:bg-[#1E293B] hover:shadow-[0_10px_30px_rgb(15,23,42,0.3)] hover:-translate-y-1 flex items-center justify-center gap-2 overflow-hidden focus:outline-none focus-visible:ring-4 focus-visible:ring-[#94A3B8]"
                            aria-label="Go to Homepage"
                        >
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            <Home size={18} className="group-hover:-translate-y-0.5 transition-transform duration-300 relative z-10" />
                            <span className="relative z-10 tracking-wide">Go to Homepage</span>
                        </Link>
                        
                        <Link
                            href="/app-showcase"
                            className="group relative w-full sm:w-auto px-8 py-4 bg-white text-[#0F172A] border border-[#CBD5E1] rounded-full font-bold text-sm sm:text-base transition-all duration-300 hover:bg-[#F8FAFC] hover:border-[#94A3B8] hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#94A3B8]"
                            aria-label="Explore Features"
                        >
                            <span className="relative z-10 tracking-wide">Explore Features</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300 relative z-10 text-[#475569] group-hover:text-[#0F172A]" />
                        </Link>
                    </motion.div>

                </div>
            </motion.div>
        </main>
    );
}
