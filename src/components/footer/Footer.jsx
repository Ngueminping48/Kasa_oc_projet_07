import data from "../../assets/data.json";
import logo from "../../assets/footer.webp";

import "./footer.css";

/**
 * Composant Footer
 */
const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt={data.logo} />

      <p>
        <span>
          © {data.year} {data.brand} .
        </span>
        <span>{data.copyright}</span>
      </p>
    </footer>
  );
};

// * Ce code sert à afficher un pied de page avec un logo et des informations de copyright dynamiques, 
// * qui changent automatiquement en fonction des données fournies via un fichier externe (data).
// •	Le composant Footer est exporté par défaut pour pouvoir être importé et utilisé dans d'autres parties de l'application.

export default Footer;
