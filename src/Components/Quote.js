import React from 'react'
import { Link } from "react-scroll";

const Quote = () => {
  return (
    <section className="bloc bloc_white home_introduction">
      <div className="bloc_content">
        <div className="richtext home_introduction_content">
          <span className="exergue">" Un acteur régional de l’investissement immobilier dédié à la métropole Aix-Marseille Provence et plus largement à la région PACA "</span>
        </div>
        <Link className="button button--inline" to="a-propos" spy={true} smooth={true} offset={500}>Qui sommes-nous ?</Link>
        <Link className="button button--inline" to="project" spy={true} smooth={true} offset={100}>Nos opérations</Link>
      </div>
    </section>
  )
}

export default Quote
