import React from 'react';
import data from '../../assets/data.json';
import img from '../../assets/about.webp';
import './about.css';
import Banner from '../../components/banner/Banner';
import Collapse from '../../components/collapse/Collapse';

/**
 * Composant About
 */
const About = () => {
  return (
    <main id='about'>
      <Banner src={img} alt='About Banner' />

      {data.collapse.map(({ title, content }) => (
        <Collapse key={title} title={title} content={content} />
      ))}
    </main>
  );
};


// * Créez un composant fonctionnel About qui affiche le contenu de la page "A propos".

// * Le composant About est exporté par défaut pour pouvoir être importé et utilisé dans d'autres parties de l'application.

export default About;
