import { getDictionary } from "@/lib/i18n/dictionaries";
import { FAQContent } from "@/components/sections/faq/FAQContent";

export const metadata = {
  title: "Questions fréquentes | JeuXP",
  description:
    "Toutes les réponses à vos questions sur JeuXP : tarifs, réservation, âge minimum, durée des défis et plus encore.",
};

export default async function FAQPage() {
  const dictionary = await getDictionary("fr");
  return <FAQContent faq={dictionary.faq} />;
}
