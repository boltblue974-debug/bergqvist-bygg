import { projects } from '../lib/photos'
import { BeforeAfterSlider } from './BeforeAfterSlider'

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
            exempelbilder för den här demon — riktiga projektbilder läggs in
            vid lansering. Dra i reglaget för att se före och efter.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <figure key={p.title} className="overflow-hidden rounded-sm border border-line">
              {p.type === 'compare' ? (
                <BeforeAfterSlider before={p.before} after={p.after} />
              ) : (
                <div className="group relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.photo.src}
                    alt={p.photo.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 rounded-sm bg-anthracite/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-paper">
                    Exempelbild
                  </div>
                </div>
              )}
              <figcaption className="flex items-baseline justify-between gap-3 bg-white/50 px-4 py-3">
                <span className="text-sm font-semibold text-ink">{p.title}</span>
                <span className="text-xs text-ink-soft">
                  {p.place}, {p.year}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
