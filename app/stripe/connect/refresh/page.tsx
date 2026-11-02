import type { Metadata } from 'next';
import AppLinkPage from '../../../components/AppLinkPage';

// Stripe sends providers here when their onboarding link has expired or was
// already used (the Supabase `connect` function's CONNECT_REFRESH_URL). Links
// are single-use, so a fresh one has to come from the app.
export const metadata: Metadata = {
    title: 'Link expired',
    description: 'This Stripe link has expired. Go back to the MyGlo app for a new one.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function StripeConnectRefreshPage() {
    return (
        <AppLinkPage
            eyebrow="Payouts"
            title="This link has expired"
            message="Go back to the MyGlo app and tap Continue with Stripe for a new link. Anything you already entered is saved."
        />
    );
}
