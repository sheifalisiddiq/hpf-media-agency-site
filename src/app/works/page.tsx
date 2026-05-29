import type { Metadata } from "next";
import WorksPage from "@/components/works/WorksPage";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Short-Form Video Portfolio UAE — Instagram & TikTok Content | HPF Media",
  description:
    "See how HPF Media has helped UAE brands scale organic reach and engagement with high-performance short-form video content on Instagram and TikTok. Watch our UAE social media marketing portfolio.",
  alternates: {
    canonical: "https://www.hpf-media.com/works",
  },
  openGraph: {
    title: "Short-Form Video Portfolio UAE — Instagram & TikTok Content | HPF Media",
    description:
      "High-performance short-form video content produced by HPF Media for UAE brands. Watch how we grow Instagram and TikTok reach for Dubai businesses.",
    url: "https://www.hpf-media.com/works",
    type: "website",
  },
  twitter: {
    title: "Short-Form Video Portfolio UAE | HPF Media",
    description:
      "High-performance short-form video content for UAE brands on Instagram and TikTok. Watch HPF Media's portfolio.",
  },
};

const portfolioSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.hpf-media.com/works#webpage",
      name: "Short-Form Video Portfolio UAE — HPF Media Instagram & TikTok Content",
      description:
        "Portfolio of high-performance short-form video content produced by HPF Media for UAE brands on Instagram and TikTok. Social media marketing case studies for Dubai businesses.",
      url: "https://www.hpf-media.com/works",
      isPartOf: { "@id": "https://www.hpf-media.com/#website" },
      about: { "@id": "https://www.hpf-media.com/#organization" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.hpf-media.com" },
          { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://www.hpf-media.com/works" },
        ],
      },
      mainEntity: {
        "@type": "ItemList",
        name: "HPF Media Short-Form Video Portfolio — UAE Social Media Marketing",
        numberOfItems: 10,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "VideoObject",
              name: "Cinematic Narrative — Short-Form Video Production UAE",
              description: "High-end cinematic short-form video storytelling for UAE social media platforms. Designed for maximum brand impact on Instagram Reels and TikTok.",
              provider: { "@id": "https://www.hpf-media.com/#organization" },
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "VideoObject",
              name: "Brand Strategy Content — UAE Social Media Marketing",
              description: "Strategic short-form content designed to increase organic reach and engagement for UAE brands on Instagram and TikTok.",
              provider: { "@id": "https://www.hpf-media.com/#organization" },
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@type": "VideoObject",
              name: "Personal Branding — UAE Business Owner Content",
              description: "Personal brand content for UAE business owners and founders. Building authority and visibility through strategic short-form video.",
              provider: { "@id": "https://www.hpf-media.com/#organization" },
            },
          },
          {
            "@type": "ListItem",
            position: 4,
            item: {
              "@type": "VideoObject",
              name: "Dubai Luxury Brand Showcase",
              description: "Premium luxury brand video content capturing Dubai's high-end aesthetic for social media marketing campaigns.",
              provider: { "@id": "https://www.hpf-media.com/#organization" },
            },
          },
          {
            "@type": "ListItem",
            position: 5,
            item: {
              "@type": "VideoObject",
              name: "UAE Business Growth Reel",
              description: "Dynamic short-form video reels designed for maximum reach and engagement for UAE business brands on Instagram and TikTok.",
              provider: { "@id": "https://www.hpf-media.com/#organization" },
            },
          },
        ],
      },
    },
  ],
};

export default function Works() {
  return (
    <>
      <JsonLd data={portfolioSchema} />
      <WorksPage />
    </>
  );
}
