import Image from "next/image";

export function AboutSection() {
  return (
    <section id="apropos" className="bg-white py-24 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
            À propos
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
            L&rsquo;art qui porte votre image
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink/70">
            Kissêzo est une entreprise d&rsquo;art innovante et créative, née
            d&rsquo;une passion pour l&rsquo;expression artistique sous toutes
            ses formes. Nous concevons des enseignes lumineuses sur-mesure,
            des œuvres uniques et des installations qui donnent du caractère
            à votre commerce ou votre entreprise.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink/70">
            Peinture, enseignes, décors intérieurs et extérieurs, art public :
            nous travaillons avec des médiums variés pour habiller vos espaces
            et faire rayonner votre image de marque, jour comme nuit.
          </p>

          <div className="mt-8 flex items-start gap-4 rounded-2xl border border-brand-orange/20 bg-brand-orange/5 p-5">
            <Image
              src="/brand/feather-icon.png"
              alt=""
              aria-hidden
              width={512}
              height={512}
              className="h-10 w-10 shrink-0"
            />
            <p className="text-sm leading-relaxed text-ink/70">
              <span className="font-bold text-ink">
                Pourquoi « Kissêzo » ?
              </span>{" "}
              Le nom vient d&rsquo;une plume de perroquet, symbole d&rsquo;un
              art dont la couleur et l&rsquo;éclat ne s&rsquo;éteignent
              jamais.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-orange via-brand-orange-dark to-brand-red p-1.5 shadow-xl shadow-brand-orange/20">
            <div className="flex aspect-[4/5] items-center justify-center rounded-[calc(1.5rem-6px)] bg-ink">
              <Image
                src="/brand/feather-icon.png"
                alt="Symbole Kissêzo, la plume de perroquet"
                width={512}
                height={512}
                className="w-40 opacity-90 sm:w-56"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
