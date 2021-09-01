import React from 'react';
import './App.scss';
import { RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import { useScrollToTopOnNav } from './hooks/useScrolltoTopOnNav';
import { useApplicationContext } from './state/contexts/ApplicationContext';
import { ILink } from './interfaces/link';
import RouteHandler from './components/Route/RouteHandler';
import { MainNav } from './components/Nav';

const App: React.FC<RouteComponentProps> = () => {
  useScrollToTopOnNav();

  const {
    state: { links }
  } = useApplicationContext()

  return (
    <div className="site-container">
      {/* className="site-container" */}
      {/* <MainNav /> */}
      {/* <div className="App-Loader"></div> */}
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
    </div>
  );
}

export default withRouter(App);
