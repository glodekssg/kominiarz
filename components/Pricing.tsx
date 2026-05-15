const plans = [
  {
    name: "Przegląd okresowy",
    price: "od 150 zł",
    desc: "Kontrola roczna jednego przewodu z protokołem.",
    features: [
      "Sprawdzenie drożności",
      "Pomiar ciągu kominowego",
      "Protokół do ubezpieczyciela",
      "Faktura VAT",
    ],
  },
  {
    name: "Czyszczenie + przegląd",
    price: "od 220 zł",
    desc: "Najczęściej zamawiana usługa dla domów jednorodzinnych.",
    features: [
      "Mechaniczne czyszczenie",
      "Usunięcie sadzy",
      "Protokół przeglądu",
      "Sprzątanie po pracy",
    ],
    highlighted: true,
  },
  {
    name: "Opinia kominiarska",
    price: "od 250 zł",
    desc: "Opinia do podłączenia gazu, kotła lub kominka.",
    features: [
      "Wizja lokalna",
      "Pomiary i inwentaryzacja",
      "Opinia w 2 dni robocze",
      "Wzór akceptowany przez PSG",
    ],
  },
];

export function Pricing() {
  return (
    <section id="cennik" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-brand font-semibold text-sm uppercase tracking-wide mb-3">
            Cennik
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Uczciwe ceny, bez ukrytych kosztów
          </h2>
          <p className="text-stone-600 text-lg">
            Wycena indywidualna dla bloków, kamienic i obiektów komercyjnych.
            Zadzwoń lub napisz — odpowiem szybko.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-8 border-2 ${
                p.highlighted
                  ? "border-brand bg-stone-900 text-white shadow-xl scale-105"
                  : "border-stone-200 bg-white"
              }`}
            >
              {p.highlighted && (
                <span className="inline-block bg-amber-400 text-stone-900 text-xs font-bold px-3 py-1 rounded-full mb-4">
                  NAJPOPULARNIEJSZE
                </span>
              )}
              <h3 className="text-xl font-bold mb-2">{p.name}</h3>
              <div
                className={`text-3xl font-bold mb-3 ${
                  p.highlighted ? "text-amber-400" : "text-brand"
                }`}
              >
                {p.price}
              </div>
              <p
                className={`text-sm mb-6 ${
                  p.highlighted ? "text-stone-300" : "text-stone-600"
                }`}
              >
                {p.desc}
              </p>
              <ul className="space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm">
                    <span
                      className={
                        p.highlighted ? "text-amber-400" : "text-brand"
                      }
                    >
                      ✓
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#kontakt"
                className={`block text-center rounded-full px-6 py-3 font-semibold transition-colors ${
                  p.highlighted
                    ? "bg-amber-400 text-stone-900 hover:bg-amber-300"
                    : "bg-stone-100 text-stone-900 hover:bg-stone-200"
                }`}
              >
                Zamów
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-stone-500 mt-8">
          Ceny dla domów jednorodzinnych na terenie Warszawy. Dojazd poza
          miasto wyceniany indywidualnie.
        </p>
      </div>
    </section>
  );
}
