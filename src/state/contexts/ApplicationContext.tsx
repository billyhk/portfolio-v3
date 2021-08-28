import React, { createContext, FC, useContext, useReducer } from "react";
import { ApplicationState } from "../../interfaces/state";
import applicationReducer, { ApplicationActions } from "../reducers/application";

export type ApplicationProviderProps = {
  children?: React.ReactNode;
};

const initialState: ApplicationState = {
  isMenuOpen: true,
  pageHeader: "",
}

// create context
const ApplicationContext = createContext<{
  state: ApplicationState;
  dispatch: React.Dispatch<ApplicationActions>;
}>({ state: initialState, dispatch: () => null });

const ApplicationProvider: FC = ({ children }: ApplicationProviderProps) => {
  const [state, dispatch] = useReducer(applicationReducer, initialState);
  return (
    <ApplicationContext.Provider value={{ state, dispatch }}>
      {children}
    </ApplicationContext.Provider>
  );
};

export const useApplicationContext = () => useContext(ApplicationContext);
export { ApplicationProvider };
