import { getDictionary } from "@/lib/i18n/dictionaries";
import { Container } from "@/components/layout";
import { Accordion } from "@/components/ui";

export const metadata = {
  title: "Frequently Asked Questions | JeuXP",
  description:
    "All answers to your questions about JeuXP: pricing, reservations, minimum age, challenge duration, and more.",
};

export default async function FAQPageEN() {
  const dictionary = await getDictionary("en");
  const { faq } = dictionary;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-cyber-grid-bg bg-grid">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="font-display text-display-lg text-white mb-4">
              {faq.hero.title}
            </h1>
            <p className="text-xl text-gray-400">{faq.hero.subtitle}</p>
          </div>
        </Container>
      </section>

      {/* FAQ Sections */}
      <section className="py-16">
        <Container size="narrow">
          <div className="space-y-12">
            {faq.sections.map((section, index) => (
              <div key={index}>
                <h2 className="font-display text-xl text-neon-magenta mb-6">
                  {section.title}
                </h2>
                <Accordion items={section.items} />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
