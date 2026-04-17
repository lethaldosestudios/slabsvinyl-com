import Link from "next/link";

export function SonicLineage() {
  return (
    <section className="bg-plum w-full">
      <div className="w-full max-w-content mx-auto px-[clamp(1.5rem,5vw,5rem)] py-[clamp(4rem,8vw,8rem)]">
        {/* Decorative Rule */}
        <div className="w-full border-t border-[rgba(239,238,234,0.12)] mb-12"></div>

        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-16">
          {/* Left Column (60%) — The Quote */}
          <div className="flex flex-col text-left">
            <div className="font-display text-[10px] font-semibold uppercase tracking-[0.12em] text-cream/40 mb-6">
              SONIC LINEAGE
            </div>
            <h2 className="font-serif italic text-display-lg font-normal leading-[1.06] text-cream mb-6">
              &quot;From Motown to MPC.&quot;
            </h2>
            <p className="font-serif not-italic text-[24px] font-normal text-cream/60">
              &quot;Every record in the archive carries its lineage.&quot;
            </p>
          </div>

          {/* Right Column (40%) — Explanation */}
          <div className="flex flex-col text-left">
            <p className="font-sans text-body-sm leading-[1.7] text-cream/65 max-w-[55ch] mb-8">
              The PRODUCER_NOTE field maps each record&apos;s place in music history — who influenced the artist, and who they went on to influence. It&apos;s how you find Cymande when you&apos;re looking for De La Soul source material. It&apos;s how collectors follow threads.
            </p>
            <Link
              href="/sonic-lineage"
              className="group inline-flex items-center font-display text-[12px] uppercase tracking-[0.06em] text-cream/60 hover:text-cream/90 transition-colors duration-fast ease-analog"
            >
              How sonic lineage works
              <span aria-hidden="true" className="ml-1 group-hover:ml-[10px] transition-all duration-fast ease-analog inline-block">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
