import MagneticButton from "@/components/motion/MagneticButton";
import RevealText from "@/components/motion/RevealText";
import Reveal from "@/components/motion/Reveal";
import { whatsappLink } from "@/content/site";

export default function FinalCTA({
  title = "Start with the truth.",
  body = "Ten honest questions. An instant read on where your marketing is drifting. No call, no obligation. Just your own evidence.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section aria-label="Start your Clarity Check" className="relative overflow-hidden border-t border-line py-20 md:py-32">
      <div className="wrap">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-line bg-ink-2/60 p-10 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl md:p-20">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-[40vmax] w-[70vmax] -translate-x-1/2 -translate-y-2/3 rounded-full bg-[radial-gradient(circle,rgba(255,84,73,0.28),transparent_60%)] blur-2xl"
          />
          <div className="relative">
            <span className="crimson-bar" />
            <RevealText as="h2" by="words" className="t-display mx-auto mt-8 max-w-6xl text-bone">
              {title}
            </RevealText>
            <Reveal delay={0.2} className="mx-auto mt-8 max-w-xl">
              <p className="t-lead">{body}</p>
            </Reveal>
            <Reveal delay={0.35} className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <MagneticButton href="/clarity-check" size="lg">
                Start your free Clarity Check
              </MagneticButton>
              <MagneticButton
                href={whatsappLink("Hi HPF, I'd like to talk about our marketing.")}
                external
                variant="ghost"
                size="lg"
              >
                WhatsApp us
              </MagneticButton>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
