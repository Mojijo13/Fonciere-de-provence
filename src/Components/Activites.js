import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel'
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Logo from '../Components/LogoF'
import LogoG from '../Components/LogoG'
import LogoV from '../Components/LogoV'

const marques = {
  fonciere: {
    key: 0,
    titre: "Fonciere de Provence",
    logo: <Logo className="home_logo"/>,
    content: "Fonciere de Provence développe des activités d’investissement patrimonial en compte propre ou en association avec des investisseurs sous forme de « club deal », sur tout type d’actifs (bureaux, commerces et immeubles anciens d’habitation), sur la métropole Aix-Marseille Provence et plus largement sur la région PACA.\n\nNous achetons des immeubles en monopropriété à forte rentabilité, avec l’objectif de les conserver à long terme. Nous en assurons la gestion en interne grâce aux équipes de Provence Gestion."
  },
  gestion: {
    key: 1,
    titre: "Provence Gestion",
    logo: <LogoG className="home_logo"/>,
    content: "Provence Gestion exerce une activité de transaction et de gestion pour tous les biens du Groupe.\n\nGrâce à son savoir-faire particulier et son ancrage local depuis de longues années, Provence Gestion gère de manière dynamique et efficace les actifs immobiliers détenus.\n\nProvence Gestion prend en charge la totalité de la gestion: recherche des locataires, état des lieux d’entrée et de sortie, rédaction des baux, suivi des paiements du loyer, vérification des éventuels travaux à faire et réalisation au meilleur prix…"
  },
  valo: {
    key: 2,
    titre: "Provence Valorisation",
    logo: <LogoV className="home_logo"/>,
    content: "Avec un grand nombre d’opérations réalisées, Provence Valorisation a acquis une expertise reconnue dans le domaine de la restructuration, réhabilitation et rénovation d’immeubles anciens.\n\nGrâce à un réseau étendu de partenaires apporteurs d’affaires, Provence Valorisation achète au meilleur prix des immeubles anciens d’habitation libres ou occupés, réalise d’importants travaux de rénovation et de mise aux normes des parties privatives et communes, met les lots en copropriété et les revend individuellement."
  }
}

const ExpansionPanel = withStyles({
  root: {
    boxShadow: 'none',
    backgroundColor: '#FFF',
    borderBottom: "2px dashed #232020",
  }
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    padding:'0rem 0rem',
    backgroundColor: '#FFF',
  },
  content: {
      margin:'40px 0',
      color: "#232020",
  },
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: '0px 0 34px',
    backgroundColor: '#FFF',
  },
}))(MuiExpansionPanelDetails);

const style = {
  icon: {
    fontSize:'1.6rem ', 
    fontWeight: '400', 
    lineHeight: '2.6rem', 
    color:'#232020'
  },
  typo: {
    fontSize:'1rem ', 
    fontWeight: '500', 
    lineHeight: '2.6rem', 
    textTransform:"uppercase"
  },
  bloc: {
    padding:"2rem 40px"
  },
  content: {
    fontSize:"1rem",
    lineHeight:'1.55rem',
    whiteSpace:'pre-line',
    letterSpacing:'.1px',
    color: "#232020"
  }
} 

const listmarques = Object.keys(marques).map(key =>
  <ExpansionPanel key={marques[key].key}>
    <ExpansionPanelSummary
      expandIcon={<ExpandMoreIcon style={style.icon}/>} 
    >
      <Typography style={style.typo}>{marques[key].titre}</Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <div className="bloc bloc_columns bloc_white" style={style.bloc}>
        <div className="bloc_content">
          <div className="richText richText_small bloc_columns_left2">
            {marques[key].logo}
          </div>
          <div className="richText bloc_columns_right2">
            <Typography style={style.content}>{marques[key].content}</Typography>
          </div>
        </div>
      </div>
    </ExpansionPanelDetails>
  </ExpansionPanel>
)

const Activites = () => {
  return (
    <section id="activites" className="bloc bloc_white">
      <div className="bloc_content bloc_title">
        <h1>Nos activités</h1>
        <p className="richText richText_small" >Le Groupe Fonciere de provence exerce tous les métiers de l’investissement immobilier :</p>
      </div>
      <div className="bloc bloc_collapsibles bloc_white">
        <div className="bloc_content">
          {listmarques}
        </div>
      </div>
    </section>
  )
}

export default Activites
