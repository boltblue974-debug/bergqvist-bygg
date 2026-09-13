import { heroPhoto } from '../lib/photos'

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <img
        src={heroPhoto.src}
        alt={heroPhoto.alt}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: '60% 50%' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-anthracite/92 via-anthracite/45 to-anthracite/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-anthracite/50 via-transparent to-transparent" />

      <div className="relative mx-auto flex min-h-[520px] max-w-6xl flex-col justify-end px-5 pb-14 pt-32 sm:min-h-[620px] sm:px-8 sm:pb-20 sm:pt-40">
        <h1
          className="hero-in hero-heading max-w-2xl font-display text-[clamp(2.1rem,5vw,3.4rem)] font-extrabold leading-[1.05] text-paper"
          style={{ animationDelay: '40ms' }}
        >
          Hantverk du kan lita på.
        </h1>
        <p
          className="hero-in mt-5 max-w-lg text-lg leading-relaxed text-paper/85"
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
            className="inline-block rounded-sm border border-paper/40 px-6 py-3.5 text-base font-semibold text-paper transition-colors duration-150 ease-out hover:border-paper/70 hover:bg-paper/10 active:scale-[0.97]"
          >
            Se våra projekt
          </a>
        </div>
        <p className="hero-in mt-6 text-sm text-paper/75" style={{ animationDelay: '300ms' }}>
          15 års erfarenhet, F-skattsedel och verksamma i hela Uppsala med omnejd.
        </p>
      </div>
    </section>
  )
}
