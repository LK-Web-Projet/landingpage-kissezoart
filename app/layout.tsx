import type { Metadata } from "next";
import { Raleway, Permanent_Marker } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

const marker = Permanent_Marker({
  variable: "--font-marker",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kissêzo — Enseignes lumineuses & art décoratif",
  description:
    "Kissêzo est une entreprise d'art créative spécialisée dans la réalisation d'enseignes lumineuses, la peinture, les décors sur-mesure et les installations artistiques pour les entreprises.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${raleway.variable} ${marker.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink">
        {children}
      </body>
    </html>
  );
}
