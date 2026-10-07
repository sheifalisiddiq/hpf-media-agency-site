export type DimensionId = "positioning" | "messaging" | "market" | "channels" | "measurement";

export type Dimension = {
  id: DimensionId;
  name: string;
  /** The root cause this dimension most often points to when the gap is high. */
  rootCause: string;
  /** What Identifier does about it. */
  remedy: string;
};

export type ClarityQuestion = {
  id: string;
  dimension: DimensionId;
  prompt: string;
  /** `gap` runs 0 (healthy) to 3 (largest gap). */
  options: { label: string; gap: 0 | 1 | 2 | 3 }[];
};

export const dimensions: Dimension[] = [
  {
    id: "positioning",
    name: "Positioning clarity",
    rootCause: "Your stated positioning and what the market actually experiences have drifted apart.",
    remedy: "Identifier maps where your positioning breaks down against 3–5 competitors and real market perception.",
  },
  {
    id: "messaging",
    name: "Messaging consistency",
    rootCause: "There is no documented brand voice or messaging architecture for everyone to work from.",
    remedy: "Identifier audits every channel for consistency and traces each inconsistency to its source.",
  },
  {
    id: "market",
    name: "Market & competitor understanding",
    rootCause: "Decisions are being made on assumptions about the market rather than evidence.",
    remedy: "Identifier delivers competitor analysis, a GCC market overview and SWOT / PESTEL synthesis.",
  },
  {
    id: "channels",
    name: "Channels & content cadence",
    rootCause: "Content is being produced without a defined audience segment, funnel stage or process behind it.",
    remedy: "Identifier reviews your process, team structure, tooling and cadence to find the bottlenecks.",
  },
  {
    id: "measurement",
    name: "Measurement & KPIs",
    rootCause: "Campaigns go live without objectives set first, so success can't be measured honestly.",
    remedy: "Identifier sets the baseline so BrandArch can assign OKRs and KPIs to every campaign.",
  },
];

export const questions: ClarityQuestion[] = [
  {
    id: "q1",
    dimension: "positioning",
    prompt: "If you asked five customers why they chose you over a competitor, how similar would their answers be?",
    options: [
      { label: "Almost identical, and it's what we'd want them to say", gap: 0 },
      { label: "Similar, but not quite how we describe ourselves", gap: 1 },
      { label: "All over the place", gap: 2 },
      { label: "Honestly, I've never asked", gap: 3 },
    ],
  },
  {
    id: "q2",
    dimension: "positioning",
    prompt: "Can you state, in one sentence, what makes you different, and back it with evidence?",
    options: [
      { label: "Yes, and the market agrees", gap: 0 },
      { label: "Yes, but I'm not sure it lands", gap: 1 },
      { label: "We have a few versions of it", gap: 2 },
      { label: "Not really", gap: 3 },
    ],
  },
  {
    id: "q3",
    dimension: "messaging",
    prompt: "Do you have a documented brand voice, messaging pillars and core narrative?",
    options: [
      { label: "Yes, documented and actually used", gap: 0 },
      { label: "Documented, but rarely followed", gap: 1 },
      { label: "It lives in a few people's heads", gap: 2 },
      { label: "No", gap: 3 },
    ],
  },
  {
    id: "q4",
    dimension: "messaging",
    prompt: "Put your website, social profiles and latest ad side by side. Do they sound like the same business?",
    options: [
      { label: "Clearly the same voice and promise", gap: 0 },
      { label: "Mostly, with a few odd ones out", gap: 1 },
      { label: "They feel like different companies", gap: 2 },
      { label: "I'm not sure", gap: 3 },
    ],
  },
  {
    id: "q5",
    dimension: "market",
    prompt: "How well do you know how your top 3–5 competitors position, price and promote themselves?",
    options: [
      { label: "We track it regularly", gap: 0 },
      { label: "We looked once, a while ago", gap: 1 },
      { label: "We know the names, not much more", gap: 2 },
      { label: "We don't really look at competitors", gap: 3 },
    ],
  },
  {
    id: "q6",
    dimension: "market",
    prompt: "When did you last gather real customer feedback about how they perceive your brand?",
    options: [
      { label: "In the last three months", gap: 0 },
      { label: "In the last year", gap: 1 },
      { label: "Only through reviews, when they come in", gap: 2 },
      { label: "Never in a structured way", gap: 3 },
    ],
  },
  {
    id: "q7",
    dimension: "channels",
    prompt: "How is content decided and produced today?",
    options: [
      { label: "A planned calendar tied to campaign goals", gap: 0 },
      { label: "A calendar, but not tied to goals", gap: 1 },
      { label: "Week to week, whatever comes up", gap: 2 },
      { label: "Whenever someone has time", gap: 3 },
    ],
  },
  {
    id: "q8",
    dimension: "channels",
    prompt: "Why are you on the channels you're on?",
    options: [
      { label: "Each one serves a defined audience and funnel stage", gap: 0 },
      { label: "Because our audience is roughly there", gap: 1 },
      { label: "Because competitors are there", gap: 2 },
      { label: "Because everyone is", gap: 3 },
    ],
  },
  {
    id: "q9",
    dimension: "measurement",
    prompt: "Before a campaign goes live, do you define what success looks like in numbers?",
    options: [
      { label: "Always, with clear KPIs", gap: 0 },
      { label: "Sometimes", gap: 1 },
      { label: "We look at the numbers afterwards", gap: 2 },
      { label: "No", gap: 3 },
    ],
  },
  {
    id: "q10",
    dimension: "measurement",
    prompt: "What does your marketing report actually show?",
    options: [
      { label: "Progress against business objectives we set", gap: 0 },
      { label: "Platform metrics plus some business results", gap: 1 },
      { label: "Likes, views and followers", gap: 2 },
      { label: "We don't get a regular report", gap: 3 },
    ],
  },
];
