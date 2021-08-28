import { NavLink } from "react-router-dom";
import { useApplicationContext } from "../../state/contexts/ApplicationContext";

const MainNav = () => {

  const { state: { links } } = useApplicationContext()

  return (
    <nav>
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