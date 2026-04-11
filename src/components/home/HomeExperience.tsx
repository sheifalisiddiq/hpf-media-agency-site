import Image from "next/image";
import Icon from "@/components/Icon";
import RevealOnScroll, { RevealItem } from "@/components/RevealOnScroll";

const services = [
  {
    icon: "insights" as const,
    title: "Organic Strategy",
    description:
      "We build the blueprint for unavoidable reach. No generic templates, just high-impact strategy tailored for UAE SMEs.",
    span: "lg:col-span-7",
  },
  {
    icon: "movie_filter" as const,
    title: "Viral Scripting",
    description:
      "Content is won in the first 3 seconds. Our scripts are engineered to hook viewers and force them to take notice.",
    span: "lg:col-span-5",
  },
  {
    icon: "videocam" as const,
    title: "High-Retention Editing",
    description:
      "Retention is the metric that matters. We edit for speed, clarity, and strong watch time so your content keeps performing.",
    span: "lg:col-span-5",
  },
  {
    icon: "send" as const,
    title: "Posting Systems",
    description:
      "Consistency kills competition. We manage your distribution pipeline so your brand stays visible across Instagram and TikTok.",
    span: "lg:col-span-7",
  },
];

const processSteps = [
  {
    num: "01",
    title: "The Audit",
    desc: "We identify exactly where your current content is failing and where you're losing leads.",
  },
  {
    num: "02",
    title: "The Blueprint",
    desc: "A custom 90-day roadmap designed to push your business toward five to ten million organic views.",
  },
  {
    num: "03",
    title: "Velocity Production",
    desc: "High-speed filming and editing cycles that keep your feed fresh, sharp, and high-performing.",
  },
  {
    num: "04",
    title: "Market Dominance",
    desc: "Scaling winning content into a compounding lead generation engine for your brand.",
  },
];

const roadmapItems = [
  {
    label: "Month 01",
    title: "The Reset",
    description:
      "We overhaul your positioning and begin a disciplined posting cycle. The immediate target is your first 500k views and a stronger baseline for engagement.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAeDiP024rVyKNnjcQdLTZRSgJyvweO-N20uRgSZa5dSk5FnbBXerf6NGsplK4Omia94fh-x_JmuqoCS3kl77HO84XIJZWWMHA1f4beNJ-JA33DR-f15Vl9bAXnKdnbqrvdCYXOAfAZl0zt3R-KmdxFe_c6wciHVJWYQougqlHBEGLryyf61w_H8dkyycYWI87d5aGHzOifopkSLL3TPFcmdg97OJ9n1K7aBKDOPsP9iAq5iHZ6K0UcK91VCdZof2PRQKOCGVqTA1c",
  },
  {
    label: "Month 02",
    title: "The Surge",
    description:
      "The algorithm begins recognizing your authority. We double down on high-retention hooks and proven formats with a target of two million plus views.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAm04fis2eDF95mGghyIGwpGqjo_nyk2qRimt0oHCVI8AmrV5pdzwB1IhAvTyA5nuZXM8PLDXgwfC_N_O5aqyafVsRt8hSUnouznGq9J3HHXJ8tIjo6jXWv9_h8Ud5ZE0pRVFzKAkbC-pIvsuZN6npNWz9YOTQuvXyTVyTDFXQeBe1cQUC3KEc9sG1nTJ8d2koC4QmY3e0h2XXoEIHFKHedg0tzLFAaitsBlOfO4cwDFS6DzrDAMK8EiOODgUBS75l7Qxu06kJBywA",
  },
  {
    label: "Month 03",
    title: "Dominance",
    description:
      "You become the go-to brand in your niche. Leads begin flowing more consistently as your content pushes toward the five to ten million view milestone.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCzY8jNlWbaC-J55Y6GHH4Us3sv-GRvWWjJxirCXrgrEVron8j_rgRo-lfXZONFIE1VsHiMenoxpN14cTsEM8e29lkCzlOTgTMoyHg_1SSaHydfWds1pUCuVKx6jqRPCZGzvgrdBgMot2ogNply58rZoYC59SvrH-Jpc2Zo4qrIk3jPSpvIRNq6-6hWwVfjPnInhW8my1B_pMMH_8ufiD0Mt_FLg0k-2uwi3mMEoYBHEo2u1qAM0As7rMWOp2jXzwP8FAHQuqYdg1Q",
  },
];

const executionSteps = [
  { icon: "search" as const, step: "01", label: "Business Review", desc: "Audit and strategy" },
  { icon: "insights" as const, step: "02", label: "Content Plan", desc: "90-day roadmap" },
  { icon: "description" as const, step: "03", label: "Script Writing", desc: "Viral hooks" },
  { icon: "videocam" as const, step: "04", label: "Filming", desc: "Premium production" },
  { icon: "send" as const, step: "05", label: "Publishing", desc: "Distribution" },
];

export default function HomeExperience() {
  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden bg-black px-4 py-20 text-on-surface sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,84,73,0.18),transparent_38%),linear-gradient(180deg,rgba(255,84,73,0.08),transparent_28%),linear-gradient(180deg,#010101_0%,#000_55%,#000_100%)]" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-x-0 top-[18%] h-[32rem] bg-[radial-gradient(circle,rgba(255,84,73,0.24),transparent_62%)] blur-3xl" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center">
          <div className="space-y-10">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.35em] text-white/70 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Growth for UAE Brands
              </div>
              <h1 className="max-w-4xl text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-headline">
                Content That Works.
              </h1>
              <p className="max-w-xl text-base leading-7 text-on-surface-variant md:text-lg">
                We build creator-led short-form content for UAE SMEs that turns low reach into stronger visibility, better engagement, and real inbound leads.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="bg-primary px-8 py-4 text-sm font-black uppercase tracking-[0.24em] text-black transition-transform duration-300 hover:scale-[1.03]">
                Book Strategy Call
              </button>
              <button className="border border-white/15 px-8 py-4 text-sm font-black uppercase tracking-[0.24em] text-white transition-colors duration-300 hover:bg-white/5">
                See Our Work
              </button>
            </div>
          </div>

          <div className="relative ml-auto hidden w-full max-w-md lg:block">
            <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(255,84,73,0.24),transparent_60%)] blur-3xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_40px_140px_rgba(0,0,0,0.55)]">
              <Image
                alt="Architectural night scene"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeDiP024rVyKNnjcQdLTZRSgJyvweO-N20uRgSZa5dSk5FnbBXerf6NGsplK4Omia94fh-x_JmuqoCS3kl77HO84XIJZWWMHA1f4beNJ-JA33DR-f15Vl9bAXnKdnbqrvdCYXOAfAZl0zt3R-KmdxFe_c6wciHVJWYQougqlHBEGLryyf61w_H8dkyycYWI87d5aGHzOifopkSLL3TPFcmdg97OJ9n1K7aBKDOPsP9iAq5iHZ6K0UcK91VCdZof2PRQKOCGVqTA1c"
                width={896}
                height={1120}
                priority
                quality={72}
                sizes="(min-width: 1280px) 28rem, (min-width: 1024px) 24rem, 0px"
                className="h-full w-full object-cover brightness-[0.55] saturate-[0.85]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-primary">
                  The HPF Promise
                </p>
                <p className="mt-3 max-w-xs text-sm leading-6 text-white/70">
                  We build content systems for UAE business owners who want measurable growth, not empty brand fluff.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-on-surface md:px-10 lg:px-14">
        <RevealOnScroll className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl space-y-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary">
              The Problem
            </p>
            <h2 className="text-4xl font-black uppercase tracking-[-0.06em] text-white md:text-6xl font-headline">
              Visibility is
              <br />
              Authority.
            </h2>
            <p className="max-w-2xl text-lg text-on-surface-variant">
              Most UAE businesses are struggling to stay relevant. Low reach, weak engagement, and inconsistent leads. We help you take attention back.
            </p>
          </div>

          <RevealOnScroll isContainer staggerChildren={0.1} className="grid gap-6 lg:grid-cols-12">
            {services.map((service) => (
              <RevealItem
                key={service.title}
                className={`${service.span} group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8 md:p-10`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,84,73,0.14),transparent_48%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative space-y-8">
                  <Icon name={service.icon} className="h-10 w-10 text-primary" />
                  <div className="space-y-4">
                    <h3 className="text-3xl font-black uppercase tracking-[-0.05em] text-white font-headline">
                      {service.title}
                    </h3>
                    <p className="max-w-lg text-base leading-7 text-on-surface-variant">
                      {service.description}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealOnScroll>

          {/* New Execution Process Section */}
          <div className="mt-24 max-w-7xl mx-auto">
            <RevealOnScroll className="mb-12 border-l border-primary pl-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary mb-2">The Execution</p>
              <h3 className="text-3xl font-black uppercase tracking-[-0.05em] text-white font-headline">The Process</h3>
            </RevealOnScroll>
            
            <RevealOnScroll isContainer staggerChildren={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {executionSteps.map((step) => (
                <RevealItem key={step.step} className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-colors hover:border-primary/20 hover:bg-white/[0.04]">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                    <Icon name={step.icon} className="h-5 w-5" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary/60">Step {step.step}</p>
                    <h4 className="text-xl font-black uppercase tracking-tight text-white font-headline">{step.label}</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{step.desc}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealOnScroll>
          </div>
        </RevealOnScroll>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#000000_0%,#0d0d0d_50%,#000000_100%)] px-6 py-24 text-on-surface md:px-10 lg:px-14">
        <div className="pointer-events-none absolute left-[-10%] top-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="pointer-events-none absolute right-[-10%] top-3/4 h-[400px] w-[400px] rounded-full bg-primary-container/10 blur-[100px]" />

        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)] lg:self-start">
            <RevealOnScroll className="flex h-full flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-[0_30px_120px_rgba(0,0,0,0.4)] backdrop-blur-xl">
              <div className="space-y-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary">
                  The Process
                </p>
                <h2 className="max-w-xl text-4xl font-black uppercase tracking-[-0.05em] text-white md:text-6xl font-headline">
                  How We Grow
                </h2>
                <p className="max-w-md text-base leading-7 text-on-surface-variant md:text-lg">
                  The algorithm does not reward hard work alone. It rewards clarity, consistency, and content people actually want to watch.
                </p>
              </div>
              <div className="space-y-4">
                <div className="h-px w-full bg-white/10" />
                <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.35em] text-white/50">
                  <span>Phase Progress</span>
                  <span>{roadmapItems.length} Chapters</span>
                </div>
                <div className="flex gap-2">
                  {roadmapItems.map((item) => (
                    <span key={item.label} className="h-1.5 flex-1 rounded-full bg-gradient-to-r from-primary to-primary-container" />
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll isContainer staggerChildren={0.2} className="space-y-20 pb-10 pt-2">
            {roadmapItems.map((item) => (
              <RevealItem
                key={item.label}
                className="group relative flex min-h-[80vh] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-xl backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.04] hover:border-white/20"
              >
                <div className="relative aspect-video w-full overflow-hidden border-b border-white/5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    quality={68}
                    sizes="(min-width: 1024px) 48rem, 100vw"
                    className="object-cover brightness-[0.7] saturate-[0.85] transition-transform duration-700 group-hover:scale-105 group-hover:brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                </div>

                <div className="flex flex-1 flex-col justify-end p-8 md:p-12">
                  <div className="space-y-6">
                    <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-primary">
                      {item.label}
                    </p>
                    <h3 className="max-w-2xl text-3xl font-black uppercase tracking-[-0.05em] text-white md:text-5xl font-headline">
                      {item.title}
                    </h3>
                    <p className="max-w-2xl text-lg leading-8 text-on-surface-variant">
                      {item.description}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-on-surface md:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll className="mb-16 space-y-6 text-center lg:text-left">
            <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary">
              The Leadership
            </p>
            <h2 className="text-4xl font-black uppercase tracking-[-0.06em] text-white md:text-6xl font-headline">
              Founding Partners
            </h2>
          </RevealOnScroll>

          <RevealOnScroll isContainer staggerChildren={0.2} className="grid gap-12 md:grid-cols-2 lg:items-start">
            {/* Bilal Sidheeq */}
            <RevealItem className="space-y-8">
              <div className="relative h-[32rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
                <Image
                  alt="Bilal Sidheeq"
                  fill
                  quality={68}
                  sizes="(min-width: 1024px) 42rem, 100vw"
                  className="object-cover brightness-[0.55]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjppca15YrX1JXc96EFGOee8aatZ7_ElpID1yfGOtOtBfFsp489B0pQEfPN9dwxcriFnOGHawJcIR-YVKzEfj_3ed2fxCF2yzoobv5PX1WxrBCXGv6-eZdMnhiTt6ybyQOnLrB4R6gwkvjnqtALwZPAEbKJxSLl6XgUAcTKWA_SbLYDjbhKzlXDVG6hewmOAdiU5PCGH_otIMORNwoRBMFxIgchyKyV_gtp383ltQmTKNOVwKAtxHqnddKC3eb9ig8yRkf9kgxX0Q"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-black uppercase tracking-[-0.05em] text-white font-headline">Bilal Sidheeq</h3>
                <p className="max-w-md text-base leading-7 text-on-surface-variant">
                  Bilal leads HPF Media with a practical approach to content growth, turning strategy, scripting, production, and editing into one clear engine for business results.
                </p>
              </div>
            </RevealItem>

            {/* Empty Second Founder */}
            <RevealItem className="space-y-8">
              <div className="relative h-[32rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] flex items-center justify-center bg-neutral-950">
                <div className="text-white/5 text-8xl font-black font-headline select-none">HPF</div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-black uppercase tracking-[-0.05em] text-white font-headline">&nbsp;</h3>
                <p className="max-w-md text-base leading-7 text-on-surface-variant">
                  Our co-founding partner brings expertise in operational scaling and brand positioning, ensuring that every piece of content supports the long-term growth objectives of UAE businesses.
                </p>
              </div>
            </RevealItem>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-on-surface md:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll className="mb-14 max-w-2xl space-y-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary">
              The Philosophy
            </p>
            <h2 className="text-4xl font-black uppercase tracking-[-0.06em] text-white md:text-6xl font-headline">
              No Generic
              <br />
              Marketing.
            </h2>
          </RevealOnScroll>

          <RevealOnScroll isContainer staggerChildren={0.1} className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step) => (
              <RevealItem
                key={step.num}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-8"
              >
                <div className="space-y-6">
                  <p className="text-sm font-black tracking-[0.25em] text-primary">
                    {step.num}
                  </p>
                  <h3 className="text-2xl font-black uppercase tracking-[-0.05em] text-white font-headline">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-7 text-on-surface-variant">
                    {step.desc}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#050505_0%,#0d0504_55%,#180504_100%)] px-6 py-32 text-on-surface md:px-10 lg:px-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,84,73,0.16),transparent_45%)]" />
        <RevealOnScroll className="relative mx-auto max-w-5xl text-center">
          <div className="space-y-8">
            <h2 className="text-5xl font-black uppercase tracking-[-0.08em] text-white md:text-7xl font-headline">
              Let's Work
              <br />
              Together.
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-white/70">
              Stop posting content that no one sees. Join UAE brands scaling their impact through HPF Media and turn visibility into real business growth.
            </p>
            <button className="bg-white px-10 py-5 text-sm font-black uppercase tracking-[0.24em] text-black transition-transform duration-300 hover:scale-[1.03]">
              Book Your Strategy Call
            </button>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
