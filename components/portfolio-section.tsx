"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IconCamera } from "./icons";

type Project = {
  slug: string;
  name: string;
  category: string;
  count: number;
};

const PROJECTS: Project[] = [
  {
    slug: "autosp",
    name: "AUTOSP’",
    category: "Enseigne lumineuse — Garage automobile",
    count: 4,
  },
  {
    slug: "residence-mga",
    name: "Résidence MGA",
    category: "Plaque gravée — Hôtel & restaurant",
    count: 9,
  },
  {
    slug: "sculpture-bois",
    name: "Sculpture sur bois",
    category: "Pièces sculptées à la main",
    count: 5,
  },
  {
    slug: "novabat",
    name: "NOVABAT",
    category: "Enseigne 3D — BTP & découpe laser",
    count: 2,
  },
  {
    slug: "roy",
    name: "ROY",
    category: "Gravure personnalisée",
    count: 1,
  },
  {
    slug: "fate-et-grace",
    name: "Fate & Grâce",
    category: "Enseigne — Boulangerie, glacier, restaurant & bar",
    count: 1,
  },
  {
    slug: "magic-styl",
    name: "Magic Style",
    category: "Enseigne — Boutique mèches & accessoires",
    count: 1,
  },
];

function GalleryTile({ project }: { project: Project }) {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  function handleEnter() {
    if (project.count <= 1) return;
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % project.count);
    }, 1100);
  }

  function handleLeave() {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
    setActive(0);
  }

  const images = Array.from(
    { length: project.count },
    (_, i) => `/realisations/${project.slug}/${String(i + 1).padStart(2, "0")}.jpg`
  );

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink shadow-sm"
    >
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`${project.name} — ${project.category}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={`object-cover transition-opacity duration-700 ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent transition-opacity duration-300 group-hover:from-black/85" />

      {project.count > 1 && (
        <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-black/35 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">
          <IconCamera className="h-3.5 w-3.5" />
          {project.count}
        </span>
      )}

      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-white/75">
          {project.category}
        </p>
        <p className="mt-1 text-lg font-bold text-white">{project.name}</p>

        {project.count > 1 && (
          <div className="mt-3 flex gap-1.5">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === active ? "w-5 bg-brand-orange" : "w-1.5 bg-white/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function PortfolioSection() {
  return (
    <section id="realisations" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
            Réalisations
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
            Nos dernières créations
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/70">
            Enseignes lumineuses, plaques gravées, sculptures sur bois...
            quelques projets récents réalisés pour nos clients. Survolez une
            vignette pour découvrir les autres photos du projet.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <GalleryTile key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
