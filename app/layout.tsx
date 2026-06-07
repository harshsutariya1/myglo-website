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
  logo: 'https://myglo.app/MyGlo3D_4.png',
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
  description: "MyGlo is an all-in-one beauty booking platform in Australia. Discover local makeup artists, hair stylists, and nail technicians. Book appointments instantly and join a thriving beauty community.",
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
    description: "MyGlo is an all-in-one beauty booking platform in Australia. Discover local makeup artists, hair stylists, and nail technicians. Book appointments instantly and join a thriving beauty community.",
    images: '/MyGlo_logo2.png',
    type: 'website',
    siteName: 'MyGlo',
  },
  twitter: {
    card: 'summary_large_image',
    title: "MyGlo - The All-in-One Beauty Booking Platform",
    description: "MyGlo is an all-in-one beauty booking platform in Australia. Discover local makeup artists, hair stylists, and nail technicians. Book appointments instantly and join a thriving beauty community.",
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
