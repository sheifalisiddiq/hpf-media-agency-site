import React from "react";
import type { Metadata } from "next";
import { Instrument_Serif, Inter_Tight, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CursorTrail from "@/components/CursorTrail";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import VisualBackground from "@/components/VisualBackground";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import JsonLd from "@/components/JsonLd";
import LoadingScreen from "@/components/LoadingScreen";
import { LOADER_KEY } from "@/lib/intro";
import { site } from "@/content/site";

const display = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const description =
  "HPF Media is a strategy-first, values-led marketing agency in Dubai. We diagnose what's actually broken, engineer your brand and campaign system, then execute content, paid media, SEO and social against agreed KPIs.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "HPF Media | Strategy-First Marketing Agency in Dubai, UAE",
    template: "%s | HPF Media",
  },
  description,
  authors: [{ name: "HPF Media", url: site.url }],
  creator: "HPF Media",
  publisher: "HPF Media",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: site.url },
  openGraph: {
    title: "HPF Media | Strategy-First Marketing Agency in Dubai, UAE",
    description,
    url: site.url,
    siteName: "HPF Media",
    images: [{ url: "/logo.jpg", width: 1200, height: 630, alt: "HPF Media, marketing agency in Dubai, UAE" }],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HPF Media | Strategy-First Marketing Agency in Dubai, UAE",
    description,
    images: ["/logo.jpg"],
    creator: "@hpfmedia",
    site: "@hpfmedia",
  },
  icons: { icon: "/logo.jpg", apple: "/logo.jpg" },
};

const offer = (name: string, desc: string, min?: number, max?: number) => ({
  "@type": "Offer",
  itemOffered: { "@type": "Service", name, description: desc },
  ...(min !== undefined
    ? {
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "AED",
          minPrice: min,
          ...(max !== undefined ? { maxPrice: max } : {}),
        },
      }
    : {}),
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
      "@id": `${site.url}/#organization`,
      name: "HPF Media",
      alternateName: ["HPF Media Agency", "HPF Marketing Agency", "HPF Media Dubai"],
      url: site.url,
      logo: {
        "@type": "ImageObject",
        "@id": `${site.url}/#logo`,
        url: `${site.url}/logo.jpg`,
        contentUrl: `${site.url}/logo.jpg`,
        caption: "HPF Media",
      },
      image: { "@id": `${site.url}/#logo` },
      description,
      slogan: "Marketing without compromise.",
      email: site.email,
      telephone: "+971-55-521-4667",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+971-55-521-4667",
          contactType: "customer service",
          availableLanguage: ["English", "Arabic"],
          areaServed: "AE",
        },
        { "@type": "ContactPoint", email: site.email, contactType: "sales", availableLanguage: "English" },
      ],
      address: { "@type": "PostalAddress", addressCountry: "AE", addressRegion: "Dubai", addressLocality: "Dubai" },
      areaServed: [
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Place", name: "GCC" },
        { "@type": "Place", name: "MENA" },
      ],
      sameAs: [site.instagram],
      knowsAbout: [
        "Marketing Strategy",
        "Marketing Gap Analysis",
        "Brand Architecture",
        "Messaging Strategy",
        "Campaign Planning",
        "OKRs and KPIs for Marketing",
        "Content Production",
        "Paid Media Management",
        "Search Engine Optimization",
        "Social Media Management",
        "Ethical Marketing",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "HPF Method",
        itemListElement: [
          { ...offer("Clarity Check", "Free online marketing diagnostic questionnaire with an instant gap score.", 0, 0) },
          offer(
            "Identifier",
            "Root-cause marketing gap analysis, internal and external, with prioritized recommendations. 2–3 weeks.",
            15000,
            20000
          ),
          offer(
            "BrandArch",
            "Brand architecture and engineered campaign frameworks with OKRs and KPIs. 3–4 weeks.",
            20000,
            30000
          ),
          offer(
            "LaunchX",
            "Monthly execution retainer: content production, paid media, SEO and social media management, reported against agreed KPIs."
          ),
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: "HPF Media",
      description,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "en-AE",
    },
  ],
};

const introScript = `try{if(sessionStorage.getItem("${LOADER_KEY}"))document.documentElement.dataset.introSeen="1"}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-AE"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col bg-ink font-sans text-bone">
        <Script id="hpf-intro" strategy="beforeInteractive">
          {introScript}
        </Script>
        <LoadingScreen />
        <JsonLd data={organizationSchema} />
        <VisualBackground />
        <CursorTrail />
        <SmoothScrollProvider>
          <Navigation />
          <main className="relative z-10 flex-grow">{children}</main>
          <Footer />
        </SmoothScrollProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
