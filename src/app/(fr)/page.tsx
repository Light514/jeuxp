import { getDictionary } from "@/lib/i18n/dictionaries";
import { HeroSection } from "@/components/sections/hero";

export default async function HomePage() {
  const dictionary = await getDictionary("fr");

  return (
    <HeroSection
      announcement={dictionary.home.announcement}
      tagline={dictionary.home.tagline}
      ctaText={dictionary.home.cta}
      ctaHref="/defis"
    />
  );
}
