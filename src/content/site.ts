export const site = {
  name: "HPF Media",
  url: "https://www.hpf-media.com",
  email: "admin@hpf-media.com",
  phone: "+971 55 521 4667",
  whatsapp: "https://wa.me/971555214667",
  instagram: "https://www.instagram.com/hpfmedia",
  instagramHandle: "@hpfmedia",
  location: "Dubai, United Arab Emirates",
};

export const navLinks = [
  { name: "About", href: "/about" },
  { name: "Method", href: "/method" },
  { name: "Our Works", href: "/works" },
  { name: "Contact", href: "/contact" },
];

export const valueNames = ["Truth", "Dignity", "Purity", "Righteousness", "Kindness"] as const;

export const whatsappLink = (message: string) =>
  `${site.whatsapp}?text=${encodeURIComponent(message)}`;
