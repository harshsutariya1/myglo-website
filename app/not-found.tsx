import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#FFF3F0] relative overflow-hidden font-sans selection:bg-[#FFB6A3] selection:text-[#140000]">

            {/* Background Blobs (Simplified version of Background component) */}
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#FFB6A3]/30 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#FC69C3]/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>

            <div className="relative z-10 w-full max-w-2xl px-6 text-center">

                {/* 404 Visual */}
                <div className="relative mb-8">
                    <h1 className="text-[150px] md:text-[200px] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#140000] to-[#140000]/10 select-none">
                        404
                    </h1>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/40 backdrop-blur-md border border-white/50 px-8 py-4 rounded-3xl shadow-lg rotate-[-5deg] animate-float">
                        <p className="text-xl md:text-2xl font-bold text-[#140000] whitespace-nowrap">Page Not Found 🙈</p>
                    </div>
                </div>

                {/* Message */}
                <h2 className="text-2xl md:text-3xl font-bold text-[#140000] mb-4">
                    Looking for something beautiful?
                </h2>
                <p className="text-[#534B4B] text-lg mb-10 max-w-md mx-auto leading-relaxed">
                    The page you are looking for might have been moved, removed, or got lost in the salon chair.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="group px-8 py-4 bg-[#140000] text-white rounded-full font-bold text-sm transition-all hover:bg-[#2a0a0a] hover:scale-105 active:scale-95 flex items-center gap-2 shadow-xl"
                    >
                        <Home size={18} className="group-hover:-translate-y-1 transition-transform" />
                        Back to Home
                    </Link>


                </div>

                {/* Decorative Elements */}
                <div className="absolute top-10 right-10 w-16 h-16 border-4 border-[#FFB6A3]/40 rounded-full opacity-50 animate-bounce delay-700 hidden md:block"></div>
                <div className="absolute bottom-20 left-10 w-6 h-6 bg-[#FC69C3] rounded-full opacity-30 animate-pulse hidden md:block"></div>
            </div>

            {/* Footer Text */}
            <div className="absolute bottom-8 text-center w-full">
                <p className="text-xs text-[#888080] font-medium uppercase tracking-widest">
                    MyGlo • Beauty on Demand
                </p>
            </div>
        </div>
    );
}
