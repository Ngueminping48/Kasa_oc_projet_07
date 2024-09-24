import "./card.css";

/**
 * Composant Card
 */
const Card = ({ src, alt, title }) => {
  return (
    <figure className="card">
      <img src={src} alt={alt} />

      <figcaption>{title}</figcaption>
    </figure>
  );
};

// •	Le composant Card est exporté par défaut pour pouvoir être importé et utilisé dans d'autres parties de l'application.

export default Card;
