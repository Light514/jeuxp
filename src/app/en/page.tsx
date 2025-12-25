import { getDictionary } from "@/lib/i18n/dictionaries";
import { HeroSection } from "@/components/sections/hero";

export default async function HomePageEN() {
  const dictionary = await getDictionary("en");

  return (
    <HeroSection
      announcement={dictionary.home.announcement}
      ctaText={dictionary.home.cta}
      ctaHref="/en/challenges"
    />
  );
}
