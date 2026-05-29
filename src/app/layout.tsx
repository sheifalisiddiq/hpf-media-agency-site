import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CursorTrail from "@/components/CursorTrail";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import VisualBackground from "@/components/VisualBackground";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import JsonLd from "@/components/JsonLd";

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
    default: "Social Media Marketing Agency in UAE | HPF Media",
    template: "%s | HPF Media",
  },
  description:
    "HPF Media is a social media marketing agency in UAE specialising in Instagram marketing, TikTok marketing, short-form video production, and organic social media growth for Dubai businesses and UAE SMEs.",
  authors: [{ name: "HPF Media", url: "https://www.hpf-media.com" }],
  creator: "HPF Media",
  publisher: "HPF Media",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.hpf-media.com",
  },
  openGraph: {
    title: "Social Media Marketing Agency in UAE | HPF Media",
    description:
      "HPF Media is a social media marketing agency in UAE specialising in Instagram marketing, TikTok marketing, and short-form content creation for Dubai businesses.",
    url: "https://www.hpf-media.com",
    siteName: "HPF Media",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "HPF Media — Social Media Marketing Agency UAE",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Marketing Agency in UAE | HPF Media",
    description: "Instagram marketing, TikTok marketing, and short-form content creation for UAE businesses. Strategy-first organic social media growth for Dubai SMEs.",
    images: ["/logo.jpg"],
    creator: "@hpfmedia",
    site: "@hpfmedia",
  },
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
  verification: {},
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://www.hpf-media.com/#organization",
      name: "HPF Media",
      alternateName: ["HPF Media Agency", "HPF Media UAE", "HPF Media Dubai"],
      url: "https://www.hpf-media.com",
      logo: {
        "@type": "ImageObject",
        "@id": "https://www.hpf-media.com/#logo",
        url: "https://www.hpf-media.com/logo.jpg",
        contentUrl: "https://www.hpf-media.com/logo.jpg",
        caption: "HPF Media — Social Media Marketing Agency UAE",
      },
      image: { "@id": "https://www.hpf-media.com/#logo" },
      description:
        "HPF Media is a social media marketing agency in UAE specialising in Instagram marketing, TikTok marketing, short-form video production, and organic social media growth for Dubai businesses and UAE SMEs.",
      email: "admin@hpf-media.com",
      telephone: "+971-50-941-8430",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+971-50-941-8430",
          contactType: "customer service",
          availableLanguage: ["English", "Arabic"],
          areaServed: "AE",
        },
        {
          "@type": "ContactPoint",
          email: "admin@hpf-media.com",
          contactType: "sales",
          availableLanguage: "English",
        },
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "AE",
        addressRegion: "Dubai",
        addressLocality: "Dubai",
      },
      areaServed: [
        { "@type": "City", name: "Dubai" },
        { "@type": "City", name: "Abu Dhabi" },
        { "@type": "City", name: "Sharjah" },
        { "@type": "Country", name: "United Arab Emirates" },
      ],
      sameAs: ["https://www.instagram.com/hpfmedia"],
      knowsAbout: [
        "Social Media Marketing UAE",
        "Instagram Marketing Strategy",
        "TikTok Marketing Dubai",
        "Short-Form Video Production",
        "Organic Social Media Growth",
        "Content Strategy UAE",
        "Personal Branding UAE",
        "Social Media Management UAE",
        "Viral Content Strategy",
        "UAE Digital Marketing",
        "Video Marketing UAE",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Social Media Marketing Services UAE",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Instagram Marketing UAE",
              description:
                "Complete Instagram growth strategy, Reels production, and audience targeting for UAE businesses in Dubai and Abu Dhabi.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "TikTok Marketing Dubai",
              description:
                "TikTok content strategy, viral hooks, and organic reach growth for Dubai and UAE brands.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Short-Form Video Production UAE",
              description:
                "Professional end-to-end short-form video production for Instagram Reels and TikTok for UAE businesses.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Organic Social Media Growth UAE",
              description:
                "Sustainable follower growth and audience building on Instagram and TikTok for UAE businesses without paid advertising.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Social Media Management UAE",
              description:
                "Full-service Instagram and TikTok management for UAE businesses including posting, strategy, and performance reporting.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Viral Content Strategy",
              description:
                "Data-informed content strategy built for maximum organic reach and engagement in the UAE market.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Content Systems",
              description:
                "Repeatable, scalable short-form content production systems for UAE businesses that keep brands consistently active.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "High-Retention Video Editing",
              description:
                "Professional short-form video editing optimised for watch time, retention rate, and Instagram and TikTok algorithm distribution.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.hpf-media.com/#website",
      url: "https://www.hpf-media.com",
      name: "HPF Media",
      description:
        "Social media marketing agency UAE — Instagram and TikTok growth for UAE brands",
      publisher: { "@id": "https://www.hpf-media.com/#organization" },
      inLanguage: "en-AE",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.hpf-media.com/?s={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AE" className={htmlClassName} suppressHydrationWarning>
      <body className={bodyClassName}>
        <JsonLd data={organizationSchema} />
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
