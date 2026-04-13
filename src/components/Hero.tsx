"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [scrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    // Trigger mount animation next frame to ensure initial 0 opacity state renders
    const timer = setTimeout(() => setMounted(true), 10);

    const handleScroll = () => {
      setScrolledPast(window.scrollY > 60);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-paper pt-[60px] flex flex-col items-center justify-center">
      {/* Content Stack */}
      <div className="flex flex-col items-center justify-center text-center px-[clamp(1.5rem,5vw,5rem)] w-full max-w-content z-10">

        {/* 1 - Wordmark */}
        <div
          className={`mb-10 w-[clamp(280px,40vw,560px)] transition-all duration-crate ease-analog ${
            mounted ? "opacity-100 scale-100" : "opacity-0 scale-[1.01]"
          }`}
        >
          {/* Note: In a real Next.js app the width/height are required for <Image>.
              We provide an intrinsic aspect ratio and use layout/style to override. */}
          <Image
            src="/assets/wordmark-slabs-fuzzy.jpg"
            alt="Slabs Vinyl Supply"
            width={560}
            height={200}
            priority
            className="w-full h-auto rounded-none"
          />
        </div>

        {/* 2 - Tagline */}
        <p
          className={`mb-10 font-display font-normal text-ui-h5 text-slabs-text-muted tracking-[0.04em] transition-all duration-[400ms] delay-[400ms] ease-analog ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          Deep archive. New condition. No filler.
        </p>

        {/* 3 - CTA Pair */}
        <div
          className={`flex items-center gap-3 transition-all duration-[400ms] delay-[700ms] ease-analog ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <Link
            href="/shop"
            className="border border-slabs-text bg-transparent font-display text-ui-label font-bold uppercase tracking-[0.08em] px-8 py-3 text-slabs-text hover:bg-slabs-text hover:text-cream transition-colors duration-fast ease-analog"
          >
            Shop
          </Link>
          <Link
            href="/crate"
            className="border border-slabs-border bg-transparent font-display text-ui-label font-bold uppercase tracking-[0.08em] px-8 py-3 text-slabs-text-muted hover:border-slabs-text-muted hover:text-slabs-text transition-colors duration-fast ease-analog"
          >
            Dig the Crates
          </Link>
        </div>
      </div>

      {/* Scroll Chevron */}
      <div
        className={`absolute bottom-8 transition-opacity duration-std ease-analog ${
          scrolledPast ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="text-slabs-text-faint animate-chevron-bounce">
          <ChevronDown size={20} strokeWidth={1.5} />
        </div>
      </div>
    </section>
  );
}
