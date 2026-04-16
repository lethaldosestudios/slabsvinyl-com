import Link from "next/link";


interface CatalogEntryProps {
  index: string;
  genre: string;
  artist: string;
  title: string;
  label: string;
  year: string;
  catalogNumber: string;
  imageUrl?: string;
  slug: string;
  inStock: boolean;
}

const records: CatalogEntryProps[] = [
  { index:"001", genre:"Soul",    artist:"Marvin Gaye",      title:"What's Going On",          label:"Tamla",    year:"1971", catalogNumber:"T 310L",    slug:"marvin-gaye-whats-going-on",          inStock:true  },
  { index:"002", genre:"Funk",    artist:"James Brown",      title:"Sex Machine",               label:"King",     year:"1970", catalogNumber:"KSD 1115",  slug:"james-brown-sex-machine",             inStock:true  },
  { index:"003", genre:"Jazz",    artist:"Miles Davis",      title:"Kind of Blue",              label:"Columbia", year:"1959", catalogNumber:"CL 1355",   slug:"miles-davis-kind-of-blue",            inStock:true  },
  { index:"004", genre:"R&B",     artist:"Aretha Franklin",  title:"Young Gifted and Black",    label:"Atlantic", year:"1972", catalogNumber:"SD 7213",   slug:"aretha-franklin-young-gifted-black",  inStock:true  },
  { index:"005", genre:"Reggae",  artist:"Burning Spear",    title:"Marcus Garvey",             label:"Island",   year:"1975", catalogNumber:"ILPS 9377", slug:"burning-spear-marcus-garvey",         inStock:false },
  { index:"006", genre:"Latin",   artist:"Celia Cruz",       title:"Tremendo Cache",            label:"Vaya",     year:"1975", catalogNumber:"VS-63",     slug:"celia-cruz-tremendo-cache",           inStock:true  },
  { index:"007", genre:"Gospel",  artist:"Mahalia Jackson",  title:"How I Got Over",            label:"Columbia", year:"1976", catalogNumber:"PC 34073",  slug:"mahalia-jackson-how-i-got-over",      inStock:true  },
  { index:"008", genre:"Hip-Hop", artist:"Eric B. & Rakim",  title:"Paid in Full",              label:"4th & B'way", year:"1987", catalogNumber:"MCA-42248", slug:"eric-b-rakim-paid-in-full",       inStock:true  },
];

function CatalogEntry(record: CatalogEntryProps) {
  return (
    <div className="border border-slabs-border dark:border-dark-border bg-slabs-surface dark:bg-dark-surface cursor-default hover:-translate-y-[3px] hover:shadow-[0_4px_16px_rgba(20,19,19,0.08)] dark:hover:shadow-[0_4px_16px_rgba(239,238,234,0.08)] transition-all duration-[200ms] ease-analog flex flex-col group/card">
      {/* Image container & link */}
      <Link
        href={`/products/${record.slug}`}
        className="relative block overflow-hidden w-full aspect-square focus-visible:ring-2 focus-visible:ring-slabs-text dark:focus-visible:ring-dark-text focus-visible:outline-none"
        aria-label={`View details for ${record.title} by ${record.artist}`}
      >
        {/* Album sleeve */}
        <div className="relative w-full h-full bg-sleeve">
           {/* We use a solid bg-sleeve since we don't have mock images, but if we did we'd use <img className="w-full h-full object-cover" /> */}
           {/* Placeholder for the image. Applying saturate filter if out of stock */}
           <div className={`w-full h-full border-b border-slabs-border dark:border-dark-border ${!record.inStock ? "saturate-[0.7]" : ""}`} />
        </div>
      </Link>

      {/* Spec block */}
      <div className="grid grid-cols-[56px_1fr] px-3 pt-2.5 pb-3 border-t border-slabs-divider dark:border-dark-divider text-left flex-1 bg-slabs-surface dark:bg-dark-surface transition-colors duration-fast ease-analog">
        {/* Left column */}
        <div className="border-r border-slabs-divider dark:border-dark-divider pr-2 flex flex-col justify-between transition-colors duration-fast ease-analog">
          <div>
            <span className="block font-display text-[11px] font-normal tracking-[0.04em] uppercase text-slabs-text-faint dark:text-dark-text-faint leading-tight">
              {record.index}
            </span>
            <span className="block font-display text-[11px] font-normal tracking-[0.04em] uppercase text-slabs-text-faint dark:text-dark-text-faint leading-tight">
              {record.genre}
            </span>
          </div>
          {/* Status Label (if applicable, placed here for visual alignment if out of stock, or inline) */}
        </div>

        {/* Right column */}
        <div className="pl-2.5 flex flex-col justify-between h-full">
          <div>
            <span className="block font-display text-[11px] font-normal tracking-[0.04em] uppercase text-slabs-text dark:text-dark-text leading-tight transition-colors duration-fast ease-analog">
              {record.artist}
            </span>
            <span className="block font-display text-[11px] font-normal tracking-[0.04em] uppercase text-slabs-text-muted dark:text-dark-text-muted leading-tight transition-colors duration-fast ease-analog">
              {record.title}
            </span>
            <span className="block font-display text-[11px] font-normal tracking-[0.04em] uppercase text-slabs-text-muted dark:text-dark-text-muted leading-tight transition-colors duration-fast ease-analog">
              {record.label} · {record.year}
            </span>
            <span className="block font-display text-[11px] font-normal tracking-[0.04em] uppercase text-slabs-text-muted dark:text-dark-text-muted leading-tight transition-colors duration-fast ease-analog">
              {record.catalogNumber}
            </span>
          </div>

          {!record.inStock && (
            <div className="mt-2">
              <span className="font-display text-[10px] font-semibold tracking-[0.10em] uppercase text-wax">
                GONE
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function NewArrivals() {
  return (
    <section className="bg-paper py-[clamp(4rem,8vw,8rem)]">
      <div className="w-full max-w-content px-[clamp(1.5rem,5vw,5rem)] mx-auto">

        {/* Section Header */}
        <header className="mb-10 text-left">
          <h2 className="font-display text-ui-over font-semibold uppercase tracking-[0.12em] text-slabs-text-faint dark:text-dark-text-faint mb-3 transition-colors duration-fast ease-analog">
            NEW ARRIVALS
          </h2>
          <p className="font-serif italic text-display-sm font-normal text-slabs-text dark:text-dark-text m-0 transition-colors duration-fast ease-analog">
            Just dropped.
          </p>
        </header>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {records.map((record) => (
            <CatalogEntry key={record.slug} {...record} />
          ))}
        </div>

        {/* Section Footer */}
        <div className="mt-8 flex justify-end">
          <Link
            href="/new-arrivals"
            className="group flex items-center font-display text-[12px] uppercase tracking-[0.06em] text-slabs-text-muted dark:text-dark-text-muted hover:text-slabs-text dark:hover:text-dark-text transition-colors duration-fast ease-analog"
          >
            View all new arrivals
            <span aria-hidden="true" className="ml-1 group-hover:ml-[10px] transition-all duration-fast ease-analog inline-block">
              →
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}
