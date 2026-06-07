import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WelcomeClient from './WelcomeClient';

export const metadata: Metadata = {
    title: 'Welcome to MyGlo - Email Verified',
    description: 'Your email has been successfully verified. Welcome to MyGlo! We are thrilled to have you on board.',
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
