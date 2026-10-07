"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface FaqItem {
  q: string;
  a: string;
}

export default function ServicesFaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-t border-line">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        const panelId = `faq-answer-${i}`;
        const btnId = `faq-btn-${i}`;
        return (
          <div key={faq.q} className="border-b border-line">
            <h3 className="m-0">
              <button
                id={btnId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="group flex w-full items-center justify-between gap-6 py-6 text-left md:py-8"
              >
                <span className="flex items-baseline gap-5">
                  <span className="t-label text-mute">{String(i + 1).padStart(2, "0")}</span>
                  <span
                    className={cn(
                      "font-display text-2xl leading-snug transition-colors duration-300 md:text-3xl",
                      isOpen ? "text-bone" : "text-bone/70 group-hover:text-bone"
                    )}
                  >
                    {faq.q}
                  </span>
                </span>
                <span
                  aria-hidden
                  className={cn(
                    "relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-300",
                    isOpen ? "border-crimson-bright bg-crimson-bright" : "border-line"
                  )}
                >
                  <span className={cn("absolute h-px w-3.5", isOpen ? "bg-black" : "bg-bone")} />
                  <span
                    className={cn(
                      "absolute h-3.5 w-px bg-bone transition-transform duration-500",
                      isOpen ? "scale-y-0" : "scale-y-100"
                    )}
                  />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl pb-8 pl-10 text-lg leading-relaxed text-bone/70 md:pl-12">{faq.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
