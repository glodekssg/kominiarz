const services = [
  {
    icon: "🧹",
    title: "Czyszczenie kominów",
    desc: "Mechaniczne usuwanie sadzy i smoły z kominów dymowych, spalinowych i wentylacyjnych.",
  },
  {
    icon: "📋",
    title: "Okresowe przeglądy",
    desc: "Kontrole roczne i półroczne wymagane przepisami prawa budowlanego z pełnym protokołem.",
  },
  {
    icon: "📝",
    title: "Opinie kominiarskie",
    desc: "Opinie do odbioru budynku, podłączenia kotła gazowego, kominka lub pieca.",
  },
  {
    icon: "🔥",
    title: "Frezowanie kominów",
    desc: "Usuwanie zastarzałej smoły i przygotowanie kanału pod wkład kominowy.",
  },
  {
    icon: "🛠️",
    title: "Inwentaryzacja i odbiory",
    desc: "Inwentaryzacja przewodów, odbiory końcowe i protokoły dla nowych budynków.",
  },
  {
    icon: "🦺",
    title: "Awarie i interwencje",
    desc: "Zapchany komin, cofający się dym, pożar sadzy — szybka reakcja 24/7.",
  },
];

export function Services() {
  return (
    <section id="uslugi" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-brand font-semibold text-sm uppercase tracking-wide mb-3">
            Usługi
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Kompleksowe usługi kominiarskie
          </h2>
          <p className="text-stone-600 text-lg">
            Od rutynowego czyszczenia po opinie dla nadzoru budowlanego —
            wszystko z jednej ręki.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-stone-200 bg-white p-6 hover:border-brand hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-brand transition-colors">
                {s.title}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
