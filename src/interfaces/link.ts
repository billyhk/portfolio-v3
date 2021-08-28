export interface ILink {
  to: string;
  name: string;
  id: string;
  showInNav: boolean;
  component: () => JSX.Element;
  icon?: (isMenuOpen: boolean) => JSX.Element;
}