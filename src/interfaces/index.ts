export interface IMenuDrawer {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export interface IMenuNavLink {
  label: string;
  relativeLink: string;
}
