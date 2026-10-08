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
    title: "Instagram reel, HPF Media client work",
    views: "150k+",
    viewCount: 150_000,
  },
  {
    id: "DbbI_WsNwIB",
    platform: "Instagram",
    sourceUrl: "https://www.instagram.com/reel/DbbI_WsNwIB/?igsi=NnFqeWs3b3ZyMTEx",
    videoSrc: "/ig-reel-2.mp4",
    title: "Instagram reel, HPF Media client work",
    views: "560k+",
    viewCount: 560_000,
  },
  {
    id: "Dblf-tyNzjv",
    platform: "Instagram",
    sourceUrl: "https://www.instagram.com/reel/Dblf-tyNzjv/?igsi=MXFxaXJub3dhNXRvaQ==",
    videoSrc: "/ig-reel-3.mp4",
    title: "Instagram reel, HPF Media client work",
    views: "200k+",
    viewCount: 200_000,
  },
  {
    id: "DcL5K-voLRp",
    platform: "Instagram",
    sourceUrl: "https://www.instagram.com/reel/DcL5K-voLRp/?igsi=aGR2YTduZGJpN2Rr",
    videoSrc: "/ig-reel-4.mp4",
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

export const brandLogos: { src: string; name: string }[] = [
  { src: "/emirates_FC_logo.jpeg", name: "Emirates FC" },
  { src: "/Mecca_al_mukarramah_perfumes.jpeg", name: "Mecca Al Mukarramah Perfumes" },
  { src: "/mr_glass_logo.jpeg", name: "Mr Glass" },
  { src: "/bunzai_burgers.jpeg", name: "Bunzai Burgers" },
  { src: "/beston_woods.jpeg", name: "Beston Wood" },
  { src: "/play_and_sip.jpeg", name: "Play & Sip" },
  { src: "/windmaster_logo.jpeg", name: "Windmaster" },
  { src: "/cvrd_logo.jpeg", name: "CVRD" },
];

/** Sum of the published view counts on the featured reels. */
export const featuredViewTotal = socialReels.reduce((sum, r) => sum + r.viewCount, 0);
