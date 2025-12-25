import { getDictionary } from "@/lib/i18n/dictionaries";
import { ChallengesContent } from "@/components/sections/challenges/ChallengesContent";

export const metadata = {
  title: "6 Défis immersifs | Centre JeuXP LaSalle",
  description:
    "Découvre nos 6 salles de défis : TOXIK, LZR-X, XPRESS, LZR-E, SYNK, IMPAK. Chaque défi dure 3 minutes. Teste tes réflexes, ton cardio et ta précision.",
};

export default async function ChallengesPage() {
  const dictionary = await getDictionary("fr");
  return <ChallengesContent challenges={dictionary.challenges} />;
}
