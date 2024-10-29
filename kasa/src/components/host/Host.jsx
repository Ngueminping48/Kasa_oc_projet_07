import "./host.css";
/**
 * Composant Host
 */
const Host = ({ name, picture }) => {
  const [firstname, lastname] = name.split(" ");

  return (
    <figure className="host">
      <figcaption>
        {firstname}
        <br />
        {lastname}
      </figcaption>

      <img src={picture} alt={name} />
    </figure>
  );
};

// * Crée un élément <figcaption> qui contient le prénom et le nom de l'hôte. La balise <br /> ajoute un saut de ligne entre le prénom et le nom de famille.
// * Utilise la méthode split sur la chaîne de caractères name pour diviser le nom complet en deux parties depuis le caractère espace.
// * firstname (prénom) et lastname (nom de famille), en se basant sur l'espace entre les deux.
// * Le composant Host affiche le nom et la photo d'un hote.
// •	Le composant Host est exporté par défaut pour pouvoir être importé et utilisé dans d'autres parties de l'application.

export default Host;
