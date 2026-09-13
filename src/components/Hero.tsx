function RoofMark() {
  return (
    <svg
      viewBox="0 0 420 340"
      className="h-auto w-full max-w-md"
      role="img"
      aria-label="Illustration av en takstol under uppbyggnad, med vattenpass och måttband."
    >
      <rect x="0" y="0" width="420" height="340" rx="6" fill="var(--color-paper-dim)" />

      {/* ground line */}
      <line x1="40" y1="280" x2="380" y2="280" stroke="var(--color-ink)" strokeWidth="2" strokeLinecap="round" />

      {/* roof truss */}
      <polyline
        points="80,280 210,90 340,280"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="130" y1="204" x2="290" y2="204" stroke="var(--color-ink)" strokeWidth="6" strokeLinecap="round" />
      <line x1="210" y1="90" x2="210" y2="280" stroke="var(--color-brick)" strokeWidth="6" strokeLinecap="round" />

      {/* support posts */}
      <line x1="80" y1="280" x2="80" y2="250" stroke="var(--color-ink)" strokeWidth="6" strokeLinecap="round" />
      <line x1="340" y1="280" x2="340" y2="250" stroke="var(--color-ink)" strokeWidth="6" strokeLinecap="round" />

      {/* nails / joints */}
      <circle cx="210" cy="90" r="6" fill="var(--color-brick)" />
      <circle cx="130" cy="204" r="6" fill="var(--color-copper)" />
      <circle cx="290" cy="204" r="6" fill="var(--color-copper)" />
      <circle cx="210" cy="280" r="6" fill="var(--color-copper)" />

      {/* spirit level, resting on the tie beam */}
      <g transform="translate(150 158)">
        <rect x="0" y="0" width="120" height="20" rx="4" fill="none" stroke="var(--color-ink)" strokeWidth="3" />
        <circle cx="60" cy="10" r="7" fill="none" stroke="var(--color-brick)" strokeWidth="2.5" />
        <circle cx="60" cy="10" r="2.5" fill="var(--color-brick)" />
      </g>

      {/* measuring tape arc, off to the side */}
      <g transform="translate(300 40)" stroke="var(--color-ink-soft)" strokeWidth="2.5" fill="none">
        <path d="M0 40 Q 40 0 78 34" strokeLinecap="round" />
        <circle cx="0" cy="40" r="10" fill="var(--color-paper)" stroke="var(--color-ink-soft)" />
      </g>
    </svg>
  )
}

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <h1
            className="hero-in hero-heading font-display text-[clamp(2.1rem,5vw,3.4rem)] font-extrabold leading-[1.05] text-ink"
            style={{ animationDelay: '40ms' }}
          >
            Hantverk du kan lita på.
          </h1>
          <p
            className="hero-in mt-5 max-w-lg text-lg leading-relaxed text-ink-soft"
            style={{ animationDelay: '140ms' }}
          >
            Bergqvist Bygg bygger, renoverar och bygger till hem och lokaler i
            Uppsala med omnejd — noggrant, i tid och utan överraskningar på
            slutfakturan.
          </p>
          <div className="hero-in mt-8 flex flex-wrap gap-3" style={{ animationDelay: '240ms' }}>
            <a
              href="#kontakt"
              className="inline-block rounded-sm bg-brick px-6 py-3.5 text-base font-semibold text-white transition-[transform,background-color] duration-150 ease-out hover:bg-brick-dark active:scale-[0.97]"
            >
              Få offert
            </a>
            <a
              href="#projekt"
              className="inline-block rounded-sm border border-ink/20 px-6 py-3.5 text-base font-semibold text-ink transition-colors duration-150 ease-out hover:border-ink/40 hover:bg-paper-dim active:scale-[0.97]"
            >
              Se våra projekt
            </a>
          </div>
          <p className="hero-in mt-6 text-sm text-ink-soft" style={{ animationDelay: '300ms' }}>
            15 års erfarenhet, F-skattsedel och verksamma i hela Uppsala med omnejd.
          </p>
        </div>

        <div className="hero-in" style={{ animationDelay: '180ms' }}>
          <RoofMark />
        </div>
      </div>
    </section>
  )
}
