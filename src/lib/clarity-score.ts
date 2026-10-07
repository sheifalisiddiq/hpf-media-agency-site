import { dimensions, questions, type DimensionId } from "@/content/clarity-check";

export type Answers = Record<string, number>;

export type Band = { id: "clear" | "drifting" | "misaligned"; label: string; summary: string };

export type ClarityResult = {
  /** 0 = no gaps, 100 = every answer at the largest gap. */
  score: number;
  band: Band;
  dimensions: { id: DimensionId; name: string; score: number; rootCause: string; remedy: string }[];
};

const bands: { max: number; band: Band }[] = [
  {
    max: 29,
    band: {
      id: "clear",
      label: "Clear",
      summary: "Your foundations are sound. The gaps that remain are specific, and worth fixing before you scale spend.",
    },
  },
  {
    max: 59,
    band: {
      id: "drifting",
      label: "Drifting",
      summary: "Parts of your marketing are working, but what you're saying and what's landing are pulling apart.",
    },
  },
  {
    max: 100,
    band: {
      id: "misaligned",
      label: "Misaligned",
      summary: "Your marketing is likely treating symptoms. More output won't help until the root causes are found.",
    },
  },
];

/** Returns null when the answers are incomplete or invalid. */
export function scoreClarity(answers: Answers): ClarityResult | null {
  for (const q of questions) {
    const idx = answers[q.id];
    if (!Number.isInteger(idx) || idx < 0 || idx >= q.options.length) return null;
  }

  const perDimension = dimensions.map((d) => {
    const qs = questions.filter((q) => q.dimension === d.id);
    const gap = qs.reduce((sum, q) => sum + q.options[answers[q.id]].gap, 0);
    return {
      id: d.id,
      name: d.name,
      score: Math.round((gap / (qs.length * 3)) * 100),
      rootCause: d.rootCause,
      remedy: d.remedy,
    };
  });

  const totalGap = questions.reduce((sum, q) => sum + q.options[answers[q.id]].gap, 0);
  const score = Math.round((totalGap / (questions.length * 3)) * 100);
  const band = bands.find((b) => score <= b.max)!.band;

  return {
    score,
    band,
    dimensions: perDimension.sort((a, b) => b.score - a.score),
  };
}
