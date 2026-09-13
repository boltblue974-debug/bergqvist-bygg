const PROJECTS = [
  { title: 'Villarenovering', place: 'Uppsala', year: '2024', hue: '15 55% 40%' },
  { title: 'Tillbyggnad, kök', place: 'Enköping', year: '2023', hue: '35 45% 42%' },
  { title: 'Nybygge, villa', place: 'Björklinge', year: '2023', hue: '20 40% 35%' },
  { title: 'Takomläggning', place: 'Storvreta', year: '2022', hue: '28 50% 38%' },
  { title: 'Badrumsrenovering', place: 'Uppsala', year: '2022', hue: '10 45% 42%' },
  { title: 'Fasadbyte', place: 'Bälinge', year: '2021', hue: '32 42% 40%' },
]

function ProjectCard({ p }: { p: (typeof PROJECTS)[number] }) {
  return (
    <figure className="group overflow-hidden rounded-sm border border-line">
      <div
        className="relative aspect-[4/3] overflow-hidden"
        style={{
          backgroundImage: `repeating-linear-gradient(135deg, hsl(${p.hue} / 0.14) 0 2px, transparent 2px 14px), linear-gradient(160deg, hsl(${p.hue} / 0.55), hsl(${p.hue} / 0.85))`,
        }}
      >
        <div className="absolute left-3 top-3 rounded-sm bg-anthracite/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-paper">
          Exempelbild
        </div>
        <div className="absolute inset-0 origin-center scale-100 transition-transform duration-300 ease-out group-hover:scale-105" />
      </div>
      <figcaption className="flex items-baseline justify-between gap-3 bg-white/50 px-4 py-3">
        <span className="text-sm font-semibold text-ink">{p.title}</span>
        <span className="text-xs text-ink-soft">
          {p.place}, {p.year}
        </span>
      </figcaption>
    </figure>
  )
}

export function Gallery() {
  return (
    <section id="projekt" className="border-y border-line/70 bg-paper-dim/60">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            Tidigare projekt
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink-soft">
            Ett urval av jobb vi är stolta över. Bilderna nedan är
            platshållare för den här demon — riktiga projektbilder läggs in
            vid lansering.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
