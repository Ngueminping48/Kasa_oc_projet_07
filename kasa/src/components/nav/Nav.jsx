import { Link, useLocation } from "react-router-dom";
import data from "../../assets/data.json";
import logo from "../../assets/nav.webp";
import "./nav.css";

const Nav = () => {
  const location = useLocation();

  return (
    <nav className="nav">
      <Link to="/">
        <img src={logo} alt={data.logo} />
      </Link>

      <ul>
        <li>
          <Link
            className={` ${location.pathname === "/" ? "active" : ""} link`}
            to="/"
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            className={` ${
              location.pathname === "/about" ? "active" : ""
            } link`}
            to="/about"
          >
            A Propos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
