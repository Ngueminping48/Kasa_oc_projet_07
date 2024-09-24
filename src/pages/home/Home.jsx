import { Link } from "react-router-dom";
import data from "../../assets/data.json";
import img from "../../assets/home.webp";
import Card from "../../components/card/Card";
import "./home.css";
import Banner from "../../components/banner/Banner";

/**
 * Composant Home
 */

const Home = () => {
  return (
    <main id="home">
      <Banner src={img} alt={data.home} title={data.title} />

      <ul>
        {data.accommodations.map(({ cover, title, id }) => (
          <li key={id}>
            <Link to={`/accommodations/${id}`}>
              <Card src={cover} alt={data.gallery + title} title={title} />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
// *        {data.accommodations.map(({ cover, title, id }) => (
// *	Utilisation de la méthode .map() pour parcourir le tableau accommodations provenant de data.json.
// *	Chaque élément du tableau (hébergement) est déstructuré pour obtenir ses propriétés cover (image), title, et id.

// * Créez un composant fonctionnel Home qui affiche la page d'accueil avec les 3 derniers logements.

export default Home;
