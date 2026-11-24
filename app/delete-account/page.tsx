import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CONTACT_EMAIL, LEGAL_ENTITY, pageMetadata } from '@/lib/seo';

// The account deletion page Google Play's Data safety section links to. It
// must explain how to delete an account both in the app and without it, and
// what is deleted or kept. Keep it in step with the app's deletion flow
// (myglo-mobile docs/account_deletion.md) and the Privacy Policy.
export const metadata: Metadata = pageMetadata({
    title: 'Delete your account',
    description: 'How to delete your MyGlo account, in the app or by email, and what happens to your data.',
    path: '/delete-account',
});

const requestSubject = 'Delete my MyGlo account';
const requestHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(requestSubject)}`;

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
    <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-[#140000]">{title}</h2>
        <div className="space-y-3 text-[#534B4B] leading-relaxed">{children}</div>
    </section>
);

export default function DeleteAccountPage() {
    return (
        <div className="min-h-screen w-full font-sans text-[#140000]" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
            <Navbar />

            <main className="pt-16 md:pt-24 pb-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#140000]">Delete your MyGlo account</h1>
                    <p className="text-lg text-[#534B4B] mb-12">
                        MyGlo is operated by {LEGAL_ENTITY.name}. You can ask us to delete your account and the personal
                        information in it at any time.
                    </p>

                    <Section title="Clients: delete it in the app">
                        <ol className="list-decimal pl-6 space-y-2">
                            <li>Open MyGlo and go to <strong>Profile</strong>.</li>
                            <li>Tap <strong>Account Settings</strong>, then <strong>Delete Account</strong>.</li>
                            <li>Enter your password to confirm.</li>
                        </ol>
                        <p>
                            Your account is deleted straight away and we email you to confirm. If you have an upcoming
                            booking, cancel it or wait until it&apos;s finished first; the app tells you what needs
                            sorting.
                        </p>
                    </Section>

                    <Section title="Beauty providers: ask us to close it">
                        <p>
                            To stop appearing on MyGlo straight away, turn on <strong>Settings → Privacy &amp; security →
                            Hide my business</strong> in the app. To close your account for good, email us from the
                            address on your account (see below). We first make sure no bookings, payouts or payment
                            disputes are still open, so nobody is left without an appointment or money owed to them.
                        </p>
                    </Section>

                    <Section title="Without the app">
                        <p>
                            Email{' '}
                            <a href={requestHref} className="text-[#E06052] font-semibold hover:underline">
                                {CONTACT_EMAIL}
                            </a>{' '}
                            from the email address on your MyGlo account, with the subject &ldquo;{requestSubject}&rdquo;.
                            We only act on requests sent from the account&apos;s own address, so nobody else can close
                            your account. We reply within 30 days, and usually much sooner.
                        </p>
                    </Section>

                    <Section title="What is deleted">
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Your profile: name, phone number, email address, photo, bio and location.</li>
                            <li>Your posts, photos, comments, likes, follows, favourites and reviews.</li>
                            <li>For providers: services, cover photos, working hours and the payout account we set up with Stripe.</li>
                            <li>Your sign-in details and notification settings.</li>
                        </ul>
                    </Section>

                    <Section title="What we keep, and why">
                        <p>
                            Records of bookings and payments are kept for five years, because Australian tax law
                            requires it. They no longer include your name, phone number, notes or address. A
                            provider&apos;s business name stays on past bookings, as it appears on clients&apos; receipts.
                            We also keep a note that an account was deleted, without any personal details.
                        </p>
                        <p>
                            Payment card details are held by our payment provider, Stripe, never by MyGlo.
                        </p>
                    </Section>

                    <p className="text-[#534B4B]">
                        Read more in our{' '}
                        <a href="/privacy" className="text-[#E06052] font-semibold hover:underline">Privacy Policy</a>.
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
}
