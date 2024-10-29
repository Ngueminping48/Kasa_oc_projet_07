import React from 'react'
import data from '../../assets/data.json';
import aboutImg from '../../assets/about.webp';
import Banner from '../../components/Banner/Banner';
import Collapse from '../../components/Collapse/Collapse';
import './about.css'

const About = () => {

  return (
    <main id="about">
      <Banner src={aboutImg} alt="Des forêts entourées de montagnes"
      />
      <div className='about__collapse'>
      {data.collapse.map(({title, content}) => (
        <Collapse
        key={title}
        title={title}
        content={content}
        />
      ))}
      </div>

    </main>
  )
}

export default About
