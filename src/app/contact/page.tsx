import type { Metadata } from "next";
import ContactPage from "@/components/contact/ContactPage";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact — Book Your Strategy Call",
  description:
    "Ready to grow your brand on Instagram and TikTok? Contact HPF Media to book a free strategy audit. UAE social media agency serving Dubai, Abu Dhabi and beyond.",
  alternates: {
    canonical: "https://www.hpf-media.com/contact",
  },
  openGraph: {
    title: "Contact HPF Media — Book Your Strategy Call",
    description:
      "Book a free strategy audit with HPF Media. UAE's specialist social media agency for Instagram and TikTok growth.",
    url: "https://www.hpf-media.com/contact",
    type: "website",
  },
  twitter: {
    title: "Contact HPF Media — Book Your Strategy Call",
    description:
      "Book a free strategy audit with HPF Media. UAE social media agency for Instagram and TikTok growth.",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://www.hpf-media.com/contact#webpage",
  name: "Contact HPF Media — Book Your Strategy Call",
  description:
    "Contact HPF Media to book a strategy audit for Instagram and TikTok content marketing in the UAE.",
  url: "https://www.hpf-media.com/contact",
  isPartOf: { "@id": "https://www.hpf-media.com/#website" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.hpf-media.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: "https://www.hpf-media.com/contact",
      },
    ],
  },
};

export default function Contact() {
  return (
    <>
      <JsonLd data={contactSchema} />
      <ContactPage />
    </>
  );
}
