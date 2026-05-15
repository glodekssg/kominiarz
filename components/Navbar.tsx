import Link from "next/link";

const links = [
  { href: "#uslugi", label: "Usługi" },
  { href: "#o-mnie", label: "O mnie" },
  { href: "#cennik", label: "Cennik" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-stone-200">
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
          <span aria-hidden className="text-2xl">🧹</span>
          <span>Mistrz Kominiarski</span>
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-stone-700 hover:text-brand transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="tel:+48600100200"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-brand text-white px-4 py-2 text-sm font-medium hover:bg-brand-dark transition-colors"
        >
          📞 600 100 200
        </a>
      </nav>
    </header>
  );
}
