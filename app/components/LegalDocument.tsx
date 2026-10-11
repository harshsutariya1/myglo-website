import React from 'react';
import { Download, ExternalLink, FileText } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

type LegalDocumentProps = {
    title: string;
    lastUpdated: string;
    pdfPath: string;
    fileName: string;
};

// Renders a published legal PDF as-is. The PDF in /public/legal is the
// authoritative document; this page only frames it.
const LegalDocument = ({ title, lastUpdated, pdfPath, fileName }: LegalDocumentProps) => {
    const actions = (
        <div className="flex flex-col sm:flex-row gap-3">
            <a
                href={pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#140000] text-white font-bold hover:bg-[#2a1717] transition-colors shadow-lg shadow-black/10"
            >
                <ExternalLink size={18} />
                Open PDF
            </a>
            <a
                href={pdfPath}
                download={fileName}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-[#140000] font-bold border border-[#E5E5E5] hover:border-[#FFB6A3] transition-colors"
            >
                <Download size={18} />
                Download PDF
            </a>
        </div>
    );

    return (
        <div className="min-h-screen w-full font-sans text-[#140000]" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
            <Navbar />

            <main className="pt-16 md:pt-24 pb-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#140000]">{title}</h1>
                    <p className="text-sm text-gray-500 mb-8">Last updated {lastUpdated}</p>

                    <div className="mb-8">{actions}</div>

                    <div className="rounded-3xl border border-[#E5E5E5] bg-white overflow-hidden shadow-sm">
                        <object
                            data={`${pdfPath}#view=FitH`}
                            type="application/pdf"
                            aria-label={`${title} (PDF)`}
                            className="block w-full h-[80vh] min-h-[520px]"
                        >
                            {/* Shown when the browser can't display PDFs inline (e.g. most mobile browsers) */}
                            <div className="flex flex-col items-center justify-center text-center gap-4 h-full min-h-[320px] p-8 bg-[#FAFAFA]">
                                <FileText size={48} className="text-[#E06052]" />
                                <p className="text-[#534B4B] max-w-md">
                                    Your browser can&apos;t display the {title} here. Open or download the PDF to read it.
                                </p>
                                {actions}
                            </div>
                        </object>
                    </div>

                    <p className="mt-8 text-[#534B4B]">
                        Questions about this document? Email{' '}
                        <a href="mailto:hello@myglo.app" className="text-[#E06052] font-semibold hover:underline">hello@myglo.app</a>.
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default LegalDocument;
