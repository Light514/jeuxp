import { getDictionary } from "@/lib/i18n/dictionaries";
import { FAQContent } from "@/components/sections/faq/FAQContent";

export const metadata = {
  title: "Frequently Asked Questions | JeuXP",
  description:
    "All answers to your questions about JeuXP: pricing, reservations, minimum age, challenge duration, and more.",
};

export default async function FAQPageEN() {
  const dictionary = await getDictionary("en");
  return <FAQContent faq={dictionary.faq} />;
}
