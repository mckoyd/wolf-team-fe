import { ReactComponent as FacebookIcon } from "../assets/images/icon-facebook.svg";
import { ReactComponent as PinterestIcon } from "../assets/images/icon-pinterest.svg";
import { ReactComponent as TwitterIcon } from "../assets/images/icon-twitter.svg";

export const homeHeroTitle = "Find the best";
export const homeHeroTitleSpan = "talent";
export const homeHeroSubtitle =
  "Finding the right people and building high performing teams can behard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.";

export const socialMediaIcons: React.FunctionComponent<
  React.SVGProps<SVGSVGElement>
>[] = [FacebookIcon, PinterestIcon, TwitterIcon];
