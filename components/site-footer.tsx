import Image from "next/image";
import Link from "next/link";
import { IconFacebook, IconInstagram, IconTiktok } from "./icons";

const LINKS = [
  { href: "#accueil", label: "Accueil" },
  { href: "#apropos", label: "À propos" },
  { href: "#services", label: "Services" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#avis", label: "Avis clients" },
  { href: "#contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="inline-flex rounded-xl bg-white p-3">
              <Image
                src="/brand/logo.png"
                alt="Kissêzo"
                width={520}
                height={206}
                className="h-8 w-auto"
              />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              Atelier d&rsquo;art créatif spécialisé dans les enseignes
              lumineuses, la peinture, les décors et les installations
              artistiques sur-mesure.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {/* TODO: remplacer par les vrais liens des réseaux sociaux */}
              <Link
                href="https://www.facebook.com/profile.php?id=100094552705151"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-orange hover:text-ink"
              >
                <IconFacebook className="h-4 w-4" />
              </Link>
              <Link
                href="https://www.instagram.com/kissezoservices"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-orange hover:text-ink"
              >
                <IconInstagram className="h-4 w-4" />
              </Link>
              <Link
                href="https://www.tiktok.com/@kisszo.services?_r=1&_t=ZS-99IdJYNJaZm"
                aria-label="TikTok"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-orange hover:text-ink"
              >
                <IconTiktok className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold text-white">Navigation</p>
            <ul className="mt-4 space-y-2.5">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-brand-orange"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold text-white">Contact</p>
            {/* TODO: remplacer par les vraies coordonnées */}
            <ul className="mt-4 space-y-2.5 text-sm text-white/60">
              <li>+229 0166619404</li>
              <li>kissezoservices@gmail.com</li>
              <li>Atrokpocodji, Abomey-Calavi, Bénin</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/45 sm:flex-row">
          <p>© 2026 Kissêzo. Tous droits réservés.</p>
          <p>Peinture · Enseignes lumineuses · Décors · Installations artistiques</p>
        </div>
      </div>
    </footer>
  );
}
