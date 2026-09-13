const SERVICES = [
  {
    title: 'Nybyggnation',
    text: 'Från bygglov och ritning till nyckelfärdigt hus. Vi håller i hela kedjan eller går in som totalentreprenör på del av projektet.',
  },
  {
    title: 'Renovering',
    text: 'Kök, badrum eller hela hemmet. Vi river varsamt, bygger stabilt och lämnar arbetsplatsen städad varje dag.',
  },
  {
    title: 'Tillbyggnad',
    text: 'Mer yta utan att flytta. Vi tar hand om konstruktion, isolering och anslutning mot befintligt hus så att skarven aldrig syns.',
  },
  {
    title: 'Tak & fasad',
    text: 'Nytt tak, omläggning eller fasadrenovering. Täta, snygga ytor som klarar svenska vintrar i decennier.',
  },
]

export function Services() {
  return (
    <section id="tjanster" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="max-w-xl">
        <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
          Vad vi gör
        </h2>
        <p className="mt-3 text-base leading-relaxed text-ink-soft">
          Fyra områden, samma standard på allihop.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {SERVICES.map((s) => (
          <article
            key={s.title}
            className="group relative overflow-hidden rounded-sm border border-line bg-white/40 p-6 transition-[border-color,transform] duration-200 ease-out hover:-translate-y-1 hover:border-brick/40"
          >
            <span
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-brick transition-transform duration-200 ease-out group-hover:scale-y-100"
            />
            <h3 className="font-display text-lg font-bold text-ink">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
