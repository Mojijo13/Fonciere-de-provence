import React from 'react'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'
import AG from '../assets/AssentioGuillaume.jpg'
import GR from '../assets/guillaumeRoux.jpg'
import DN from '../assets/davidNataf.jpg'
import Image from '../assets/group.jpeg'

const Team = () => {
  const team = {
    member1: {
      key: 0,
      prenom: "Guillaume",
      nom: "Assentio",
      titre: "Président",
      texte: "Ancien sportif de haut niveau, Guillaume a connu plusieurs réussites comme Chef d’entreprise, notamment d’une société de services externalisés employant plus de 200 salariés. Président de PROVENCE VALORISATION, il s’occupe notamment de l’activité de marchands de biens du Groupe.",
      img: AG
    },
    member2: {
      key: 1,
      prenom: "Guillaume",
      nom: "Roux",
      titre: "Directeur Administratif & Financier",
      texte: "Guillaume a exercé divers postes de responsables financiers dans plusieurs entreprises.",
      img: GR
    },
    member3: {
      key: 2,
      prenom: "David",
      nom: "Nataf",
      titre: "Directeur des investissements",
      texte: "Depuis plus de 10 ans, David travaille dans l’immobilier. Il a une grande connaissance du marché immobilier marseillais, et un fort réseau chez les professionnels.",
      img: DN
    },    
  }

  const params = {
    slidesPerView: 3,
    effect: 'coverflow',
    noSwiping: true,
    centeredSlides: true,
    spaceBetween: 120,
    loop: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false
    },
    coverflowEffect: {
        rotate: -2,
        stretch: -100,
        depth: 100,
        modifier: 1,
        slideShadows: false
    }
  }

  const params2 = {
    slidesPerView: 1,
    loop: true,
    noSwiping: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false
    },
  }

  const listMembre = Object.keys(team).map(key => <div key={team[key].key} className="slider"><div className="asset"><img className="asset_asset" src={team[key].img} alt={"Portrait " + team[key].prenom + " " + team[key].nom}/></div></div>)
  const descMembre = Object.keys(team).map(key => <p key={team[key].key}><strong style={{ textTransform:'uppercase' }}>{team[key].nom + " " + team[key].prenom}</strong><strong>{"\n" + team[key].titre}</strong>{"\n\n" + team[key].texte}</p>)

  return (
    <section id="team" className='bloc bloc_columns bloc_primary bloc_columns_overlapping'>
      <Swiper {...params} id="swip1">
        {listMembre}
      </Swiper>
      <div className="bloc_content" style={{paddingTop: "4rem"}}>
        <div className="richText bloc_columns_left">
          <h2>
            Les femmes & les hommes
            du Groupe Fonciere de Provence qui oeuvrent chaque
            jour pour le développement et la
            multiplication des acquisitions à
            travers toute la région.
          </h2>
        </div>
        <div className="richText richText_small bloc_columns_right">
          <Swiper {...params2}>
              {descMembre}
          </Swiper>
        </div>
        <div className="slider">
          <div className="asset" >
            <img className="asset_asset" src={Image} alt="Groupe"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
