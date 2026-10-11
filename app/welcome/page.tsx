import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WelcomeClient from './WelcomeClient';

// Post-verification landing page: not useful in search results
export const metadata: Metadata = {
    title: 'Email Verified',
    description: 'Your email has been verified. Welcome to MyGlo!',
    robots: {
        index: false,
        follow: true,
    },
};

export default function WelcomePage() {
    return (
        <div className="min-h-screen w-full flex flex-col font-sans text-[#0F172A] selection:bg-[#FFB6A3] selection:text-[#140000] bg-[#FAFAFA]">
            <Navbar />
            <WelcomeClient />
            <Footer />
        </div>
    );
}
