import { getDictionary } from "@/lib/i18n/dictionaries";
import { ChallengesContent } from "@/components/sections/challenges/ChallengesContent";

export const metadata = {
  title: "6 Immersive Challenges | JeuXP Center LaSalle",
  description:
    "Discover our 6 challenge rooms: TOXIK, LZR-X, XPRESS, LZR-E, SYNK, IMPAK. Each challenge lasts 3 minutes. Test your reflexes, cardio, and precision.",
};

export default async function ChallengesPageEN() {
  const dictionary = await getDictionary("en");
  return <ChallengesContent challenges={dictionary.challenges} />;
}
