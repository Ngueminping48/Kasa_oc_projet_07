import { useState } from "react";
import data from "../../assets/data.json";
import "./carousel.css";

/**
 * Composant CAROUSEL
 */
const Carousel = ({ pictures, alt }) => {
  let [index, setIndex] = useState(0);
  // Déclare un composant fonctionnel Carousel qui utilise les props pictures pour les images à afficher et alt pour le texte alternatif des images.

  const goPrevious = () => {
    setIndex((index) => (index - 1 + pictures.length) % pictures.length);
    // Fonction qui gère le passage à l'image précédente et suivante dans le carrousel en cliquant sur les boutons.
    // Utilise la fonction modulus (%) pour gérer le passage à l'image suivante en fin de liste.
  };
  const goNext = () => {
    setIndex((index) => (index + 1) % pictures.length);
    //fonction goNext qui met à jour l'index pour afficher l'image suivante, en utilisant le modulo pour revenir à la première image lorsque l'on atteint la fin du carrousel.
  };
  return (
    <figure className="carousel">
      <img
        src={pictures[index]}
        alt={`${alt} (${data.carousel} ${index + 1})`}
      />

      {pictures.length > 1 && (
        <nav>
          <i className="fa-solid fa-chevron-left" onClick={goPrevious} />

          <i className="fa-solid fa-chevron-right" onClick={goNext} />

          <b>
            {index + 1}/{pictures.length}
          </b>
        </nav>
      )}
    </figure>
  );
};

export default Carousel;
