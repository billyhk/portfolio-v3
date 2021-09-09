import './nav.scss';
import { Link, NavLink } from 'react-router-dom';
import { useApplicationContext } from '../../state/contexts/ApplicationContext';
import { toggleMenu } from '../../state/actions/application';

const MainNav = () => {
	const {
		dispatch,
		state: { isMenuOpen, links },
	} = useApplicationContext();

	const navItems = links
		.filter((l) => l.showInNav)
		.map((l) => (
			<NavLink
				activeClassName='active-nav-link'
				className='nav__item'
				to={l.to}
				key={l.to}>
				{l.name}
			</NavLink>
		));

	return (
		<nav className='main-nav'>
			{isMenuOpen ? (
				<div className='nav-toggle nav-toggle--open'>
					<span
						className='nav-toggle__button'
						onClick={() => dispatch(toggleMenu(!isMenuOpen))}></span>

					<div className='nav__items'>{navItems}</div>

					<div
						className='back-drop'
						onClick={() => dispatch(toggleMenu(!isMenuOpen))}></div>
				</div>
			) : (
				<div className='nav-toggle nav-toggle--closed'>
					<span
						className='nav-toggle__button'
						onClick={() => dispatch(toggleMenu(!isMenuOpen))}></span>

					<div className='nav__items'>{navItems}</div>
				</div>
			)}
		</nav>
	);
};
export default MainNav;
