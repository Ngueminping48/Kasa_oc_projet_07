import "./notation.css";
/**
 * Composant notation
 */
const Notation = ({ notation }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < notation) {
      stars.push(<i className="fa-solid fa-star primary" key={i}></i>);
    } else {
      stars.push(<i className="fa-solid fa-star secondary" key={i}></i>);
    }
  }
  return <figure className="notation">{stars}</figure>;
};

/** 
 */
// * Crée un élément <figure> qui contient les 5 etoiles. Chaque etoile est une i avec la classe CSS 'primary' ou 'secondary' en fonction de la notation.
// * Lorsque la notation est inferieur à 3, la classe 'primary' sera appliquée. Lorsque la notation est superieur à 3, la classe 'secondary' sera appliquée.

export default Notation;
