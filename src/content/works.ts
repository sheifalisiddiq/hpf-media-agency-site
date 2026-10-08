export type SocialReel = {
  id: string;
  platform: "Instagram" | "TikTok";
  sourceUrl: string;
  embedUrl?: string;
  videoSrc?: string;
  poster?: string;
  title: string;
  views: string;
  /** Numeric published view count, used for verifiable totals. */
  viewCount: number;
};

export const socialReels: SocialReel[] = [
  {
    id: "DbLzGuetoPZ",
    platform: "Instagram",
    sourceUrl: "https://www.instagram.com/reel/DbLzGuetoPZ/?igsi=MThqdWlyZGRheml4OA==",
    videoSrc: "/ig-reel-1.mp4",
    poster: "/ig-reel-1.jpg",
    title: "Instagram reel, HPF Media client work",
    views: "150k+",
    viewCount: 150_000,
  },
  {
    id: "DbbI_WsNwIB",
    platform: "Instagram",
    sourceUrl: "https://www.instagram.com/reel/DbbI_WsNwIB/?igsi=NnFqeWs3b3ZyMTEx",
    videoSrc: "/ig-reel-2.mp4",
    poster: "/ig-reel-2.jpg",
    title: "Instagram reel, HPF Media client work",
    views: "560k+",
    viewCount: 560_000,
  },
  {
    id: "Dblf-tyNzjv",
    platform: "Instagram",
    sourceUrl: "https://www.instagram.com/reel/Dblf-tyNzjv/?igsi=MXFxaXJub3dhNXRvaQ==",
    videoSrc: "/ig-reel-3.mp4",
    poster: "/ig-reel-3.jpg",
    title: "Instagram reel, HPF Media client work",
    views: "200k+",
    viewCount: 200_000,
  },
  {
    id: "DcL5K-voLRp",
    platform: "Instagram",
    sourceUrl: "https://www.instagram.com/reel/DcL5K-voLRp/?igsi=aGR2YTduZGJpN2Rr",
    videoSrc: "/ig-reel-4.mp4",
    poster: "/ig-reel-4.jpg",
    title: "Instagram reel, HPF Media client work",
    views: "11k+",
    viewCount: 11_000,
  },
  {
    id: "7650522024233667847",
    platform: "TikTok",
    sourceUrl: "https://www.tiktok.com/@windmaster.ae/video/7650522024233667847",
    videoSrc: "/tiktok-windmaster.mp4",
    poster: "/tiktok-windmaster.jpg",
    title: "TikTok video, HPF Media client work",
    views: "101k+",
    viewCount: 101_000,
  },
];

export const brandLogos: { src: string; name: string; width: number; height: number }[] = [
  { src: "/logos/emirates-fc.png", name: "Emirates FC", width: 512, height: 512 },
  { src: "/logos/mecca-perfumes.png", name: "Mecca Al Mukarramah Perfumes", width: 1210, height: 264 },
  { src: "/logos/mr-glass.png", name: "Mr Glass", width: 512, height: 512 },
  { src: "/logos/bunzai-burgers.png", name: "Bunzai Burgers", width: 512, height: 512 },
  { src: "/logos/beston-wood.png", name: "Beston Wood", width: 1117, height: 376 },
  { src: "/logos/play-and-sip.png", name: "Play & Sip", width: 512, height: 512 },
  { src: "/logos/windmaster.png", name: "Windmaster", width: 512, height: 512 },
  { src: "/logos/cvrd.png", name: "CVRD", width: 512, height: 512 },
];

/** Sum of the published view counts on the featured reels. */
export const featuredViewTotal = socialReels.reduce((sum, r) => sum + r.viewCount, 0);
