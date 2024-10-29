import "./banner.css";

/**
  Composant Banner
 */
const Banner = ({ src, alt, title = "" }) => {
  return (
    <header className="banner">
      <img src={src} alt={alt} />
      {title && (
        <h1>
          <span> {title.slice(0, 11)}</span>
          <span> {title.slice(11)}</span>
        </h1>
      )}
    </header>
  );
};
// •	Le composant Banner est exporté par défaut pour pouvoir être importé et utilisé dans d'autres parties de l'application.
export default Banner;
