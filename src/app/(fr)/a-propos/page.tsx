import { getDictionary } from "@/lib/i18n/dictionaries";
import { AboutContent } from "@/components/sections/about/AboutContent";

export const metadata = {
  title: "À propos de JeuXP | Notre mission et vision",
  description:
    "Découvrez l'histoire de JeuXP, premier centre de défis interactifs cyberpunk à Montréal.",
};

export default async function AboutPage() {
  const dictionary = await getDictionary("fr");
  return <AboutContent about={dictionary.about} />;
}
