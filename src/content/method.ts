export type Phase = {
  title: string;
  weeks: string;
  /** Start and end on the stage's week axis, used to draw the timeline bar. */
  span: [number, number];
  description: string;
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
    tagline: "See where your marketing needs improvement.",
    summary:
      "A short diagnostic questionnaire. You answer honestly, and you leave with a clear first read on where your marketing is drifting across positioning, messaging, market understanding, channels and measurement.",
    price: "Free",
    duration: "About 4 minutes",
    deliverable: "Your gap score and dimension breakdown",
    deliverableShort: "Marketing Gap Score",
    output: "You know what needs attention first.",
  },
  {
    id: "identifier",
    index: "01",
    name: "Identifier",
    tagline: "Find out what's actually broken before spending a dirham fixing the wrong thing.",
    summary: "A full diagnostic of your marketing, so you know exactly what's broken and what to fix first.",
    price: "AED 15,000 – 20,000",
    duration: "2–3 weeks",
    deliverable: "Your Marketing Diagnosis + prioritized action plan.",
    deliverableShort: "Your Marketing Diagnosis",
    axisWeeks: 3,
    axisLabel: "Week",
    phases: [
      {
        title: "External Research",
        weeks: "Week 1",
        span: [0, 1],
        description: "We study your market, competitors, and how your brand is currently positioned.",
      },
      {
        title: "Gap Diagnosis",
        weeks: "Week 1–2",
        span: [0.5, 2],
        description: "We identify what's holding your marketing back and where the biggest opportunities are.",
      },
      {
        title: "Recommendations",
        weeks: "Week 2–3",
        span: [1.5, 3],
        description: "We show you what to fix first, what to improve next, and why.",
      },
    ],
    handoff: "These findings become the brief for BrandArch.",
    output: "You know exactly what to fix and prioritize.",
  },
  {
    id: "brandarch",
    index: "02",
    name: "BrandArch",
    tagline: "Turn the diagnosis into a system you can actually run campaigns on.",
    summary: "We turn your diagnosis into a clear marketing message and campaign plan.",
    price: "AED 20,000 – 30,000",
    duration: "3–4 weeks",
    deliverable: "Your Marketing Playbook, ready to launch.",
    deliverableShort: "Your Marketing Playbook",
    axisWeeks: 4,
    axisLabel: "Week",
    phases: [
      {
        title: "Brand Architecture",
        weeks: "Week 1",
        span: [0, 1],
        description: "We define what your brand should say, how it should sound, and who it needs to reach.",
      },
      {
        title: "Campaign Engineering",
        weeks: "Week 2–3",
        span: [1, 3],
        description: "We plan what campaigns to run, who to target, and where to reach them.",
      },
      {
        title: "Documentation & Handoff",
        weeks: "Week 4",
        span: [3, 4],
        description: "You receive a clear marketing playbook your team can use.",
      },
    ],
    handoff: "Your approved Playbook becomes the execution brief for LaunchX.",
    output: "You have a clear strategy ready to launch.",
  },
  {
    id: "launchx",
    index: "03",
    name: "LaunchX",
    tagline: "Where the plan becomes revenue.",
    summary: "We execute your marketing, track the results, and improve it every month.",
    price: "Custom retainer",
    duration: "Ongoing, scope reviewed quarterly",
    deliverable: "Monthly Performance Report, so you always know what's working.",
    deliverableShort: "Monthly Performance Report",
    axisWeeks: 4,
    axisLabel: "Week",
    phases: [
      {
        title: "Onboarding",
        weeks: "Week 1",
        span: [0, 1],
        description: "We set up everything needed to start executing the plan.",
      },
      {
        title: "Execution",
        weeks: "Monthly cycles",
        span: [1, 4],
        description: "We create content, run campaigns, and manage your marketing.",
      },
      {
        title: "Optimization & Reporting",
        weeks: "Weekly · Monthly · Quarterly",
        span: [1, 4],
        description: "We track results, improve what isn't working, and show you what's performing.",
      },
    ],
    handoff: "Pricing depends on scope, finalized once BrandArch defines your channels and volume.",
    output: "You see what's working and what we improve next.",
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
