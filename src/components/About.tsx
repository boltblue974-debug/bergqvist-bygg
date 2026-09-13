const STATS = [
  { value: '2009', label: 'Grundades' },
  { value: '11', label: 'Hantverkare' },
  { value: '230+', label: 'Avslutade projekt' },
]

export function About() {
  return (
    <section id="om-oss" className="border-y border-line/70 bg-paper-dim/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
        <div>
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            Grundat av två bröder som var trötta på slarv
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
            Anders och Mikael Bergqvist startade firman 2009 efter år som
            anställda snickare, med en enkel regel: gör det en gång, gör det
            rätt. Idag är vi elva hantverkare — snickare, elektriker och
            plattsättare — som fortfarande skriver under varje offert med
            eget namn.
          </p>
        </div>

        <dl className="flex flex-wrap gap-x-10 gap-y-6 lg:justify-end">
          {STATS.map((s) => (
            <div key={s.label}>
              <dt className="font-display text-3xl font-extrabold text-brick tabular-nums">
                {s.value}
              </dt>
              <dd className="mt-1 text-sm text-ink-soft">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
