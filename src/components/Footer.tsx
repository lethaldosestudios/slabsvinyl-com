import Link from "next/link";
import { Instagram, Music } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink w-full">
      <div className="mx-auto max-w-content px-[clamp(1.5rem,5vw,5rem)] pt-[clamp(4rem,6vw,6rem)] pb-8">
        {/* Main Content Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Column 1 — Brand */}
          <div className="flex flex-col">
            <h2 className="font-serif italic text-[24px] text-cream font-[400] mb-4 block">
              SLABS
            </h2>
            <p className="font-display text-[11px] uppercase tracking-[0.05em] text-cream/35 max-w-[22ch] mb-6 block">
              Deep Archive of New-Condition Physical Media
            </p>
            <div className="flex gap-4 text-cream/40">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cream/75 transition duration-micro"
                aria-label="Instagram"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cream/75 transition duration-micro"
                aria-label="TikTok"
              >
                <Music size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Column 2 — Explore */}
          <div className="flex flex-col">
            <h3 className="font-display text-[10px] font-semibold uppercase tracking-[0.10em] text-cream/35 mb-4 block">
              EXPLORE
            </h3>
            <div className="flex flex-col gap-3">
              <Link
                href="#"
                className="font-display text-[13px] font-normal text-cream/55 hover:text-cream/85 transition duration-micro"
              >
                Shop
              </Link>
              <Link
                href="#"
                className="font-display text-[13px] font-normal text-cream/55 hover:text-cream/85 transition duration-micro"
              >
                Collections
              </Link>
              <Link
                href="#"
                className="font-display text-[13px] font-normal text-cream/55 hover:text-cream/85 transition duration-micro"
              >
                Crate
              </Link>
              <Link
                href="#"
                className="font-display text-[13px] font-normal text-cream/55 hover:text-cream/85 transition duration-micro"
              >
                New Arrivals
              </Link>
            </div>
          </div>

          {/* Column 3 — Company */}
          <div className="flex flex-col">
            <h3 className="font-display text-[10px] font-semibold uppercase tracking-[0.10em] text-cream/35 mb-4 block">
              COMPANY
            </h3>
            <div className="flex flex-col gap-3">
              <Link
                href="#"
                className="font-display text-[13px] font-normal text-cream/55 hover:text-cream/85 transition duration-micro"
              >
                Journal
              </Link>
              <Link
                href="#"
                className="font-display text-[13px] font-normal text-cream/55 hover:text-cream/85 transition duration-micro"
              >
                About
              </Link>
              <Link
                href="#"
                className="font-display text-[13px] font-normal text-cream/55 hover:text-cream/85 transition duration-micro"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-border mt-12 mb-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-4 lg:gap-0 font-display text-[11px] uppercase tracking-[0.04em] text-cream/30">
          <span className="text-center lg:text-left">
            © 2026 Slabs Vinyl Supply
          </span>
          <span className="text-center">
            slabsvinyl.com
          </span>
          <span className="text-center lg:text-right">
            All records new condition, factory sealed.
          </span>
        </div>
      </div>
    </footer>
  );
}
