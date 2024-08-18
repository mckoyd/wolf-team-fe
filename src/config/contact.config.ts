import { ReactComponent as PersonIcon } from "../assets/images/icon-person.svg";
import { ReactComponent as CogIcon } from "../assets/images/icon-cog.svg";
import { ReactComponent as ChartIcon } from "../assets/images/icon-chart.svg";
import { IQualification } from "../interfaces";

export const qualifications: IQualification[] = [
  {
    Icon: PersonIcon,
    description: "The quality of our talent network",
  },
  {
    Icon: CogIcon,
    description: "Usage & implementation of our software",
  },
  {
    Icon: ChartIcon,
    description: "How we help drive innovation",
  },
];
