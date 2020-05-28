import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import Image from '../assets/mrsImg.jpg'

const Intro = () => {
  return (
    <section id="a-propos" className='bloc bloc_columns bloc_dark bloc_columns_overlapping'>
      <div className="bloc_content">
        <div className="slider">
          <Parallax y ={[-15, 15]}>
            <div className="asset">
              <img className="asset_asset" src={Image} alt="Marseille notre dame de la garde" />
            </div>
          </Parallax>
        </div>
        <div className="richText bloc_columns_left">
          <h2>Le Groupe Fonciere de provence est né de la rencontre entre 2 associés et du regroupement de plusieurs entités. </h2>
        </div>
        <div className="richText richText_small bloc_columns_right">
          <p>Depuis une quinzaine d’années, ses fondateurs ont réalisé grand nombre d’opérations sur des immeubles d’habitation à fort rendement sur la région marseillaise et les alentours.<br/><br/>
              Cette expérience leur permet de 
              bénéficier d’une expertise pointue du 
              marché immobilier dans la région 
              PACA et de développer un savoir-
              faire particulier. <br/><br/>

              Ils ont su tisser un réseau local de 
              partenaires et d’apporteurs d’affaires 
              très efficace (agents immobiliers, 
              brookers, notaires, avocats 
              d‘affaires…), leur permettant de 
              bénéficier régulièrement 
              d’opportunités d’investissement.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Intro
