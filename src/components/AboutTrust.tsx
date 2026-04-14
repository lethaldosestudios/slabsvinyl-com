import Link from "next/link";
import Image from "next/image";

export function AboutTrust() {
  return (
    <section className="bg-cream py-[clamp(4rem,8vw,8rem)]">
      <div className="w-full max-w-content px-[clamp(1.5rem,5vw,5rem)] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16">

        {/* Left Column — Brand Statement */}
        <div className="flex flex-col items-start text-left">
          <div className="font-display text-[10px] font-[600] uppercase tracking-[0.12em] text-slabs-text-faint mb-4">
            ABOUT SLABS
          </div>

          <h2 className="font-serif not-italic text-display-sm font-[400] leading-[1.18] text-slabs-text mb-6">
            Dead stock. Factory sealed. Straight to you.
          </h2>

          <p className="font-sans text-body-sm leading-[1.7] text-slabs-text-muted max-w-[55ch] mb-4">
            Slabs sources dead stock wholesale inventory — factory-sealed records that never made it to a retail shelf. Every item in the catalog is new condition. No used. No graded. No exceptions.
          </p>

          <p className="font-sans text-body-sm leading-[1.7] text-slabs-text-muted max-w-[55ch] mb-10">
            The inventory is drawn from soul, funk, R&B, hip-hop, jazz, Latin, gospel, blues, reggae, electronic, and world. Curated by ear, not by algorithm.
          </p>

          <Link
            href="/about"
            className="group flex items-center font-display text-[12px] uppercase tracking-[0.06em] text-slabs-text-muted hover:text-slabs-text transition-colors duration-fast ease-analog"
          >
            Our story
            <span aria-hidden="true" className="ml-1 group-hover:ml-[10px] transition-all duration-fast ease-analog inline-block">
              →
            </span>
          </Link>
        </div>

        {/* Right Column — Image Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="relative w-full aspect-square">
            <Image
              src="/assets/placeholder-01.jpg"
              alt=""
              fill
              className="object-cover rounded-none"
            />
          </div>
          <div className="relative w-full aspect-square">
            <Image
              src="/assets/placeholder-02.jpg"
              alt=""
              fill
              className="object-cover rounded-none"
            />
          </div>
          <div className="relative w-full aspect-square">
            <Image
              src="/assets/placeholder-03.jpg"
              alt=""
              fill
              className="object-cover rounded-none"
            />
          </div>
          <div className="relative w-full aspect-square">
            <Image
              src="/assets/placeholder-04.jpg"
              alt=""
              fill
              className="object-cover rounded-none"
            />
          </div>
        </div>

        {/* Trust Line (full width below both columns) */}
        <div className="col-span-1 lg:col-span-2 border-t border-[rgba(20,19,19,0.08)] pt-8 mt-8">
          <p className="font-display text-[11px] uppercase tracking-[0.06em] text-slabs-text-faint text-left">
            All Slabs records are factory sealed and new condition. Dead stock. No exceptions.
          </p>
        </div>

      </div>
    </section>
  );
}
