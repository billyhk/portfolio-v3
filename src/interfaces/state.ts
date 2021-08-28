import { ILink } from "./link";
export interface ApplicationState {
  isMenuOpen: boolean;
  pageHeader: string;
  links: ILink[];
}