import { useState, type FormEvent } from 'react'
import { toast } from 'sonner'

function fakeSubmit(): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, 900))
}

export function Contact() {
  const [pending, setPending] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (pending) return
    setPending(true)

    const form = e.currentTarget
    toast.promise(fakeSubmit(), {
      loading: 'Skickar din förfrågan…',
      success: () => {
        setPending(false)
        form.reset()
        return {
          message: 'Tack! Vi hör av oss inom en arbetsdag.',
        }
      },
      error: () => {
        setPending(false)
        return 'Något gick fel — försök igen om en stund.'
      },
    })
  }

  return (
    <section id="kontakt" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div>
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            Få en offert
          </h2>
          <p className="mt-3 max-w-md text-base leading-relaxed text-ink-soft">
            Berätta kort vad du behöver hjälp med, så återkommer vi med en
            offert eller ett förslag på hembesök.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 max-w-md" noValidate>
            <div className="mb-4">
              <label htmlFor="namn" className="mb-1.5 block text-sm font-medium text-ink">
                Namn
              </label>
              <input
                id="namn"
                name="namn"
                type="text"
                required
                autoComplete="name"
                className="field w-full rounded-sm border border-line bg-white/60 px-3.5 py-2.5 text-ink outline-none placeholder:text-ink-soft/60"
                placeholder="För- och efternamn"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="telefon" className="mb-1.5 block text-sm font-medium text-ink">
                Telefon
              </label>
              <input
                id="telefon"
                name="telefon"
                type="tel"
                required
                autoComplete="tel"
                className="field w-full rounded-sm border border-line bg-white/60 px-3.5 py-2.5 text-ink outline-none placeholder:text-ink-soft/60"
                placeholder="070-123 45 67"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="meddelande" className="mb-1.5 block text-sm font-medium text-ink">
                Meddelande
              </label>
              <textarea
                id="meddelande"
                name="meddelande"
                required
                rows={4}
                className="field w-full resize-none rounded-sm border border-line bg-white/60 px-3.5 py-2.5 text-ink outline-none placeholder:text-ink-soft/60"
                placeholder="Vad vill du bygga, renovera eller bygga till?"
              />
            </div>

            <button
              type="submit"
              disabled={pending}
              className="w-full rounded-sm bg-brick px-6 py-3.5 text-base font-semibold text-white transition-[transform,background-color,opacity] duration-150 ease-out hover:bg-brick-dark active:scale-[0.97] disabled:opacity-60"
            >
              <span className="label-swap">
                <span aria-hidden={pending} style={{ opacity: pending ? 0 : 1 }}>
                  Skicka förfrågan
                </span>
                <span aria-hidden={!pending} style={{ opacity: pending ? 1 : 0 }}>
                  Skickar…
                </span>
              </span>
            </button>
          </form>
        </div>

        <div className="rounded-sm border border-line bg-anthracite p-7 text-paper h-fit">
          <p className="font-display text-lg font-bold">Bergqvist Bygg AB</p>
          <dl className="mt-4 space-y-3 text-sm text-paper/80">
            <div>
              <dt className="sr-only">Adress</dt>
              <dd>Verkstadsgatan 12, 753 23 Uppsala</dd>
            </div>
            <div>
              <dt className="sr-only">Telefon</dt>
              <dd>
                <a href="tel:018123456" className="hover:text-paper">
                  018-12 34 56
                </a>
              </dd>
            </div>
            <div>
              <dt className="sr-only">E-post</dt>
              <dd>
                <a href="mailto:info@bergqvistbygg.se" className="hover:text-paper">
                  info@bergqvistbygg.se
                </a>
              </dd>
            </div>
            <div>
              <dt className="sr-only">Öppettider</dt>
              <dd>Mån–fre 07.00–16.00</dd>
            </div>
            <div>
              <dt className="sr-only">Org.nr</dt>
              <dd className="text-paper/60">Org.nr 556XXX-XXXX. Innehar F-skattsedel.</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
