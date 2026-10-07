export type Phase = {
  title: string;
  weeks: string;
  /** Start and end on the stage's week axis, used to draw the timeline bar. */
  span: [number, number];
  steps: string[];
};

export type Stage = {
  id: "clarity-check" | "identifier" | "brandarch" | "launchx";
  index: string;
  name: string;
  tagline: string;
  summary: string;
  price: string;
  duration: string;
  deliverable: string;
  deliverableShort: string;
  /** Total weeks drawn on the phase timeline. */
  axisWeeks?: number;
  axisLabel?: string;
  phases?: Phase[];
  handoff?: string;
  output: string;
};

export const stages: Stage[] = [
  {
    id: "clarity-check",
    index: "00",
    name: "Clarity Check",
    tagline: "See your own marketing gaps, on your own evidence.",
    summary:
      "A short diagnostic questionnaire. You answer honestly, and you leave with a clear first read on where your marketing is drifting across positioning, messaging, market understanding, channels and measurement.",
    price: "Free",
    duration: "About 4 minutes",
    deliverable: "Your gap score and dimension breakdown",
    deliverableShort: "Gap score",
    output: "Your answers show where to look first.",
  },
  {
    id: "identifier",
    index: "01",
    name: "Identifier",
    tagline: "Find out what's actually broken before spending a dirham fixing the wrong thing.",
    summary:
      "Identifier is a full diagnostic of your marketing, inside and out. We look at how the market actually sees you, how your competitors are positioned, and where the disconnect sits between what you think you're saying and what's actually landing. You leave with a clear, evidenced picture of your real marketing gaps, the root causes behind them (not just the symptoms) and a prioritized set of recommendations for what to fix first, second, and third.",
    price: "AED 15,000 – 20,000",
    duration: "2–3 weeks",
    deliverable:
      "The Identifier Report: findings and prioritized recommendations, walked through in a working session",
    deliverableShort: "The Identifier Report",
    axisWeeks: 3,
    axisLabel: "Week",
    phases: [
      {
        title: "External Research",
        weeks: "Week 1",
        span: [0, 1],
        steps: [
          "Competitor analysis: 3–5 direct and indirect competitors mapped across positioning, messaging, channels, pricing and share of voice.",
          "Market overview: industry size, growth trajectory, and the regulatory, cultural and technology trends shaping your category across the GCC.",
          "Brand research: an audit of current market perception, covering digital presence, reviews, customer feedback and stakeholder input.",
        ],
      },
      {
        title: "Gap Diagnosis",
        weeks: "Week 1–2",
        span: [0.5, 2],
        steps: [
          "Internal marketing gaps: process, team structure, tooling, content cadence and decision-making bottlenecks.",
          "External marketing gaps: messaging consistency, channel presence, campaign performance and competitive differentiation.",
          "Positioning issues clarified: where your stated positioning breaks down against what the market actually experiences.",
          "SWOT / PESTEL analysis: internal strengths and weaknesses set against external opportunities, threats and macro factors.",
        ],
      },
      {
        title: "Synthesis & Recommendations",
        weeks: "Week 2–3",
        span: [1.5, 3],
        steps: [
          "Root cause mapping: every gap traced back to its underlying cause, not its symptom.",
          "Prioritized recommendations, sequenced by impact and urgency, not just severity.",
          "The Identifier Report, presented directly to your team.",
        ],
      },
    ],
    handoff:
      "Identifier's positioning conclusions and prioritized recommendations are the direct input for BrandArch. Nothing in BrandArch is developed independently of these findings.",
    output: "Root causes and priorities become the brief for BrandArch.",
  },
  {
    id: "brandarch",
    index: "02",
    name: "BrandArch",
    tagline: "Turn the diagnosis into a system you can actually run campaigns on.",
    summary:
      "BrandArch takes what Identifier uncovered and builds it into an operating system for your brand's communication: your messaging architecture, your campaign frameworks, and a clear plan for what gets said, where, and to whom. Every campaign concept is engineered around measurable objectives, so you know exactly what success looks like before a single piece of content or ad goes live.",
    price: "AED 20,000 – 30,000",
    duration: "3–4 weeks",
    deliverable:
      "The BrandArch Playbook: brand architecture, campaign frameworks with sample content, and OKRs/KPIs",
    deliverableShort: "The BrandArch Playbook",
    axisWeeks: 4,
    axisLabel: "Week",
    phases: [
      {
        title: "Brand Architecture",
        weeks: "Week 1",
        span: [0, 1],
        steps: [
          "Identifier's positioning conclusions translated into a documented messaging architecture: core narrative, messaging pillars, tone and voice.",
          "Internal and external communications separated, so what's said to the market and what's aligned with your team and partners stay consistent.",
          "A clear decision on the type of marketing your business actually needs: brand-building, demand generation, retention, or a hybrid.",
        ],
      },
      {
        title: "Campaign Engineering",
        weeks: "Week 2–3",
        span: [1, 3],
        steps: [
          "The Three-Dimensional Campaign Framework (Audience Segment × Funnel Stage × Channel) applied to engineer a complete campaign matrix rather than isolated ideas.",
          "2–4 campaign frameworks, each with sample content direction and creative references.",
          "OKRs and KPIs assigned to every framework, tied directly to the gaps Identifier diagnosed, not generic industry benchmarks.",
        ],
      },
      {
        title: "Documentation & Handoff",
        weeks: "Week 4",
        span: [3, 4],
        steps: [
          "The BrandArch Playbook: architecture, campaign frameworks, OKRs/KPIs and recommended channel mix.",
          "A walkthrough of the Playbook, aligning on which frameworks move into execution first.",
        ],
      },
    ],
    handoff:
      "Only the campaign frameworks and KPI targets approved in the Playbook become execution briefs. Nothing is executed under LaunchX without a documented framework and target from BrandArch.",
    output: "Approved frameworks and KPI targets become LaunchX execution briefs.",
  },
  {
    id: "launchx",
    index: "03",
    name: "LaunchX",
    tagline: "Where the plan becomes revenue.",
    summary:
      "LaunchX is where everything BrandArch designed gets built and run: content production, media buying, SEO, social management and ongoing optimization, measured against the OKRs and KPIs set in your Playbook. You get monthly execution and a monthly report against the same numbers we agreed on together, not vanity metrics.",
    price: "Custom retainer",
    duration: "Ongoing, scope reviewed quarterly",
    deliverable:
      "Monthly execution across agreed channels, plus monthly reporting against BrandArch's KPIs",
    deliverableShort: "Monthly KPI Report",
    axisWeeks: 4,
    axisLabel: "Week",
    phases: [
      {
        title: "Onboarding",
        weeks: "Week 1",
        span: [0, 1],
        steps: [
          "Tracking, ad accounts and analytics set up against the KPIs defined in BrandArch.",
          "The content and production calendar built against the approved campaign frameworks.",
          "Channel mix and monthly scope confirmed. This is what determines final retainer pricing.",
        ],
      },
      {
        title: "Execution",
        weeks: "Monthly cycles",
        span: [1, 4],
        steps: [
          "Content production in the formats BrandArch specified: video, static, copy or other.",
          "Paid media management across scoped platforms: Meta Ads, Google Ads or others.",
          "SEO, technical and content, as scoped.",
          "Social media management: publishing, community management and engagement.",
          "Campaign launches, sequenced per the BrandArch frameworks.",
        ],
      },
      {
        title: "Optimization & Reporting",
        weeks: "Weekly · Monthly · Quarterly",
        span: [1, 4],
        steps: [
          "Weekly performance checks against KPIs, with mid-cycle optimization: creative refresh, budget reallocation, targeting adjustments.",
          "A monthly report measured against BrandArch's OKRs and KPIs, not generic platform metrics.",
          "A quarterly strategic review: is the current scope still the right scope, or does BrandArch need revisiting?",
        ],
      },
    ],
    handoff:
      "Because scope varies by client, LaunchX pricing is only finalized once BrandArch has defined exactly which channels and volume are required. It is never quoted upfront.",
    output: "Results reported against the numbers we agreed together.",
  },
];

export const paidStages = stages.filter((s) => s.phases);

export const launchxCapabilities = [
  { name: "Content production", detail: "Video, static and copy in the formats your Playbook specifies." },
  { name: "Paid media", detail: "Meta Ads, Google Ads and other scoped platforms." },
  { name: "SEO", detail: "Technical and content SEO, as scoped." },
  { name: "Social management", detail: "Publishing, community management and engagement." },
];

/** Illustrative axes for the BrandArch Three-Dimensional Campaign Framework. */
export const campaignAxes = {
  audience: { label: "Audience Segment", items: ["New customers", "Returning customers", "Decision-makers"] },
  funnel: { label: "Funnel Stage", items: ["Awareness", "Consideration", "Conversion"] },
  channel: { label: "Channel", items: ["Social", "Search", "Paid media"] },
};

/** Symptoms the market sees, and the root causes Identifier traces them back to. */
export const symptoms = [
  {
    symptom: "Inconsistent messaging",
    cause: "No documented brand voice",
  },
  {
    symptom: "Posting every day, reaching no one",
    cause: "No defined audience segment or funnel stage",
  },
  {
    symptom: "Ad spend with nothing to show",
    cause: "Campaigns launched without KPIs set first",
  },
  {
    symptom: "Competitors winning with worse products",
    cause: "Positioning that breaks down in the market",
  },
];
