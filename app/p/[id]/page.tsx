import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import AppLinkPage from '../../components/AppLinkPage';

// Fallback for shared post links (https://myglo.app/p/<post id>). With the app
// installed, App Links / Universal Links open the post in the app instead.
// The page is generic on purpose: it never loads the post.
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;

    return {
        ...pageMetadata({
            title: 'Shared post',
            description: 'Someone shared a post with you. Open it in the MyGlo app.',
            path: `/p/${encodeURIComponent(id)}`,
        }),
        robots: {
            index: false,
            follow: true,
        },
    };
}

export default function SharedPostPage() {
    return (
        <AppLinkPage
            eyebrow="Shared post"
            title="Open this post in the MyGlo app"
            message="Someone shared a post with you. Posts open in the MyGlo app, where you can see the full look and book the artist behind it."
            showStoreLinks
        />
    );
}
