import type { Metadata } from "next";
import HomeExperience from "@/components/home/HomeExperience";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in UAE | HPF Media",
  description:
    "HPF Media is a social media marketing agency in UAE specialising in Instagram marketing, TikTok marketing, and short-form content creation for Dubai businesses and UAE SMEs. Book a strategy call.",
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
    {
      "@type": "FAQPage",
      "@id": "https://www.hpf-media.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does a social media marketing agency do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A social media marketing agency manages your brand's presence on platforms like Instagram and TikTok. This includes content strategy, scripting, video production, editing, posting, and performance optimisation. HPF Media specifically focuses on short-form video content for UAE businesses, helping you build organic reach, engagement, and inbound leads without paid advertising.",
          },
        },
        {
          "@type": "Question",
          name: "How much does social media marketing cost in UAE?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Social media marketing packages in the UAE typically range from AED 3,000 to AED 20,000+ per month depending on scope, number of platforms, and content volume. HPF Media offers tailored packages designed for UAE SMEs and growing businesses. Book a strategy call to discuss your specific goals and receive an accurate quote.",
          },
        },
        {
          "@type": "Question",
          name: "Why is TikTok important for businesses in Dubai and UAE?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "TikTok has one of the highest organic reach rates of any social platform, meaning your content can reach thousands of potential customers without paid promotion. In the UAE, TikTok's user base is growing rapidly across both Arabic and English-speaking audiences. Businesses investing in TikTok marketing now are building a significant competitive advantage in the UAE market.",
          },
        },
      ],
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
