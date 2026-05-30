import type { Metadata } from "next";
import HomeExperience from "@/components/home/HomeExperience";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in UAE | HPF Media",
  description:
    "HPF Media grows UAE businesses on Instagram and TikTok with short-form content. Social media marketing agency in Dubai. Book a free call.",
  alternates: {
    canonical: "https://www.hpf-media.com",
  },
  openGraph: {
    title: "Social Media Marketing Agency in UAE | HPF Media",
    description:
      "HPF Media grows UAE businesses on Instagram and TikTok through strategic short-form content, viral scripting, and organic lead generation systems built for the Dubai market.",
    url: "https://www.hpf-media.com",
    type: "website",
  },
  twitter: {
    title: "Social Media Marketing Agency in UAE | HPF Media",
    description:
      "Strategic short-form content, Instagram marketing, and TikTok growth for UAE businesses and Dubai SMEs.",
  },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.hpf-media.com/#webpage",
      name: "Social Media Marketing Agency in UAE — HPF Media",
      description:
        "HPF Media is a social media marketing agency in UAE helping businesses grow on Instagram and TikTok through strategic short-form content and organic lead generation.",
      url: "https://www.hpf-media.com",
      isPartOf: { "@id": "https://www.hpf-media.com/#website" },
      about: { "@id": "https://www.hpf-media.com/#organization" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.hpf-media.com",
          },
        ],
      },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2"],
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={homeSchema} />
      <HomeExperience />
    </>
  );
}
