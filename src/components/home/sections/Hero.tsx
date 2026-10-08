"use client";

import { useRef } from "react";
import MagneticButton from "@/components/motion/MagneticButton";
import Marquee from "@/components/motion/Marquee";
import { introDelay } from "@/lib/intro";
import Link from "next/link";
import { valueNames } from "@/content/site";
import { stages } from "@/content/method";
import { gsap, SplitText, MOTION_OK, useGSAP } from "@/lib/gsap";

const lines = ["Marketing", "without", "compromise."];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const delay = introDelay();
        const words = gsap.utils.toArray<HTMLElement>(".hero-line-inner");
        const intro = gsap.timeline({ delay });
        intro
          .from(".hero-bar", { scaleX: 0, transformOrigin: "left", duration: 0.9, ease: "expo.inOut" })
          .from(words, { yPercent: 115, rotate: 3, duration: 1.4, stagger: 0.12, ease: "expo.out" }, "-=0.4")
          .from(".hero-fade", { y: 24, autoAlpha: 0, duration: 1, stagger: 0.1 }, "-=0.9");

        const sub = SplitText.create(".hero-sub", { type: "lines", mask: "lines", autoSplit: true });
        intro.from(sub.lines, { yPercent: 100, duration: 1, stagger: 0.08 }, "<");

        // Scroll: the lines drift apart at different speeds, the bar becomes the Thread.
        const scrollTl = gsap.timeline({
          scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: 0.6 },
        });
        scrollTl
          .to(".hero-line-0", { xPercent: -18, ease: "none" }, 0)
          .to(".hero-line-1", { xPercent: 22, ease: "none" }, 0)
          .to(".hero-line-2", { xPercent: -8, ease: "none" }, 0)
          .to(".hero-copy", { yPercent: -40, autoAlpha: 0, ease: "none" }, 0)
          .to(".hero-index", { yPercent: -25, autoAlpha: 0, ease: "none" }, 0);

        return () => sub.revert();
      });
      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <section
      ref={ref}
      aria-label="Introduction"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-28 md:pt-32"
    >
      {/* soft crimson bloom */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[20vw] top-[10vh] h-[70vmax] w-[70vmax] rounded-full bg-[radial-gradient(circle,rgba(255,84,73,0.16),transparent_62%)]"
      />

      <div className="wrap relative">
        <div className="hero-fade mb-10 flex items-center justify-between gap-6">
          <p className="t-label text-mute">Strategy-first marketing · Dubai, UAE</p>
          <p className="t-label hidden text-mute md:block">Est. on five values</p>
        </div>

        <span className="hero-bar crimson-bar mb-8 block md:mb-10" />

        <h1 className="t-display text-bone" aria-label="Marketing without compromise.">
          {lines.map((line, i) => (
            <span key={line} aria-hidden className={`hero-line-${i} block overflow-hidden pb-[0.06em]`}>
              <span className={`hero-line-inner inline-block ${i === 1 ? "text-bone/60 md:pl-[8vw]" : ""} ${i === 2 ? "md:pl-[4vw]" : ""}`}>
                {i === 2 ? (
                  <>
                    compromise<span className="text-crimson">.</span>
                  </>
                ) : (
                  line
                )}
              </span>
            </span>
          ))}
        </h1>

        <ol className="hero-index absolute right-[var(--gutter)] top-[9.5rem] hidden w-[22rem] xl:block" aria-label="The four stages">
          {stages.map((s) => (
            <li key={s.id} className="hero-fade">
              <Link
                href={s.id === "clarity-check" ? "/clarity-check" : `/method#${s.id}`}
                className="group flex items-baseline justify-between gap-6 border-b border-line py-4 transition-colors hover:border-crimson"
              >
                <span className="flex items-baseline gap-4">
                  <span className="t-label text-crimson-bright">{s.index}</span>
                  <span className="font-display text-3xl text-bone transition-transform duration-500 group-hover:translate-x-2">
                    {s.name}
                  </span>
                </span>
                <span className="t-label text-mute">{s.price === "Free" ? "Free" : s.id === "launchx" ? "Retainer" : s.duration}</span>
              </Link>
            </li>
          ))}
          <li className="hero-fade pt-4">
            <p className="text-sm leading-relaxed text-mute">
              Each stage&apos;s output is the direct input for the next. You&apos;re only ever offered the next step.
            </p>
          </li>
        </ol>

        <div className="hero-copy mt-10 grid gap-10 md:mt-14 md:grid-cols-12 md:items-end">
          <p className="hero-sub t-lead max-w-md md:col-span-5 md:col-start-1">
            Find out what&apos;s actually broken before spending a dirham fixing the wrong thing. Then build the system
            that fixes it, and run it against numbers we agree together.
          </p>
          <div className="hero-fade flex flex-col gap-3 sm:flex-row md:col-span-7 md:justify-end">
            <MagneticButton href="/clarity-check" size="lg">
              Start your free Clarity Check
            </MagneticButton>
            <MagneticButton href="/method" variant="ghost" size="lg">
              See the method
            </MagneticButton>
          </div>
        </div>
      </div>

      <div className="hero-fade relative mt-16 border-y border-line py-5">
        <Marquee duration={30} trackClassName="gap-12 pr-12" label="HPF values">
          {[...valueNames, ...valueNames].map((v, i) => (
            <span key={i} className="flex items-center gap-12 font-display text-3xl text-bone/70 md:text-4xl">
              {v}
              <span className="h-1.5 w-1.5 rounded-full bg-crimson" aria-hidden />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
