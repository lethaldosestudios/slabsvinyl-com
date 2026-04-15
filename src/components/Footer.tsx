import Link from "next/link";
import { Instagram, Music } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink w-full">
      <div className="mx-auto max-w-content px-[clamp(1.5rem,5vw,5rem)] pt-[clamp(4rem,6vw,6rem)] pb-8">
        {/* Main Content Row */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-16">
          {/* Column 1 — Brand */}
          <div className="flex flex-col">
            <h2 className="font-serif italic text-[24px] text-cream font-[400] mb-4">
              SLABS
            </h2>
            <p className="font-display text-[11px] uppercase tracking-[0.05em] text-cream/35 max-w-[22ch] mb-6">
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
                <Instagram size={18} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cream/75 transition duration-micro"
                aria-label="TikTok"
              >
                <Music size={18} />
              </a>
            </div>
          </div>

          {/* Column 2 — Explore */}
          <div className="flex flex-col">
            <h3 className="font-display text-[10px] font-[600] uppercase tracking-[0.10em] text-cream/35 mb-4">
              EXPLORE
            </h3>
            <div className="flex flex-col gap-3">
              <Link
                href="#"
                className="font-display text-[13px] font-[400] text-cream/55 hover:text-cream/85 transition duration-micro"
              >
                Shop
              </Link>
              <Link
                href="#"
                className="font-display text-[13px] font-[400] text-cream/55 hover:text-cream/85 transition duration-micro"
              >
                Collections
              </Link>
              <Link
                href="#"
                className="font-display text-[13px] font-[400] text-cream/55 hover:text-cream/85 transition duration-micro"
              >
                Crate
              </Link>
              <Link
                href="#"
                className="font-display text-[13px] font-[400] text-cream/55 hover:text-cream/85 transition duration-micro"
              >
                New Arrivals
              </Link>
            </div>
          </div>

          {/* Column 3 — Company */}
          <div className="flex flex-col">
            <h3 className="font-display text-[10px] font-[600] uppercase tracking-[0.10em] text-cream/35 mb-4">
              COMPANY
            </h3>
            <div className="flex flex-col gap-3">
              <Link
                href="#"
                className="font-display text-[13px] font-[400] text-cream/55 hover:text-cream/85 transition duration-micro"
              >
                Journal
              </Link>
              <Link
                href="#"
                className="font-display text-[13px] font-[400] text-cream/55 hover:text-cream/85 transition duration-micro"
              >
                About
              </Link>
              <Link
                href="#"
                className="font-display text-[13px] font-[400] text-cream/55 hover:text-cream/85 transition duration-micro"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[rgba(239,238,234,0.10)] mt-12 mb-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 md:gap-0 font-display text-[11px] uppercase tracking-[0.04em] text-cream/30">
          <div>© 2026 Slabs Vinyl Supply</div>
          <div>slabsvinyl.com</div>
          <div>All records new condition, factory sealed.</div>
        </div>
      </div>
    </footer>
  );
}
