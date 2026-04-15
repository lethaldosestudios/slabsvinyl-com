"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search, ShoppingBag, Disc, Archive } from "lucide-react";

interface NavProps {
  cartCount: number;
  currentPath: string;
  transparent?: boolean;
}

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "Crate", href: "/crate" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
];

export function Nav({ cartCount, currentPath, transparent = false }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const isFilled = scrolled || !transparent;

  // Desktop styles
  const headerBgClass = isFilled ? "bg-slabs-surface" : "bg-transparent";
  const headerBorderClass = isFilled ? "border-b border-slabs-border" : "border-b-0 border-transparent";

  const wordmarkColorClass = "text-slabs-text";
  const linkColorClass = "text-slabs-text-muted";
  const iconColorClass = "text-slabs-text-muted";

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-colors duration-fast ease-analog flex items-center justify-center ${headerBgClass} ${headerBorderClass} h-[60px]`}
      >
        <div className="w-full max-w-content px-[clamp(1.5rem,5vw,5rem)] mx-auto flex items-center justify-between h-full">
          {/* Wordmark (Left) */}
          <Link
            href="/"
            className={`font-serif italic text-[28px] font-normal leading-none ${wordmarkColorClass} transition-colors duration-fast ease-analog`}
            onClick={() => setMobileMenuOpen(false)}
          >
            SLABS
          </Link>

          {/* Desktop Links (Center) */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = currentPath === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative font-display text-ui-nav font-normal tracking-[0.01em] ${linkColorClass} transition-colors duration-fast ease-analog hover:text-slabs-text`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 bg-forest transition-all duration-fast ease-analog h-[2px]
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Icons (Right) */}
          <div className="flex items-center gap-4">
            <button aria-label="Search" className={`hidden md:flex ${iconColorClass} hover:text-slabs-text transition-colors duration-fast ease-analog`}>
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button aria-label="Cart" className={`relative hidden md:flex ${iconColorClass} hover:text-slabs-text transition-colors duration-fast ease-analog`}>
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber text-ink font-sans font-bold flex items-center justify-center rounded-none leading-none w-4 h-4 text-[10px]">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Trigger */}
            <button
              aria-label="Open Menu"
              className={`md:hidden ${iconColorClass} transition-colors duration-fast ease-analog`}
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-ink flex flex-col transition-opacity duration-std ease-analog ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          aria-label="Close Menu"
          className="absolute text-cream/60 hover:text-cream transition-colors duration-fast ease-analog top-6 right-6"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X size={24} strokeWidth={1.5} />
        </button>

        <div className="flex-1 flex flex-col items-center justify-center px-6 gap-8">
          {navLinks.map((link, index) => {
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-serif italic font-normal text-cream transform transition-all duration-std ease-analog text-[36px] delay-[${index * 60}ms]
                  ${mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}
                `}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Persistent Bottom Bar */}
        <div className="fixed bottom-0 left-0 w-full bg-ink border-t border-dark-border flex items-center justify-between px-6 pb-safe h-[56px]">
          <Link href="/shop" className="flex flex-col items-center gap-1 text-dark-text-muted hover:text-cream transition-colors duration-fast ease-analog" onClick={() => setMobileMenuOpen(false)}>
            <Disc size={20} strokeWidth={1.5} />
            <span className="font-display uppercase tracking-widest leading-none text-[9px]">Shop</span>
          </Link>
          <Link href="/crate" className="flex flex-col items-center gap-1 text-dark-text-muted hover:text-cream transition-colors duration-fast ease-analog" onClick={() => setMobileMenuOpen(false)}>
            <Archive size={20} strokeWidth={1.5} />
            <span className="font-display uppercase tracking-widest leading-none text-[9px]">Crate</span>
          </Link>
          <button aria-label="Search" className="flex flex-col items-center gap-1 text-dark-text-muted hover:text-cream transition-colors duration-fast ease-analog" onClick={() => setMobileMenuOpen(false)}>
            <Search size={20} strokeWidth={1.5} />
            <span className="font-display uppercase tracking-widest leading-none text-[9px]">Search</span>
          </button>
          <button aria-label="Cart" className="flex flex-col items-center gap-1 text-dark-text-muted hover:text-cream relative transition-colors duration-fast ease-analog" onClick={() => setMobileMenuOpen(false)}>
            <div className="relative">
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-amber text-ink font-sans font-bold flex items-center justify-center rounded-none leading-none w-4 h-4 text-[10px]">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="font-display uppercase tracking-widest leading-none text-[9px]">Cart</span>
          </button>
        </div>
      </div>
    </>
  );
}
