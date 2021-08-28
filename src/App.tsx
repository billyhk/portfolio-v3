import React from 'react';
import './App.css';
import { RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import { useScrollToTopOnNav } from './hooks/useScrolltoTopOnNav';
import { useApplicationContext } from './state/contexts/ApplicationContext';
import { ILink } from './interfaces/link';
import RouteHandler from './components/Route/RouteHandler';

const App: React.FC<RouteComponentProps> = () => {
  useScrollToTopOnNav();

  const {
    state: { links }
  } = useApplicationContext()

  return (
    <>
      {/* nav bar */}

      <Switch>
        {links.map((l: ILink) => {
          return (
            <RouteHandler
              key={l.id}
              path={l.to}
              exact
              component={l.component}
            />
          );
        })}
      </Switch>
    </>
  );
}

export default withRouter(App);
