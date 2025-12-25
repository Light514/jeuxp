import { getDictionary } from "@/lib/i18n/dictionaries";
import { Container } from "@/components/layout";

export const metadata = {
  title: "Team building et événements de groupe | JeuXP Montréal",
  description:
    "Organisez votre fête d'anniversaire, team building ou événement privé chez JeuXP. Activités uniques pour groupes de 10+ personnes.",
};

export default async function GroupsEventsPage() {
  const dictionary = await getDictionary("fr");
  const { groupsEvents } = dictionary;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-cyber-grid-bg bg-grid">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-display-lg text-white mb-4">
              {groupsEvents.hero.title}
            </h1>
            <p className="text-xl text-gray-400">
              {groupsEvents.hero.subtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* Intro */}
      <section className="py-16">
        <Container size="narrow">
          <p className="text-gray-300 leading-relaxed text-lg text-center">
            {groupsEvents.intro}
          </p>
        </Container>
      </section>

      {/* Event Types */}
      <section className="py-16 bg-cyber-dark">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {groupsEvents.eventTypes.map((event, index) => (
              <div
                key={index}
                className="p-6 bg-cyber-gray/50 border border-cyber-gray-light rounded-sm text-center"
              >
                <span className="text-4xl mb-4 block">{event.icon}</span>
                <h3 className="font-display text-lg text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-400">{event.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {groupsEvents.benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 border border-neon-cyan/20 rounded-sm"
              >
                <h3 className="font-display text-lg text-neon-cyan mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 bg-cyber-dark">
        <Container size="narrow">
          <div className="text-center mb-12">
            <h2 className="font-display text-display-sm text-white mb-4">
              {groupsEvents.form.title}
            </h2>
            <p className="text-gray-400">{groupsEvents.form.subtitle}</p>
          </div>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {groupsEvents.form.fields.name}
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-cyber-gray border border-cyber-gray-light rounded-sm text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {groupsEvents.form.fields.email}
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-cyber-gray border border-cyber-gray-light rounded-sm text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {groupsEvents.form.fields.eventType}
              </label>
              <select className="w-full px-4 py-3 bg-cyber-gray border border-cyber-gray-light rounded-sm text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan">
                {Object.entries(groupsEvents.form.eventOptions).map(
                  ([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  )
                )}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {groupsEvents.form.fields.participants}
              </label>
              <input
                type="number"
                min="1"
                className="w-full px-4 py-3 bg-cyber-gray border border-cyber-gray-light rounded-sm text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {groupsEvents.form.fields.message}
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-cyber-gray border border-cyber-gray-light rounded-sm text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-neon-cyan text-cyber-black font-display font-semibold uppercase tracking-wider rounded-sm hover:shadow-neon-cyan transition-shadow"
            >
              {groupsEvents.form.submit}
            </button>
          </form>
        </Container>
      </section>
    </div>
  );
}
