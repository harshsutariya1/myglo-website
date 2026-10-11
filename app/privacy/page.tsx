import type { Metadata } from 'next';
import LegalDocument from '../components/LegalDocument';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
    title: 'Privacy Policy',
    description: 'How Nexotec Pty Ltd, trading as MyGlo, handles personal information. Read the MyGlo Privacy Policy online or download the PDF.',
    path: '/privacy',
});

const PrivacyPage = () => {
    return (
        <LegalDocument
            title="Privacy Policy"
            lastUpdated="11 October 2026"
            pdfPath="/legal/MyGlo-Privacy-Policy.pdf"
            fileName="MyGlo-Privacy-Policy.pdf"
        />
    );
};

export default PrivacyPage;
