import Link from "next/link";

const collections = [
  {
    slug: "late-night-funk",
    name: "Late Night Funk",
    descriptor: "Slow burns and deep pocket grooves",
    count: 31,
    bgColor: "bg-forest",
    size: "large",
  },
  {
    slug: "soul-club-1968-1975",
    name: "Soul Club 1968–75",
    descriptor: "Atlantic, Stax, Motown. The golden run.",
    count: 48,
    bgColor: "bg-caramel",
    size: "small",
  },
  {
    slug: "rare-reggae",
    name: "Rare Reggae Pressings",
    descriptor: "Jamaican pressings, UK exports, hard to find",
    count: 17,
    bgColor: "bg-wax",
    size: "small",
  },
];

export function FeaturedCollections() {
  return (
    <section className="bg-paper py-[clamp(4rem,8vw,8rem)]">
      <div className="max-w-[1280px] mx-auto px-[clamp(1.5rem,5vw,5rem)]">
        {/* Header */}
        <div className="text-left">
          <p className="font-display text-[10px] font-[600] uppercase tracking-[0.12em] text-slabs-text-faint mb-3">
            FROM THE COLLECTION
          </p>
          <h2 className="font-serif italic text-display-sm font-[400] text-slabs-text mb-10">
            From the collection.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4">
          {collections.map((collection) => {
            const isLarge = collection.size === "large";

            return (
              <Link
                key={collection.slug}
                href={`/collections/${collection.slug}`}
                className={`relative overflow-hidden group block bg-ink ${
                  isLarge
                    ? "md:col-span-1 md:row-span-2 aspect-[3/4] min-h-[480px]"
                    : "md:col-span-2 md:row-span-1 aspect-[4/3] md:aspect-auto"
                }`}
              >
                {/* Background Color instead of Image */}
                <div
                  className={`absolute inset-0 ${collection.bgColor} transition-transform duration-std ease-analog group-hover:scale-[1.01]`}
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(20,19,19,0.92) 0%, rgba(20,19,19,0.30) 60%, transparent 100%)",
                  }}
                />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3
                    className={`font-serif italic text-cream font-[400] mb-2 ${
                      isLarge ? "text-[28px]" : "text-[20px]"
                    }`}
                  >
                    {collection.name}
                  </h3>
                  <p className="font-sans text-[13px] leading-[1.5] text-cream/65 max-w-full truncate mb-4">
                    {collection.descriptor}
                  </p>
                  <p className="font-display text-[11px] uppercase tracking-[0.06em] text-cream/50 transition-colors duration-micro ease-analog group-hover:text-cream/80 flex items-center">
                    {collection.count} records{" "}
                    <span
                      className="ml-1 inline-block transition-transform duration-std ease-analog group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
