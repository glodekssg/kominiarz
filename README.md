# Mistrz Kominiarski — strona firmowa

Strona internetowa dla kominiarza zbudowana w **Next.js 16 (App Router) + Tailwind v4**.

## Uruchomienie

```bash
pnpm install
pnpm dev
```

Strona dziala na http://localhost:3000.

## Struktura

- `app/page.tsx` — strona glowna skladajaca wszystkie sekcje
- `app/api/contact/route.ts` — endpoint formularza kontaktowego (loguje do konsoli)
- `components/` — sekcje: Navbar, Hero, Services, About, Pricing, Contact, Footer
- `app/globals.css` — motyw kolorow (paleta stone + amber)

## Co dostosowac przed publikacja

1. **Dane kontaktowe** — telefon, e-mail, adres, NIP. Szukaj `600 100 200`, `kontakt@mistrz-kominiarski.pl`, `ul. Kominowa 7`.
2. **Tresci** — imie, nazwisko, opis w `components/About.tsx`, liczby w statystykach.
3. **Mapa** — w `components/Contact.tsx` wspolrzedne `52.23, 21.01` (Warszawa). Podmien na docelowe.
4. **Formularz** — `app/api/contact/route.ts` aktualnie tylko loguje. Podlacz Resend / SMTP / webhook:

   ```ts
   // przyklad z Resend
   import { Resend } from "resend";
   const resend = new Resend(process.env.RESEND_API_KEY);
   await resend.emails.send({ /* ... */ });
   ```

5. **Metadata** — tytul, opis, slowa kluczowe w `app/layout.tsx`.
6. **Favicon** — podmien `app/favicon.ico`.

## Deploy

Najszybciej na Vercel:

```bash
pnpm dlx vercel
```
