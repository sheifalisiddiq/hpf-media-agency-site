"use client";

import Link from "next/link";
import { useRef } from "react";
import SectionLabel from "@/components/shared/SectionLabel";
import RevealText from "@/components/motion/RevealText";
import { stages } from "@/content/method";
import { gsap, DESKTOP_MOTION, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

/** Pinned horizontal journey through the four stages. Stacks vertically below 1024px. */
export default function MethodTrack() {
  const ref = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(DESKTOP_MOTION, () => {
        const track = trackRef.current!;
        const distance = () => track.scrollWidth - window.innerWidth;
        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: ".mt-pin",
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
            onUpdate: (self) => gsap.set(".mt-rail", { scaleX: self.progress }),
          },
        });

        gsap.utils.toArray<HTMLElement>(".mt-panel").forEach((panel) => {
          gsap.from(panel.querySelectorAll(".mt-in"), {
            y: 60,
            autoAlpha: 0,
            stagger: 0.08,
            duration: 1,
            scrollTrigger: { trigger: panel, containerAnimation: tween, start: "left 75%", once: true },
          });
          gsap.fromTo(
            panel.querySelector(".mt-num"),
            { xPercent: 20 },
            {
              xPercent: -20,
              ease: "none",
              scrollTrigger: { trigger: panel, containerAnimation: tween, start: "left right", end: "right left", scrub: true },
            }
          );
          const connector = panel.querySelector(".mt-connector");
          if (connector)
            gsap.from(connector, {
              scaleX: 0,
              transformOrigin: "left",
              ease: "none",
              scrollTrigger: { trigger: panel, containerAnimation: tween, start: "left 40%", end: "right 60%", scrub: true },
            });
        });
      });
      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <section ref={ref} aria-label="The HPF method" className="relative border-t border-line">
      <div className="mt-pin relative overflow-hidden lg:h-[100svh]">
        <div className="wrap flex items-end justify-between gap-8 pb-10 pt-24 lg:absolute lg:inset-x-0 lg:top-0 lg:z-10 lg:pb-0 lg:pt-28">
          <div>
            <SectionLabel index="02">The method</SectionLabel>
            <RevealText as="h2" className="t-h2 mt-5 max-w-3xl text-bone">
              Four steps. Each one earns the next.
            </RevealText>
          </div>
          <Link href="/method" className="t-label hidden shrink-0 border-b border-crimson pb-1 text-bone hover:text-crimson-bright md:inline-block">
            Full method →
          </Link>
        </div>

        <div className="absolute inset-x-0 bottom-10 z-10 hidden lg:block">
          <div className="wrap">
            <div className="h-px w-full bg-line">
              <div className="mt-rail h-px w-full origin-left scale-x-0 bg-crimson" />
            </div>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex flex-col gap-4 px-[var(--gutter)] pb-24 lg:h-full lg:w-max lg:flex-row lg:items-end lg:gap-0 lg:px-0 lg:pb-[12vh] lg:pl-[var(--gutter)] lg:pt-0"
        >
          {stages.map((stage, i) => (
            <article
              key={stage.id}
              className={cn(
                "mt-panel relative flex flex-col justify-between overflow-hidden border border-line p-7 md:p-10 lg:h-[58vh] lg:w-[min(78vw,1100px)] lg:border-y-0 lg:border-l lg:border-r-0 lg:px-14 lg:py-4",
                i === 0 ? "bg-crimson/[0.07]" : "bg-transparent"
              )}
            >
              <span
                aria-hidden
                className="mt-num pointer-events-none absolute -right-6 -top-10 select-none font-display text-[13rem] leading-none text-bone/[0.05] lg:-top-16 lg:text-[24rem]"
              >
                {stage.index}
              </span>

              <div className="relative">
                <div className="mt-in mb-6 flex items-center gap-4">
                  <span className="t-label text-crimson-bright">Stage {stage.index}</span>
                  <span className="h-px flex-1 bg-line" />
                  <span className="t-label text-mute">{stage.duration}</span>
                </div>
                <h3 className="mt-in font-display text-6xl leading-[0.9] tracking-tight text-bone md:text-8xl">{stage.name}</h3>
                <p className="mt-in mt-5 max-w-xl font-display text-2xl italic leading-snug text-bone/75 md:text-3xl">
                  {stage.tagline}
                </p>
              </div>

              <div className="relative mt-10 grid gap-6 md:grid-cols-3">
                <div className="mt-in">
                  <p className="t-label mb-2 text-mute">Investment</p>
                  <p className={cn("text-xl", stage.price === "Free" ? "text-crimson-bright" : "text-bone")}>{stage.price}</p>
                </div>
                <div className="mt-in">
                  <p className="t-label mb-2 text-mute">You receive</p>
                  <p className="text-xl text-bone">{stage.deliverableShort}</p>
                </div>
                <div className="mt-in">
                  <p className="t-label mb-2 text-mute">Becomes</p>
                  <p className="text-base leading-snug text-bone/75">{stage.output}</p>
                </div>
              </div>

              <div className="relative mt-8 flex items-center gap-4">
                <Link
                  href={stage.id === "clarity-check" ? "/clarity-check" : `/method#${stage.id}`}
                  className="mt-in t-label border-b border-bone/30 pb-1 text-bone transition-colors hover:border-crimson hover:text-crimson-bright"
                >
                  {stage.id === "clarity-check" ? "Take it now" : `Inside ${stage.name}`} →
                </Link>
                {i < stages.length - 1 && (
                  <span className="hidden flex-1 items-center gap-3 lg:flex" aria-hidden>
                    <span className="mt-connector h-px flex-1 bg-crimson" />
                    <span className="t-label text-mute">Output → input</span>
                  </span>
                )}
              </div>
            </article>
          ))}
          <div className="hidden w-[var(--gutter)] shrink-0 lg:block" aria-hidden />
        </div>
      </div>
    </section>
  );
}
