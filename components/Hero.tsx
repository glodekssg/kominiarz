export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900 text-white">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,white,transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block bg-amber-500/20 text-amber-200 px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase mb-6">
            Uprawniony Mistrz Kominiarski
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Bezpieczny komin <br />
            <span className="text-amber-400">to spokojny dom</span>
          </h1>
          <p className="text-lg text-stone-200 mb-8 max-w-lg">
            Profesjonalne czyszczenie kominów, okresowe przeglądy i opinie
            kominiarskie. Wystawiam protokoły akceptowane przez ubezpieczycieli
            i nadzór budowlany.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 text-stone-900 px-6 py-3 font-semibold hover:bg-amber-400 transition-colors"
            >
              Umów wizytę
            </a>
            <a
              href="tel:+48600100200"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-medium hover:bg-white/10 transition-colors"
            >
              📞 600 100 200
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-stone-300">
            <div className="flex items-center gap-2">
              <span className="text-amber-400">✓</span> 20 lat doświadczenia
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-400">✓</span> Faktury VAT
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-400">✓</span> Dojazd w 24h
            </div>
          </div>
        </div>
        <div className="hidden md:flex justify-center">
          <div className="relative w-80 h-80 rounded-full bg-amber-500/10 flex items-center justify-center text-9xl">
            🏠
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-amber-500 text-stone-900 flex flex-col items-center justify-center font-bold text-sm shadow-xl">
              <span className="text-2xl">24/7</span>
              <span>Awaria</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
