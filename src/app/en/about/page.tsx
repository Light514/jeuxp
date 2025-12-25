import { getDictionary } from "@/lib/i18n/dictionaries";
import { Container } from "@/components/layout";

export const metadata = {
  title: "About JeuXP | Our Mission and Vision",
  description:
    "Discover JeuXP's story, Montreal's first interactive cyberpunk challenge center.",
};

export default async function AboutPageEN() {
  const dictionary = await getDictionary("en");
  const { about } = dictionary;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-cyber-grid-bg bg-grid">
        <Container>
          <div className="text-center">
            <h1 className="font-display text-display-lg text-white mb-4">
              {about.hero.title}
            </h1>
            <p className="text-xl text-neon-cyan">{about.hero.slogan}</p>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section className="py-16">
        <Container size="narrow">
          <h2 className="font-display text-display-sm text-neon-cyan mb-8">
            {about.mission.title}
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            {about.mission.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </section>

      {/* Differentiators */}
      <section className="py-16 bg-cyber-dark">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {about.differentiators.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-cyber-gray/50 border border-cyber-gray-light rounded-sm"
              >
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="font-display text-lg text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Vision */}
      <section className="py-16">
        <Container size="narrow">
          <h2 className="font-display text-display-sm text-neon-magenta mb-8">
            {about.vision.title}
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            {about.vision.content}
          </p>
        </Container>
      </section>
    </div>
  );
}
