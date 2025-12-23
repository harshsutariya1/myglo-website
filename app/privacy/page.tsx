"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPage = () => {
    return (
        <div className="min-h-screen w-full font-sans text-[#140000]" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
            <Navbar />

            <main className="pt-32 pb-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#140000]">Privacy Policy</h1>
                    <p className="text-sm text-gray-500 mb-12">Last updated: December 2025</p>

                    <div className="space-y-8 text-[#534B4B] leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-[#140000]">1. Introduction</h2>
                            <p>
                                Welcome to MyGlo. We respect your privacy and are committed to protecting your personal data.
                                This privacy policy will inform you as to how we look after your personal data when you visit our website
                                or use our application (regardless of where you visit it from) and tell you about your privacy rights
                                and how the law protects you. MyGlo operates in accordance with the <strong>Privacy Act 1988 (Cth)</strong>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-[#140000]">2. Information We Collect</h2>
                            <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                                <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
                                <li><strong>Transaction Data</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
                                <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                                <li><strong>Profile Data</strong> includes your username and password, purchases or orders made by you, your interests, preferences, feedback and survey responses.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-[#140000]">3. How We Use Your Data</h2>
                            <p className="mb-4">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                                <li>Where we need to comply with a legal or regulatory obligation.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-[#140000]">4. Data Retention</h2>
                            <p>
                                We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-[#140000]">5. Contact Us</h2>
                            <p>
                                If you have any questions about this privacy policy or our privacy practices, please contact us at:
                            </p>
                            <p className="mt-2 font-semibold">
                                Email: <a href="mailto:hello@myglo.app" className="text-[#E06052] hover:underline">hello@myglo.app</a>
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PrivacyPage;
