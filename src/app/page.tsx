import type { Metadata } from "next";
import HomeExperience from "@/components/home/HomeExperience";
import JsonLd from "@/components/JsonLd";
import { site } from "@/content/site";

const title = "HPF Media | Strategy-First Marketing Agency in Dubai, UAE";
const description =
  "Marketing without compromise. HPF Media diagnoses what's actually broken in your marketing, builds your brand and campaign system, then runs content, paid media, SEO and social against agreed KPIs. Start with a free Clarity Check.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: site.url },
  openGraph: { title, description, url: site.url, type: "website" },
  twitter: { title, description },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${site.url}/#webpage`,
  url: site.url,
  name: title,
  description,
  isPartOf: { "@id": `${site.url}/#website` },
  about: { "@id": `${site.url}/#organization` },
  inLanguage: "en-AE",
};

export default function Home() {
  return (
    <>
      <JsonLd data={homeSchema} />
      <HomeExperience />
    </>
  );
}
