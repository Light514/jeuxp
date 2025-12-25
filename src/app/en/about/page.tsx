import { getDictionary } from "@/lib/i18n/dictionaries";
import { AboutContent } from "@/components/sections/about/AboutContent";

export const metadata = {
  title: "About JeuXP | Our Mission and Vision",
  description:
    "Discover JeuXP's story, Montreal's first interactive cyberpunk challenge center.",
};

export default async function AboutPageEN() {
  const dictionary = await getDictionary("en");
  return <AboutContent about={dictionary.about} />;
}
