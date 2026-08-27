"use client";

import { FormEvent, useState } from "react";
import { IconMail, IconPhone, IconPin } from "./icons";

// TODO: remplacer par les vraies coordonnées de l'entreprise
const CONTACT_INFO = [
  { icon: IconPhone, label: "+00 0 00 00 00 00" },
  { icon: IconMail, label: "contact@kissezo.com" },
  { icon: IconPin, label: "Adresse à définir" },
];

export function ContactSection() {
  const [sent, setSent] = useState(false);

  // TODO: brancher un vrai envoi (API route / service d'e-mail) avant mise en ligne
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
            Contact
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
            Discutons de votre projet
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/70">
            Une enseigne, un décor, une envie d&rsquo;art sur-mesure ? Parlez-nous
            de votre projet, nous revenons vers vous rapidement.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:gap-14">
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-ink p-8 text-white">
              <h3 className="text-lg font-bold">Nos coordonnées</h3>
              <ul className="mt-6 space-y-4">
                {CONTACT_INFO.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-orange">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm text-white/80">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-2xl border border-black/5 bg-[#fbf7f2] p-8"
          >
            {sent ? (
              <div className="flex h-full min-h-[280px] flex-col items-center justify-center text-center">
                <p className="text-lg font-bold text-ink">
                  Merci pour votre message !
                </p>
                <p className="mt-2 text-sm text-ink/65">
                  Nous revenons vers vous rapidement.
                </p>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5 text-sm font-medium text-ink/80">
                  Nom
                  <input
                    required
                    name="name"
                    type="text"
                    className="rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm text-ink outline-none focus:border-brand-orange"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-sm font-medium text-ink/80">
                  Email
                  <input
                    required
                    name="email"
                    type="email"
                    className="rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm text-ink outline-none focus:border-brand-orange"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-sm font-medium text-ink/80 sm:col-span-2">
                  Téléphone
                  <input
                    name="phone"
                    type="tel"
                    className="rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm text-ink outline-none focus:border-brand-orange"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-sm font-medium text-ink/80 sm:col-span-2">
                  Votre projet
                  <textarea
                    required
                    name="message"
                    rows={5}
                    className="resize-none rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm text-ink outline-none focus:border-brand-orange"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex w-fit items-center justify-center rounded-full bg-gradient-to-r from-brand-orange to-brand-red px-7 py-3 text-sm font-semibold text-white shadow-sm shadow-brand-orange/30 transition-transform hover:scale-[1.03] sm:col-span-2"
                >
                  Envoyer le message
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
