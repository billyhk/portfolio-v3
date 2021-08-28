import { ApplicationState } from "../../interfaces/state";
import { ActionMap } from "../utils/action";

export enum ApplicationActionTypes {
  ToggleMenu = "TOGGLE_MENU",
  SetPageHeader = "SET_PAGE_HEADER",
}

export type ApplicationPayload = {
  [ApplicationActionTypes.ToggleMenu]: boolean;
  [ApplicationActionTypes.SetPageHeader]: string;
}

export type ApplicationActions =
  ActionMap<ApplicationPayload>[keyof ActionMap<ApplicationPayload>];

const applicationReducer = (
  state: ApplicationState,
  action: ApplicationActions
) => {
  const newState = { ...state };
  switch (action.type) {
    case ApplicationActionTypes.ToggleMenu:
      newState.isMenuOpen = action.payload as boolean;
      return newState;
    case ApplicationActionTypes.SetPageHeader:
      newState.pageHeader = action.payload as string;
      return newState;
  }
}

export default applicationReducer;
