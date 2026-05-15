export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="mx-auto max-w-6xl px-6 py-12 grid sm:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 font-semibold text-white text-lg mb-3">
            <span aria-hidden className="text-2xl">🧹</span>
            Mistrz Kominiarski
          </div>
          <p className="text-sm text-stone-400">
            Jan Kowalski · NIP 000-000-00-00 <br />
            ul. Kominowa 7, 00-001 Warszawa
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Kontakt</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="tel:+48600100200" className="hover:text-white">
                📞 600 100 200
              </a>
            </li>
            <li>
              <a
                href="mailto:kontakt@mistrz-kominiarski.pl"
                className="hover:text-white"
              >
                ✉️ kontakt@mistrz-kominiarski.pl
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Sekcje</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#uslugi" className="hover:text-white">Usługi</a></li>
            <li><a href="#o-mnie" className="hover:text-white">O mnie</a></li>
            <li><a href="#cennik" className="hover:text-white">Cennik</a></li>
            <li><a href="#kontakt" className="hover:text-white">Kontakt</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-stone-800 py-6 text-center text-xs text-stone-500">
        © {year} Mistrz Kominiarski Jan Kowalski. Wszystkie prawa zastrzeżone.
      </div>
    </footer>
  );
}
