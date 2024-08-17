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
