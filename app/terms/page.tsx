"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsPage = () => {
    return (
        <div className="min-h-screen w-full font-sans text-[#140000]" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
            <Navbar />

            <main className="pt-32 pb-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#140000]">Terms of Service</h1>
                    <p className="text-sm text-gray-500 mb-12">Last updated: December 2025</p>

                    <div className="space-y-8 text-[#534B4B] leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-[#140000]">1. Terms</h2>
                            <p>
                                By accessing the MyGlo website and application (the "Service"), you agree to be bound by these Application Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this web site are protected by applicable copyright and trade mark law.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-[#140000]">2. Use License</h2>
                            <p className="mb-4">
                                Permission is granted to temporarily download one copy of the materials (information or software) on MyGlo's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Modify or copy the materials;</li>
                                <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                                <li>Attempt to decompile or reverse engineer any software contained on MyGlo's website;</li>
                                <li>Remove any copyright or other proprietary notations from the materials; or</li>
                                <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
                            </ul>
                            <p className="mt-4">
                                This license shall automatically terminate if you violate any of these restrictions and may be terminated by MyGlo at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-[#140000]">3. Disclaimer</h2>
                            <p>
                                The materials on MyGlo's website are provided "as is". MyGlo makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, MyGlo does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet web site or otherwise relating to such materials or on any sites linked to this site.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-[#140000]">4. Limitations</h2>
                            <p>
                                In no event shall MyGlo or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on MyGlo's Internet site, even if MyGlo or a MyGlo authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-[#140000]">5. Revisions and Errata</h2>
                            <p>
                                The materials appearing on MyGlo's web site could include technical, typographical, or photographic errors. MyGlo does not warrant that any of the materials on its web site are accurate, complete, or current. MyGlo may make changes to the materials contained on its web site at any time without notice. MyGlo does not, however, make any commitment to update the materials.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-[#140000]">6. Governing Law</h2>
                            <p>
                                Any claim relating to MyGlo's web site shall be governed by the laws of Australia without regard to its conflict of law provisions.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default TermsPage;
