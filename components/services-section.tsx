import { IconBrush, IconBuilding, IconSign, IconSparkles } from "./icons";

const SERVICES = [
  {
    icon: IconSign,
    title: "Enseignes lumineuses",
    description:
      "Des enseignes sur-mesure, pensées pour capter le regard et signaler votre commerce, jour comme nuit.",
  },
  {
    icon: IconBrush,
    title: "Peinture & décoration",
    description:
      "Fresques, motifs et finitions peintes à la main pour donner du caractère à vos murs et façades.",
  },
  {
    icon: IconBuilding,
    title: "Décors intérieurs & extérieurs",
    description:
      "Habillage complet de vos espaces professionnels, à l’intérieur comme à l’extérieur.",
  },
  {
    icon: IconSparkles,
    title: "Installations artistiques",
    description:
      "Projets d’art public et installations originales pensées pour marquer les esprits.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#fbf7f2] py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
            Services
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
            Ce que nous créons pour vous
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/70">
            Un savoir-faire artistique au service de votre image, du concept
            à la réalisation.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-orange/10"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-orange to-brand-red text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
