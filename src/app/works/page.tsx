import type { Metadata } from "next";
import WorksPage from "@/components/works/WorksPage";
import JsonLd from "@/components/JsonLd";
import { site } from "@/content/site";
import { brandLogos, socialReels } from "@/content/works";

const title = "Works: Client Results & Content";
const description =
  "Client work from HPF Media: the brands we've worked with, short-form content with published view counts, and our case studies.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${site.url}/works` },
  openGraph: { title: `${title} | HPF Media`, description, url: `${site.url}/works`, type: "website" },
  twitter: { title: `${title} | HPF Media`, description },
};

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${site.url}/works#webpage`,
  name: title,
  description,
  url: `${site.url}/works`,
  isPartOf: { "@id": `${site.url}/#website` },
  about: { "@id": `${site.url}/#organization` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Works", item: `${site.url}/works` },
    ],
  },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: socialReels.length,
    itemListElement: socialReels.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: r.sourceUrl,
      name: `${r.platform} content by HPF Media (${r.views} views)`,
    })),
  },
  mentions: brandLogos.map((b) => ({ "@type": "Organization", name: b.name })),
};

export default function Works() {
  return (
    <>
      <JsonLd data={portfolioSchema} />
      <WorksPage />
    </>
  );
}
