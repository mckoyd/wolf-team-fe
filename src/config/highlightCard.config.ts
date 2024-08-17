import { ReactComponent as PersonIcon } from "../assets/images/icon-person.svg";
import { ReactComponent as CogIcon } from "../assets/images/icon-cog.svg";
import { ReactComponent as ChartIcon } from "../assets/images/icon-chart.svg";
import { IHightlightCard } from "../interfaces";

export const highlightCardTitle =
  "Build & manage distributed teams like no one else.";

export const highlightCards: IHightlightCard[] = [
  {
    Icon: PersonIcon,
    title: "Experienced Individuals",
    description:
      "Our network is made up of highly experienced professionals who are passionate about what they do.",
  },
  {
    Icon: CogIcon,
    title: "Easy to Implement",
    description:
      "Our processes have been refined over years of implementation meaning our teams always deliver.",
  },
  {
    Icon: ChartIcon,
    title: "Enhanced Productivity",
    description:
      "Our customized platform with in-built analytics helps you manage your distributed teams.",
  },
];
