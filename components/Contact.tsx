import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="kontakt" className="py-20 sm:py-28 bg-stone-100">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <p className="text-brand font-semibold text-sm uppercase tracking-wide mb-3">
            Kontakt
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Umów wizytę lub zadaj pytanie
          </h2>
          <p className="text-stone-700 text-lg mb-8">
            Odbieram telefon w godzinach 7:00 – 20:00. Na maile i wiadomości
            odpowiadam tego samego dnia roboczego.
          </p>

          <div className="space-y-4 mb-8">
            <ContactItem icon="📞" label="Telefon" value="600 100 200" href="tel:+48600100200" />
            <ContactItem icon="✉️" label="E-mail" value="kontakt@mistrz-kominiarski.pl" href="mailto:kontakt@mistrz-kominiarski.pl" />
            <ContactItem icon="📍" label="Adres" value="ul. Kominowa 7, 00-001 Warszawa" />
            <ContactItem icon="🕐" label="Godziny" value="Pn–Sob 7:00 – 20:00 · Awarie 24/7" />
          </div>

          <div className="rounded-2xl overflow-hidden border border-stone-200 aspect-video bg-stone-200">
            <iframe
              title="Mapa lokalizacji"
              src="https://www.openstreetmap.org/export/embed.html?bbox=20.95%2C52.20%2C21.05%2C52.26&amp;layer=mapnik&amp;marker=52.23%2C21.01"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200">
          <h3 className="text-xl font-semibold mb-6">Formularz kontaktowy</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: string;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex gap-4 items-start">
      <span className="text-2xl">{icon}</span>
      <div>
        <div className="text-sm text-stone-500">{label}</div>
        <div className="font-medium text-stone-900">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block hover:text-brand transition-colors">
      {content}
    </a>
  ) : (
    content
  );
}
