import { Link, useLocation } from "react-router-dom";
import data from "../../assets/data.json";
import logo from "../../assets/nav.webp";
import "./nav.css";
/**
 * Composant Nav
 */
const Nav = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <nav className="nav">
      <Link to="/" className={currentPath === "/" ? "active" : ""}>
        <img src={logo} alt={data.logo} />
      </Link>

      <ul>
        {data.nav.map(({ link, content }) => (
          <li key={link}>
            <Link to={link} className={currentPath === link ? "active" : ""}>
              {content}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};


// * Le composant Nav affiche le logo et les liens de navigation.
// * link permet de naviguer vers une autre page.

// * Récupérez le chemin actuel de l'URL (comme "/about" ou "/contact") et le stocke dans la variable currentPath.
// * const currentPath = location.pathname;

// * Récupérez le chemin actuel de l'URL (comme "/about" ou "/contact") et le stocke dans la variable currentPath.

export default Nav;
