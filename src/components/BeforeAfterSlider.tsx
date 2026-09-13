import { useCallback, useEffect, useRef, useState } from 'react'

interface Photo {
  src: string
  alt: string
}

interface Props {
  before: Photo
  after: Photo
}

const STEP = 5

export function BeforeAfterSlider({ before, after }: Props) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [pct, setPct] = useState(50)
  const [dragging, setDragging] = useState(false)
  const [hinted, setHinted] = useState(false)

  const updateFromClientX = useCallback((clientX: number) => {
    const el = trackRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const raw = ((clientX - rect.left) / rect.width) * 100
    setPct(Math.min(100, Math.max(0, raw)))
  }, [])

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    e.currentTarget.setPointerCapture(e.pointerId)
    setDragging(true)
    updateFromClientX(e.clientX)
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!dragging) return
    updateFromClientX(e.clientX)
  }

  function endDrag() {
    setDragging(false)
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === 'ArrowLeft') setPct((p) => Math.max(0, p - STEP))
    else if (e.key === 'ArrowRight') setPct((p) => Math.min(100, p + STEP))
    else if (e.key === 'Home') setPct(0)
    else if (e.key === 'End') setPct(100)
    else return
    e.preventDefault()
  }

  // One-shot discoverability nudge: plays once when the card first scrolls
  // into view, never repeats, and is skipped entirely under reduced motion.
  useEffect(() => {
    const el = trackRef.current
    if (!el || hinted) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHinted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [hinted])

  return (
    <div className="group">
      <div
        ref={trackRef}
        role="slider"
        tabIndex={0}
        aria-label="Jämför före och efter — dra eller använd piltangenterna"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pct)}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onKeyDown={onKeyDown}
        className="relative aspect-[4/3] cursor-ew-resize touch-none select-none overflow-hidden outline-none focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-brick"
      >
        <img
          src={after.src}
          alt={after.alt}
          draggable={false}
          loading="lazy"
          className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
        >
          <img
            src={before.src}
            alt={before.alt}
            draggable={false}
            loading="lazy"
            className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
          />
        </div>

        <div className="absolute left-3 top-3 rounded-sm bg-anthracite/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-paper">
          Exempelbild
        </div>
        <div className="pointer-events-none absolute left-3 bottom-3 rounded-sm bg-anthracite/70 px-2 py-1 text-[11px] font-medium text-paper">
          Före
        </div>
        <div className="pointer-events-none absolute right-3 bottom-3 rounded-sm bg-anthracite/70 px-2 py-1 text-[11px] font-medium text-paper">
          Efter
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 w-[2px] bg-paper/90"
          style={{ left: `${pct}%`, transform: 'translateX(-1px)' }}
        />
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute top-1/2 flex h-9 w-9 items-center justify-center rounded-full border-2 border-paper bg-brick text-paper shadow-[0_2px_8px_rgb(0_0_0_/_0.35)] transition-transform duration-150 ease-out group-hover:scale-[1.08] ${hinted ? 'handle-hint' : ''}`}
          style={{ left: `${pct}%`, transform: 'translate(-50%, -50%)' }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M5 3 L2 8 L5 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11 3 L14 8 L11 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  )
}
