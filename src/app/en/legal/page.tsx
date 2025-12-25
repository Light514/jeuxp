import { getDictionary } from "@/lib/i18n/dictionaries";
import { Container } from "@/components/layout";

export const metadata = {
  title: "Terms and Conditions | JeuXP",
  description: "Rules, terms of use, and privacy policy for JeuXP.",
};

export default async function LegalPageEN() {
  const dictionary = await getDictionary("en");
  const { legal } = dictionary;

  return (
    <div className="pt-20">
      <section className="py-20">
        <Container size="narrow">
          <h1 className="font-display text-display-lg text-white mb-12 text-center">
            {legal.title}
          </h1>

          {/* Rules */}
          <div className="mb-12">
            <h2 className="font-display text-xl text-neon-cyan mb-6">
              {legal.rules.title}
            </h2>
            <ul className="space-y-4">
              {legal.rules.items.map((item, index) => (
                <li key={index} className="text-gray-300 pl-4 border-l-2 border-cyber-gray-light">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Terms */}
          <div className="mb-12">
            <h2 className="font-display text-xl text-neon-magenta mb-6">
              {legal.terms.title}
            </h2>
            <ul className="space-y-4">
              {legal.terms.items.map((item, index) => (
                <li key={index} className="text-gray-300 pl-4 border-l-2 border-cyber-gray-light">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Privacy */}
          <div>
            <h2 className="font-display text-xl text-neon-yellow mb-6">
              {legal.privacy.title}
            </h2>
            <ul className="space-y-4">
              {legal.privacy.items.map((item, index) => (
                <li key={index} className="text-gray-300 pl-4 border-l-2 border-cyber-gray-light">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </div>
  );
}
