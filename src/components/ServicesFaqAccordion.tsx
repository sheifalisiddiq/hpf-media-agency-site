"use client";

import { useState } from "react";
import Icon from "@/components/Icon";

interface FaqItem {
  q: string;
  a: string;
}

export default function ServicesFaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        const panelId = `faq-answer-${i}`;
        const btnId = `faq-btn-${i}`;
        return (
          <div
            key={i}
            className="rounded-lg border border-white/5 bg-neutral-950 hover:border-primary/30 transition-colors duration-300"
          >
            <h3 className="m-0">
              <button
                id={btnId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 p-6 text-left"
              >
                <span
                  className={`text-lg font-bold transition-colors duration-200 ${
                    isOpen ? "text-primary" : "text-on-surface"
                  }`}
                >
                  {faq.q}
                </span>
                <Icon
                  name="expand_more"
                  className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
              style={{ maxHeight: isOpen ? "600px" : "0px" }}
            >
              <p className="px-6 pb-6 text-on-surface-variant font-light leading-relaxed text-base">
                {faq.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
