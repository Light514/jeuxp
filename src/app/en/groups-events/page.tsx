import { getDictionary } from "@/lib/i18n/dictionaries";
import { GroupsEventsContent } from "@/components/sections/groups/GroupsEventsContent";

export const metadata = {
  title: "Team Building & Group Events | JeuXP Montreal",
  description:
    "Organize your birthday party, team building, or private event at JeuXP. Unique activities for groups of 10+ people.",
};

export default async function GroupsEventsPageEN() {
  const dictionary = await getDictionary("en");
  return <GroupsEventsContent groupsEvents={dictionary.groupsEvents} />;
}
