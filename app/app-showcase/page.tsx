import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Background from '../components/Background';
import ShowcaseHero from './components/ShowcaseHero';
import DiscoveryFeature from './components/DiscoveryFeature';
import BookingFeature from './components/BookingFeature';
import ProfileFeature from './components/ProfileFeature';
import ShowcaseCTA from './components/ShowcaseCTA';

export const metadata: Metadata = pageMetadata({
    title: 'App Preview',
    description: 'Take a look inside the MyGlo app: a visual discovery feed, booking and calendar tools, and portfolios for beauty professionals.',
    path: '/app-showcase',
});

const AppShowcase = () => {
    return (
        <div className="min-h-screen w-full font-sans text-[#140000] selection:bg-[#FFB6A3] selection:text-[#140000]" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
            <Background />
            <Navbar />

            <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <ShowcaseHero />
                <DiscoveryFeature />
                <BookingFeature />
                <ProfileFeature />
                <ShowcaseCTA />
            </main>

            <Footer />
        </div>
    );
};

export default AppShowcase;
