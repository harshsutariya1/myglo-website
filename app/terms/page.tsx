import type { Metadata } from 'next';
import LegalDocument from '../components/LegalDocument';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
    title: 'Terms of Service',
    description: 'The MyGlo Terms of Service, operated by Nexotec Pty Ltd. Read online or download the PDF.',
    path: '/terms',
});

const TermsPage = () => {
    return (
        <LegalDocument
            title="Terms of Service"
            lastUpdated="11 October 2026"
            pdfPath="/legal/MyGlo-Terms-of-Service.pdf"
            fileName="MyGlo-Terms-of-Service.pdf"
        />
    );
};

export default TermsPage;
