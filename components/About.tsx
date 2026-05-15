export function About() {
  return (
    <section id="o-mnie" className="py-20 sm:py-28 bg-stone-100">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-brand font-semibold text-sm uppercase tracking-wide mb-3">
            O mnie
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Tradycja, którą można sprawdzić w rejestrze
          </h2>
          <p className="text-stone-700 text-lg mb-6 leading-relaxed">
            Nazywam się Jan Kowalski i od ponad 20 lat zajmuję się kominami —
            najpierw jako czeladnik u ojca, dziś jako mistrz kominiarski
            wpisany do rejestru Korporacji Kominiarzy Polskich.
          </p>
          <p className="text-stone-700 leading-relaxed mb-8">
            Pracuję na terenie Warszawy i okolic. Przyjeżdżam punktualnie, w
            mundurze kominiarskim, zostawiam czystość po pracy i wystawiam
            pełną dokumentację — taką, jakiej oczekuje ubezpieczyciel po
            ewentualnym zdarzeniu.
          </p>
          <ul className="space-y-3 text-stone-700">
            <li className="flex gap-3">
              <span className="text-brand font-bold">→</span>
              Świadectwo czeladnicze i dyplom mistrzowski w zawodzie kominiarz
            </li>
            <li className="flex gap-3">
              <span className="text-brand font-bold">→</span>
              Członek Korporacji Kominiarzy Polskich (nr leg. 12345)
            </li>
            <li className="flex gap-3">
              <span className="text-brand font-bold">→</span>
              Ubezpieczenie OC zawodu na 200 000 zł
            </li>
            <li className="flex gap-3">
              <span className="text-brand font-bold">→</span>
              Uprawnienia do wystawiania opinii dla PSG i administracji
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <Stat value="20+" label="lat doświadczenia" />
          <Stat value="3500+" label="przeglądów rocznie" />
          <Stat value="100%" label="protokołów akceptowanych" />
          <Stat value="24h" label="czas reakcji na awarię" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
      <div className="text-3xl sm:text-4xl font-bold text-brand mb-1">
        {value}
      </div>
      <div className="text-sm text-stone-600">{label}</div>
    </div>
  );
}
