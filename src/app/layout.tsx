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
  title: "HPF Media | Dominate Your Market",
  description: "High-performance marketing for elite brands. Strategic content, viral scripting, and growth systems for UAE SMEs.",
  openGraph: {
    title: "HPF Media | Dominate Your Market",
    description: "High-performance marketing for elite brands.",
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
    title: "HPF Media | Dominate Your Market",
    description: "High-performance marketing for elite brands.",
    images: ["/logo.jpg"],
  },
  icons: {
    icon: "/logo.jpg",
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
