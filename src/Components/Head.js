import React from 'react'
import { Helmet } from "react-helmet"

const Head = () => {
    return (
        <Helmet>
            <title>Fonciere de Provence</title>
            <meta name="description" content="Le groupe Fonciere de Provence exerce tous les métiers de l’investissement immobilier : acquisition d’immeubles anciens pour rénovation et revente par lots, acquisition d’immeubles anciens à but patrimonial, Asset et Property Management pour le compte d’investisseurs institutionnels et pour son propre compte, conseil en immobilier pour les investisseurs."/>
            <meta name="author" content="Arnaud FABRI" />
            <meta name="copyright" content="© CC BY-NC-SA 4.0" />
            <meta charset="utf-8"/>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"/>

            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css"/>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/brands.css"/>
            <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900&display=swap" rel="stylesheet"></link>
        </Helmet>
    )
}

export default Head