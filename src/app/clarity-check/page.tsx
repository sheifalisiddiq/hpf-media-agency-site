import type { Metadata } from "next";
import ClarityCheck from "@/components/clarity/ClarityCheck";
import JsonLd from "@/components/JsonLd";
import { site } from "@/content/site";

const title = "Free Clarity Check: Marketing Gap Diagnostic";
const description =
  "Ten honest questions, four minutes, an instant gap score. HPF Media's free Clarity Check shows where your marketing is drifting across positioning, messaging, market understanding, channels and KPIs.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${site.url}/clarity-check` },
  openGraph: { title: `${title} | HPF Media`, description, url: `${site.url}/clarity-check`, type: "website" },
  twitter: { title: `${title} | HPF Media`, description },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: title,
  description,
  url: `${site.url}/clarity-check`,
  isPartOf: { "@id": `${site.url}/#website` },
  mainEntity: {
    "@type": "Service",
    name: "Clarity Check",
    provider: { "@id": `${site.url}/#organization` },
    offers: { "@type": "Offer", price: 0, priceCurrency: "AED" },
  },
};

export default function ClarityCheckPage() {
  return (
    <>
      <JsonLd data={schema} />
      <ClarityCheck />
    </>
  );
}
