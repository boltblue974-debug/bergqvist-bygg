export function Footer() {
  return (
    <footer className="border-t border-anthracite-2 bg-anthracite text-paper/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-display font-bold text-paper">
          Bergqvist<span className="text-brick">.</span>Bygg
        </p>
        <p>Org.nr 556XXX-XXXX</p>
        <p>&copy; {new Date().getFullYear()} Bergqvist Bygg AB</p>
      </div>
    </footer>
  )
}
