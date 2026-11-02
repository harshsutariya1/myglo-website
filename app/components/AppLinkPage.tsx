import Image from 'next/image';
import Link from 'next/link';
import { Home } from 'lucide-react';
import { APP_STORE_URL, GOOGLE_PLAY_URL } from '@/lib/seo';

type AppLinkPageProps = {
    // Small label above the heading, e.g. "Shared post"
    eyebrow: string;
    title: string;
    message: string;
    // Show the store links (or "coming soon" while the app isn't listed yet).
    // Off for pages that only people who already have the app reach.
    showStoreLinks?: boolean;
};

// Landing page for links that belong to the MyGlo app: shared posts and
// profiles opened without the app installed, and Stripe onboarding hand-backs.
// It never loads app data, so nothing private can show here.
export default function AppLinkPage({ eyebrow, title, message, showStoreLinks = false }: AppLinkPageProps) {
    const storeLinks = [
        { label: 'App Store', href: APP_STORE_URL },
        { label: 'Google Play', href: GOOGLE_PLAY_URL },
    ].filter((store): store is { label: string; href: string } => store.href !== null);

    return (
        <main className="min-h-screen w-full flex flex-col items-center justify-center bg-[#FFF3F0] relative overflow-hidden font-sans selection:bg-[#FFB6A3] selection:text-[#140000]">
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#FFB6A3]/30 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#FC69C3]/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>

            <div className="relative z-10 w-full max-w-xl px-6 py-16 text-center">
                <Link href="/" className="inline-flex items-center gap-2 mb-10">
                    <span className="relative w-12 h-12">
                        <Image src="/MyGlo3D_4.png" alt="MyGlo Logo" fill sizes="48px" className="object-contain" priority />
                    </span>
                    <span className="text-3xl font-bold tracking-tight text-[#140000]">MyGlo</span>
                </Link>

                <div className="bg-white/50 backdrop-blur-md border border-white/60 rounded-3xl shadow-lg px-6 py-10 md:px-10">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#FC69C3] mb-3">{eyebrow}</p>
                    <h1 className="text-2xl md:text-3xl font-bold text-[#140000] mb-4">{title}</h1>
                    <p className="text-[#534B4B] text-lg leading-relaxed">{message}</p>

                    {showStoreLinks && (
                        <div className="mt-8">
                            {storeLinks.length > 0 ? (
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                                    {storeLinks.map((store) => (
                                        <a
                                            key={store.label}
                                            href={store.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full sm:w-auto px-6 py-3 bg-[#140000] text-white rounded-full font-bold text-sm transition-all hover:bg-[#2a0a0a] hover:scale-105 active:scale-95 shadow-xl"
                                        >
                                            Get it on {store.label}
                                        </a>
                                    ))}
                                </div>
                            ) : (
                                <>
                                    <p className="text-sm text-[#534B4B] mb-4">
                                        MyGlo is coming soon to the App Store and Google Play.
                                    </p>
                                    <Link
                                        href="/#waitlist"
                                        className="inline-block px-6 py-3 bg-[#140000] text-white rounded-full font-bold text-sm transition-all hover:bg-[#2a0a0a] hover:scale-105 active:scale-95 shadow-xl"
                                    >
                                        Join the waitlist
                                    </Link>
                                </>
                            )}
                        </div>
                    )}
                </div>

                <Link
                    href="/"
                    className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#140000] hover:text-[#FC69C3] transition-colors"
                >
                    <Home size={16} className="group-hover:-translate-y-0.5 transition-transform" />
                    Back to Home
                </Link>
            </div>
        </main>
    );
}
