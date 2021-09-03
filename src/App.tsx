import React from 'react';
import './App.scss';
import { RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import { useScrollToTopOnNav } from './hooks/useScrolltoTopOnNav';
import { useApplicationContext } from './state/contexts/ApplicationContext';
import { ILink } from './interfaces/link';
import RouteHandler from './components/Route/RouteHandler';
import { MainNav } from './components/Nav';
import { motion } from 'framer-motion';

const App: React.FC<RouteComponentProps> = () => {
	useScrollToTopOnNav();

	const {
		state: { links },
	} = useApplicationContext();

	return (
		<motion.div
			// className='site-container'
			// initial={{
			// 	opacity: 0,
			// }}
			// animate={{
			// 	opacity: 1,
			// }}
      >
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
		</motion.div>
	);
};

export default withRouter(App);
