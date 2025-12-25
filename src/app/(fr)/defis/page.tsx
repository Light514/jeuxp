import { getDictionary } from "@/lib/i18n/dictionaries";
import { Container } from "@/components/layout";

export const metadata = {
  title: "6 Défis immersifs | Centre JeuXP LaSalle",
  description:
    "Découvre nos 6 salles de défis : TOXIK, LZR-X, XPRESS, LZR-E, SYNK, IMPAK. Chaque défi dure 3 minutes. Teste tes réflexes, ton cardio et ta précision.",
};

export default async function ChallengesPage() {
  const dictionary = await getDictionary("fr");
  const { challenges } = dictionary;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-cyber-grid-bg bg-grid">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-display-lg text-white mb-4">
              {challenges.tagline}
            </h1>
            <p className="text-xl text-gray-400">{challenges.subtitle}</p>
          </div>
        </Container>
      </section>

      {/* Pillars Section */}
      <section className="py-16 bg-cyber-dark">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {challenges.pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="p-6 bg-cyber-gray/50 border border-cyber-gray-light rounded-sm text-center"
              >
                <h3 className="font-display text-lg text-neon-cyan mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-400">{pillar.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Challenges Grid */}
      <section className="py-16">
        <Container>
          <h2 className="font-display text-display-sm text-white mb-12 text-center">
            {challenges.roomsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.rooms.map((room) => (
              <div
                key={room.id}
                className="group relative overflow-hidden rounded-sm border border-cyber-gray-light bg-cyber-gray/30"
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={`/images/challenges/${room.image}`}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-cyber-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-display text-2xl text-white text-glow-cyan">
                      {room.name}
                    </h3>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <p className="text-sm text-gray-400">{room.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {room.type.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs border border-neon-cyan/50 text-neon-cyan rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-neon-magenta">{room.players}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Location */}
      <section className="py-16 bg-cyber-dark">
        <Container>
          <div className="text-center">
            <h2 className="font-display text-display-sm text-white mb-4">
              {challenges.location.title}
            </h2>
            <p className="text-lg text-neon-cyan">{challenges.location.mall}</p>
            <p className="text-gray-400">{challenges.location.address}</p>
            <a
              href="https://maps.app.goo.gl/V4vVvQNDdLXUpo9n8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-neon-cyan hover:text-neon-cyan/80 transition-colors"
            >
              {challenges.location.mapLink} &rarr;
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}
