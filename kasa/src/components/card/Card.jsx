import React from 'react';
import "./card.css";

const Card = ({ id, title, cover, alt }) => {
   return (
       <figure className="card">
           <img src={cover} alt={alt} />
           <figcaption>
               <h2>{title}</h2>
           </figcaption>
       </figure>
   );
};

export default Card;

