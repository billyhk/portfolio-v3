import React, { createContext, FC, useContext, useReducer } from "react";
import { ApplicationState } from "../../interfaces/state";
import { Home, Contact, Experience, Projects, Skills } from "../../pages";
import applicationReducer, { ApplicationActions } from "../reducers/application";

export type ApplicationProviderProps = {
  children?: React.ReactNode;
};

const initialState: ApplicationState = {
  isMenuOpen: false,
  pageHeader: "",
  links: [
    {
      id: "home",
      to: "/home",
      name: "Home",
      showInNav: true,
      component: () => <Home />,
    },
    {
      id: "experience",
      to: "/experience",
      name: "Experience",
      showInNav: true,
      component: () => <Experience />,
    },
    {
      id: "projects",
      to: "/projects",
      name: "Projects",
      showInNav: true,
      component: () => <Projects />,
    },
    {
      id: "skills",
      to: "/skills",
      name: "Skills",
      showInNav: true,
      component: () => <Skills />,
    },
    {
      id: "contact",
      to: "/contact",
      name: "Contact",
      showInNav: true,
      component: () => <Contact />,
    },
  ]
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
