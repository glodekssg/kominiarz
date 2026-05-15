"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl bg-green-50 border border-green-200 p-6 text-center">
        <div className="text-4xl mb-3">✓</div>
        <h4 className="font-semibold text-green-900 mb-1">
          Dziękuję za wiadomość!
        </h4>
        <p className="text-sm text-green-800">
          Odezwę się najpóźniej następnego dnia roboczego.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Field name="name" label="Imię i nazwisko" required />
      <Field name="phone" label="Telefon" type="tel" required />
      <Field name="email" label="E-mail" type="email" />
      <div>
        <label htmlFor="service" className="block text-sm font-medium mb-1.5">
          Usługa
        </label>
        <select
          id="service"
          name="service"
          className="w-full rounded-lg border border-stone-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
          defaultValue=""
        >
          <option value="" disabled>Wybierz…</option>
          <option>Przegląd okresowy</option>
          <option>Czyszczenie + przegląd</option>
          <option>Opinia kominiarska</option>
          <option>Frezowanie komina</option>
          <option>Awaria / interwencja</option>
          <option>Inne</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5">
          Wiadomość
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-lg border border-stone-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
          placeholder="Adres budynku, liczba przewodów, dogodny termin…"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Nie udało się wysłać. Zadzwoń pod 600 100 200.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-brand text-white px-6 py-3 font-semibold hover:bg-brand-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Wysyłam…" : "Wyślij zapytanie"}
      </button>
      <p className="text-xs text-stone-500 text-center">
        Wysyłając formularz akceptujesz przetwarzanie danych w celu odpowiedzi
        na zapytanie.
      </p>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-1.5">
        {label}
        {required && <span className="text-brand"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-stone-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
      />
    </div>
  );
}
