import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import AppLinkPage from '../../components/AppLinkPage';

// Fallback for shared profile links (https://myglo.app/provider/<provider id>).
// With the app installed, App Links / Universal Links open the profile in the
// app instead. The page is generic on purpose: it never loads the profile.
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;

    return {
        ...pageMetadata({
            title: 'Shared profile',
            description: 'Someone shared a beauty pro with you. See their work and book them in the MyGlo app.',
            path: `/provider/${encodeURIComponent(id)}`,
        }),
        robots: {
            index: false,
            follow: true,
        },
    };
}

export default function SharedProviderPage() {
    return (
        <AppLinkPage
            eyebrow="Shared profile"
            title="Open this profile in the MyGlo app"
            message="Someone shared a beauty pro with you. Profiles open in the MyGlo app, where you can see their work, services and reviews, and book them."
            showStoreLinks
        />
    );
}
