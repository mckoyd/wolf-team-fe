import React from "react";

export interface IMenuDrawer {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export interface IMenuNavLink {
  label: string;
  relativeLink: string;
}

export interface IHightlightCard {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export interface ICardDataResponse {
  fullName: string;
  imageUrl: string;
  jobTitle: string;
  description: string;
  __v: string;
  __id: string;
}

export interface IHeroSection {
  heroTitle: string;
  heroTitleSpan?: string;
  heroSubtitle: string;
  HeroBg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  heroBgOrientation?: string;
}
