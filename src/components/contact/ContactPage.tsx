import Link from "next/link";
import RevealText from "@/components/motion/RevealText";
import Reveal from "@/components/motion/Reveal";
import ParallaxLayer from "@/components/motion/ParallaxLayer";
import SectionLabel from "@/components/shared/SectionLabel";
import { site } from "@/content/site";
import ContactForm from "./ContactForm";

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "WhatsApp", value: site.phone, href: site.whatsapp, external: true },
  { label: "Instagram", value: site.instagramHandle, href: site.instagram, external: true },
  { label: "Studio", value: site.location },
];

export default function ContactPage() {
  return (
    <section aria-label="Contact HPF Media" className="relative overflow-hidden pb-28 pt-36 md:pt-48">
      <ParallaxLayer y={-30} className="pointer-events-none absolute -right-[6vw] top-20 hidden md:block">
        <span aria-hidden className="select-none font-display text-[32vw] leading-none text-bone/[0.035]">
          HPF
        </span>
      </ParallaxLayer>

      <div className="wrap relative grid gap-20 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SectionLabel>Contact</SectionLabel>
          <RevealText as="h1" trigger="load" delay={0.2} className="t-display mt-8 text-bone">
            Let&apos;s start with the truth.
          </RevealText>
          <Reveal delay={0.5} className="mt-10 max-w-md">
            <p className="t-lead">
              Tell us what&apos;s happening with your marketing. We&apos;ll tell you honestly whether we can help, and what
              the right first step is.
            </p>
          </Reveal>

          <Reveal stagger={0.08} as="dl" className="mt-14 border-t border-line">
            {channels.map((c) => (
              <div key={c.label} className="flex items-baseline justify-between gap-6 border-b border-line py-5">
                <dt className="t-label text-mute">{c.label}</dt>
                <dd className="text-right text-lg text-bone">
                  {c.href ? (
                    <a
                      href={c.href}
                      {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="transition-colors hover:text-crimson-bright"
                    >
                      {c.value}
                    </a>
                  ) : (
                    c.value
                  )}
                </dd>
              </div>
            ))}
          </Reveal>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal delay={0.3}>
            <Link
              href="/clarity-check"
              className="group mb-14 flex items-center justify-between gap-6 rounded-[1.5rem] border border-crimson/40 bg-crimson/[0.08] p-6 backdrop-blur-xl transition-colors hover:bg-crimson/20 md:p-8"
            >
              <div>
                <p className="t-label mb-2 text-crimson-bright">Not ready to talk yet?</p>
                <p className="font-display text-3xl text-bone">Take the free Clarity Check.</p>
                <p className="mt-2 text-sm text-bone/65">10 questions, 4 minutes, an instant gap score.</p>
              </div>
              <span className="text-2xl text-bone transition-transform group-hover:translate-x-2" aria-hidden>
                →
              </span>
            </Link>
          </Reveal>
          <Reveal delay={0.45}>
            <p className="t-label mb-2 text-mute">Or write to us</p>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
