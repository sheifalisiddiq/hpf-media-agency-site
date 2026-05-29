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
        {
          "@type": "Question",
          name: "How often should UAE businesses post on Instagram and TikTok?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For meaningful organic growth on Instagram, we recommend 4 to 6 Reels per week plus daily Stories. On TikTok, a minimum of 5 to 7 posts per week is needed to consistently reach new audiences. The key is quality combined with consistency — HPF Media builds content systems that make this sustainable for UAE business owners.",
          },
        },
        {
          "@type": "Question",
          name: "What industries benefit most from short-form content in UAE?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Short-form video content drives results across virtually every industry in the UAE. The highest-performing sectors include real estate, hospitality, food and beverage, retail, professional services, fitness, beauty, and e-commerce. Any UAE business with a defined target audience can use short-form content to build authority and generate inbound leads.",
          },
        },
        {
          "@type": "Question",
          name: "How long does organic social media growth take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most HPF Media clients start seeing meaningful improvements in reach and engagement within the first 30 to 60 days. Significant follower growth and consistent inbound leads typically develop over 60 to 90 days of strategic, high-quality content publishing. Organic social media growth is a compounding strategy — the longer you invest in it, the stronger the returns become.",
          },
        },
        {
          "@type": "Question",
          name: "Do you create content in both Arabic and English?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. HPF Media understands the UAE's bilingual content environment. We create strategies that work across both Arabic and English-speaking audiences depending on your target market. Dubai and Abu Dhabi businesses often need content that resonates with the UAE's multicultural consumer base, and our content strategies are built to reflect that reality.",
          },
        },
        {
          "@type": "Question",
          name: "Can HPF Media help if I already have social media accounts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Many clients come to us with existing Instagram or TikTok accounts that are not growing or performing as expected. We start with a content audit, identify what is working and what is not, and build a new strategic direction. Whether you are starting from zero or have an established presence, HPF Media builds a content system that delivers results.",
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
