import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CursorTrail from "@/components/CursorTrail";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import VisualBackground from "@/components/VisualBackground";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const htmlClassName = `${inter.variable} dark`;
const bodyClassName =
  "antialiased selection:bg-primary-container selection:text-on-primary-container bg-background text-on-background min-h-screen flex flex-col font-body";

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hpf-media.com"),
  title: {
    default: "HPF Media | Social Media Marketing Agency UAE",
    template: "%s | HPF Media",
  },
  description: "HPF Media is a specialized social media marketing agency in UAE. We help brands grow through strategic Instagram and TikTok content production and organic strategy.",
  openGraph: {
    title: "HPF Media | Social Media Marketing Agency UAE",
    description: "HPF Media helps UAE business owners grow visibility, engagement, and inbound leads through strategic content.",
    url: "https://www.hpf-media.com",
    siteName: "HPF Media",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "HPF Media Logo",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HPF Media | Social Media Marketing Agency UAE",
    description: "Strategic social media growth and content production for UAE brands.",
    images: ["/logo.jpg"],
  },
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={htmlClassName} suppressHydrationWarning>
      <body className={bodyClassName}>
        <VisualBackground />
        <CursorTrail />
        <Navigation />
        <SmoothScrollProvider>
          <main className="flex-grow">
            {children}
          </main>
        </SmoothScrollProvider>
        <Footer />
      </body>
    </html>
  );
}
