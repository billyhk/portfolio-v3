import { NavLink } from "react-router-dom";
import { useApplicationContext } from "../../state/contexts/ApplicationContext";
import './nav.scss';

const MainNav = () => {

  const { state: { links } } = useApplicationContext()

  return (
    <nav className="main-nav">
      {links.filter((l) => l.showInNav)
        .map((l) => (
          <NavLink
            to={l.to}
            key={l.to}
          >
            {l.name}
          </NavLink>
        ))
      }
    </nav>
  )
}
export default MainNav;