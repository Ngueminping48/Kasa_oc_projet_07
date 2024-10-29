import data from "../../assets/data.json";
import "./error.css";

/**
 * Composant Error
 */

const Error = () => {
  return (
    <main id="error">
      <h1>{data.code}</h1>
      <p>{data.error}</p>
      <a href="/">{data.link}</a>
    </main>
  );
};


// *•	Déclaration d'un composant fonctionnel nommé Error. Ce composant ne prend pas de props et ne gère pas d'état interne.

// * Créez un composant fonctionnel Error qui affiche le contenu de la page d'erreur.

//** <a href="/">{data.link}</a>
//** Affiche un lien hypertexte pointant vers la page d'accueil ("/"), avec le texte du lien récupéré depuis data.json.

export default Error;
