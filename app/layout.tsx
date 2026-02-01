import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

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
  '@type': 'Organization',
  name: 'MyGlo',
  url: 'https://myglo.app',
  logo: 'https://myglo.app/MyGlo_logo2.png',
  description: 'MyGlo is a beauty booking platform that allows clients to book appointments with beauty professionals in their area.',
  sameAs: [
    'https://twitter.com/mygloapp',
    'https://instagram.com/mygloapp',
    'https://facebook.com/mygloapp'
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL('https://myglo.app'),
  title: {
    default: "MyGlo - The All-in-One Beauty Booking Platform",
    template: "%s | MyGlo"
  },
  description: "Discover local talent, book appointments instantly, and build your community. Coming soon to Gold Coast.",
  keywords: ["Beauty Booking", "Gold Coast Beauty", "Makeup Artist", "Hair Stylist", "Beauty Services", "MyGlo"],
  authors: [{ name: "MyGlo Team" }],
  creator: "MyGlo",
  publisher: "MyGlo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  category: 'Beauty',
  icons: {
    icon: "/MyGlo3D_4.png",
    apple: "/MyGlo3D_4.png",
  },
  openGraph: {
    title: "MyGlo - The All-in-One Beauty Booking Platform",
    description: "Discover local talent, book appointments instantly, and build your community. Coming soon to Gold Coast.",
    images: '/MyGlo_logo2.png',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "MyGlo - The All-in-One Beauty Booking Platform",
    description: "Discover local talent, book appointments instantly, and build your community. Coming soon to Gold Coast.",
    images: '/MyGlo_logo2.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${plusJakartaSans.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
