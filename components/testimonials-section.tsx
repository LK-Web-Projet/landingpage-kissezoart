import { IconQuote, IconStar } from "./icons";

// TODO: remplacer par de vrais avis clients avant la mise en ligne
const TESTIMONIALS = [
  {
    quote:
      "Notre enseigne lumineuse a complètement changé la visibilité de notre boutique. Un travail soigné, du premier croquis à l’installation.",
    name: "Nathalie R.",
    role: "Gérante, Boutique Étoile",
  },
  {
    quote:
      "Une équipe créative et à l’écoute. Le décor peint dans notre restaurant fait aujourd’hui partie de notre identité.",
    name: "Marc D.",
    role: "Restaurateur",
  },
  {
    quote:
      "De l’idée à la réalisation, tout a été pensé pour notre image de marque. Le résultat dépasse nos attentes.",
    name: "Julie K.",
    role: "Fondatrice, Atelier Lumière",
  },
];

export function TestimonialsSection() {
  return (
    <section id="avis" className="bg-[#fbf7f2] py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
            Avis clients
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
            Ce que nos clients en disent
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <IconQuote className="h-7 w-7 text-brand-orange" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink/75">
                {t.quote}
              </blockquote>
              <div className="mt-5 flex items-center gap-0.5 text-brand-orange">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} className="h-4 w-4" />
                ))}
              </div>
              <figcaption className="mt-3">
                <p className="text-sm font-bold text-ink">{t.name}</p>
                <p className="text-xs text-ink/55">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
