import { Header, Footer } from "@/components/layout";
import { getDictionary } from "@/lib/i18n/dictionaries";

export const metadata = {
  title: "Challenge Rooms in Montreal | JeuXP - Immersive Cyberpunk Challenges",
  description:
    "New gaming concept in Montreal. 6 immersive 3-minute challenges. Earn XP, level up, become a legend. Carrefour Angrignon, LaSalle.",
};

export default async function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dictionary = await getDictionary("en");

  return (
    <>
      <Header dictionary={dictionary.nav} />
      <main id="main-content">{children}</main>
      <Footer dictionary={dictionary.footer} />
    </>
  );
}
