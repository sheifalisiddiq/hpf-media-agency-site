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
});

const htmlClassName = `${inter.variable} dark`;
const bodyClassName =
  "antialiased selection:bg-primary-container selection:text-on-primary-container bg-background text-on-background min-h-screen flex flex-col font-body";

export const metadata: Metadata = {
  title: "HPF Media | Dominate Your Market",
  description: "High-performance marketing for elite brands.",
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
