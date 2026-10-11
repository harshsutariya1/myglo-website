import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CONTACT_EMAIL, INSTAGRAM_URL, LEGAL_ENTITY, SITE_DESCRIPTION, SITE_LOCALE, SITE_NAME, SITE_URL } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      legalName: LEGAL_ENTITY.name,
      taxID: LEGAL_ENTITY.abn,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/MyGlo3D_4.png`,
        width: 503,
        height: 496,
      },
      email: CONTACT_EMAIL,
      description: SITE_DESCRIPTION,
      address: {
        '@type': 'PostalAddress',
        addressRegion: LEGAL_ENTITY.region,
        addressCountry: LEGAL_ENTITY.country,
      },
      areaServed: {
        '@type': 'Country',
        name: 'Australia',
      },
      sameAs: [INSTAGRAM_URL],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: 'en-AU',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ],
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MyGlo - The All-in-One Beauty Booking Platform in Australia",
    template: `%s | ${SITE_NAME}`
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Beauty Booking App",
    "Australian Beauty Platform",
    "Find Makeup Artists",
    "Book Hair Stylist",
    "Nail Techs Australia",
    "Beauty Services Near Me",
    "MyGlo",
    "Salon Booking System",
    "Mobile Beauty Services",
    "Freelance Beauty Professionals"
  ],
  authors: [{ name: "MyGlo Team" }, { name: "Harsh Sutariya", url: "https://harshsutariya.dev" }],
  creator: SITE_NAME,
  publisher: LEGAL_ENTITY.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'Beauty',
  icons: {
    icon: "/MyGlo3D_4.png",
    apple: "/MyGlo3D_4.png",
  },
  // Canonical URLs are set per page (see lib/seo.ts). Setting one here would be
  // inherited by every page that doesn't override it.
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    locale: SITE_LOCALE,
    title: "MyGlo - The All-in-One Beauty Booking Platform in Australia",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: "MyGlo - The All-in-One Beauty Booking Platform in Australia",
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${plusJakartaSans.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `console.info(
              "%c🚀 Developed by %cHarsh Sutariya%c | %charshsutariya.dev",
              "color: #64748b; font-family: sans-serif; font-size: 12px;",
              "color: #0f172a; font-family: sans-serif; font-size: 14px; font-weight: bold;",
              "color: #cbd5e1; font-family: sans-serif; font-size: 12px;",
              "color: #10b981; font-family: sans-serif; font-size: 12px; font-weight: bold; text-decoration: none;"
            );`
          }}
        />
        {children}
      </body>
    </html>
  );
}
