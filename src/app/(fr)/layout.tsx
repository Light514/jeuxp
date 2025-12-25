import { Header, Footer } from "@/components/layout";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function FrenchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dictionary = await getDictionary("fr");

  return (
    <>
      <Header dictionary={dictionary.nav} />
      <main id="main-content">{children}</main>
      <Footer dictionary={dictionary.footer} />
    </>
  );
}
