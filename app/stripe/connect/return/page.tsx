import type { Metadata } from 'next';
import AppLinkPage from '../../../components/AppLinkPage';

// Stripe sends providers here when they finish or leave Connect onboarding
// (the Supabase `connect` function's CONNECT_RETURN_URL). Reaching it doesn't
// mean the account is verified: the app refreshes the status when they return.
export const metadata: Metadata = {
    title: 'Back to MyGlo',
    description: 'Your Stripe details are saved. Go back to the MyGlo app to see your payout status.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function StripeConnectReturnPage() {
    return (
        <AppLinkPage
            eyebrow="Payouts"
            title="You're all set"
            message="Go back to the MyGlo app. Your payout status updates there."
        />
    );
}
