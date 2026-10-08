import Image from "next/image";
import Marquee from "@/components/motion/Marquee";
import { brandLogos } from "@/content/works";

/** Single-row, boxless brand logo strip — logos sit directly on the page gradient. */
export default function LogoMarquee() {
  return (
    <Marquee duration={32} trackClassName="gap-10 pr-10 md:gap-16 md:pr-16" className="mask-fade-x">
      {brandLogos.map((logo) => (
        <div key={logo.name} className="flex h-14 shrink-0 items-center opacity-80 transition-opacity duration-300 hover:opacity-100 md:h-20 lg:h-24">
          <Image
            src={logo.src}
            alt={`${logo.name} logo`}
            width={logo.width}
            height={logo.height}
            sizes="200px"
            className="h-full w-auto object-contain"
          />
        </div>
      ))}
    </Marquee>
  );
}
