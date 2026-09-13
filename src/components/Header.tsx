import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#om-oss', label: 'Om oss' },
  { href: '#tjanster', label: 'Tjänster' },
  { href: '#projekt', label: 'Projekt' },
  { href: '#kontakt', label: 'Kontakt' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [elevated, setElevated] = useState(false)

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      data-elevated={elevated}
      className="header-shell sticky top-0 z-40 bg-paper/90 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="font-display text-lg font-extrabold tracking-tight text-ink"
        >
          Bergqvist<span className="text-brick">.</span>Bygg
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-soft transition-colors duration-150 ease-out hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#kontakt"
            className="inline-block rounded-sm bg-brick px-5 py-2.5 text-sm font-semibold text-white transition-[transform,background-color] duration-150 ease-out hover:bg-brick-dark active:scale-[0.97]"
          >
            Få offert
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? 'Stäng meny' : 'Öppna meny'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-[2px] w-6 bg-ink transition-transform duration-200 ease-out ${open ? 'translate-y-[7px] rotate-45' : ''}`}
          />
          <span
            className={`h-[2px] w-6 bg-ink transition-opacity duration-150 ease-out ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`h-[2px] w-6 bg-ink transition-transform duration-200 ease-out ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
          />
        </button>
      </div>

      <div
        className={`grid overflow-hidden border-t border-line/70 transition-[grid-template-rows] duration-[220ms] ease-out md:hidden ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="min-h-0">
          <nav className="flex flex-col gap-1 px-5 py-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-sm px-2 py-2.5 text-sm font-medium text-ink-soft hover:bg-paper-dim hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-sm bg-brick px-4 py-2.5 text-center text-sm font-semibold text-white active:scale-[0.97]"
            >
              Få offert
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
