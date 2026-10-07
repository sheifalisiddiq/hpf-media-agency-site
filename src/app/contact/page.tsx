import type { Metadata } from "next";
import ContactPage from "@/components/contact/ContactPage";
import JsonLd from "@/components/JsonLd";
import { site } from "@/content/site";

const title = "Contact HPF Media";
const description =
  "Talk to HPF Media, a strategy-first marketing agency in Dubai. Tell us what's happening with your marketing, or start with the free Clarity Check.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${site.url}/contact` },
  openGraph: { title, description, url: `${site.url}/contact`, type: "website" },
  twitter: { title, description },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${site.url}/contact#webpage`,
  name: title,
  description,
  url: `${site.url}/contact`,
  isPartOf: { "@id": `${site.url}/#website` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${site.url}/contact` },
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
