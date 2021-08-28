import { ApplicationActionTypes } from "../reducers/application";

export const toggleMenu = (
  param: boolean
): {
  type: ApplicationActionTypes.ToggleMenu;
  payload: boolean;
} => ({
  type: ApplicationActionTypes.ToggleMenu,
  payload: param,
});

export const setPageHeader = (
  param: string
): {
  type: ApplicationActionTypes.SetPageHeader;
  payload: string;
} => ({
  type: ApplicationActionTypes.SetPageHeader,
  payload: param,
});