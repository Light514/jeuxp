import { getDictionary } from "@/lib/i18n/dictionaries";
import { GroupsEventsContent } from "@/components/sections/groups/GroupsEventsContent";

export const metadata = {
  title: "Team building et événements de groupe | JeuXP Montréal",
  description:
    "Organisez votre fête d'anniversaire, team building ou événement privé chez JeuXP. Activités uniques pour groupes de 10+ personnes.",
};

export default async function GroupsEventsPage() {
  const dictionary = await getDictionary("fr");
  return <GroupsEventsContent groupsEvents={dictionary.groupsEvents} />;
}
