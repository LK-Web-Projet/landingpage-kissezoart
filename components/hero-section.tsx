import Image from "next/image";
import Link from "next/link";
import { IconArrowRight } from "./icons";

const PILLS = [
  "Enseignes lumineuses",
  "Peinture & décoration",
  "Décors sur-mesure",
  "Installations artistiques",
];

export function HeroSection() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-ink text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full bg-gradient-to-br from-brand-orange to-brand-red opacity-25 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px] rounded-full bg-brand-red opacity-15 blur-[110px]"
      />
      <div
        aria-hidden
        className="bg-grain pointer-events-none absolute inset-0 opacity-40"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pb-24 pt-20 text-center sm:pb-28 sm:pt-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-orange">
          Atelier d&rsquo;art &amp; enseignes lumineuses
        </span>

        <h1 className="mt-8 max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl">
          Une identité qui{" "}
          <span className="text-glow bg-gradient-to-r from-brand-orange to-brand-red bg-clip-text text-transparent">
            ne s&rsquo;éteint jamais
          </span>
          .
        </h1>

        <p className="mt-6 max-w-2xl text-balance text-base text-white/70 sm:text-lg">
          De la peinture à l&rsquo;enseigne lumineuse, en passant par les décors
          sur-mesure et les installations artistiques : Kissêzo donne à votre
          entreprise une image forte, créative, qui lui ressemble.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="#realisations"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-orange to-brand-red px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-red/30 transition-transform hover:scale-[1.03]"
          >
            Voir nos réalisations
            <IconArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-brand-orange hover:text-brand-orange"
          >
            Demander un devis
          </Link>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
          {PILLS.map((pill) => (
            <span
              key={pill}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white/70"
            >
              {pill}
            </span>
          ))}
        </div>

        <Image
          src="/brand/feather-icon.png"
          alt=""
          aria-hidden
          width={512}
          height={512}
          className="pointer-events-none absolute -bottom-16 right-[6%] hidden w-40 rotate-6 opacity-[0.14] mix-blend-screen sm:block lg:w-56"
        />
      </div>
    </section>
  );
}
