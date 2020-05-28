import React from 'react'
import Slide from '@material-ui/core/Slide'
import Paper from '@material-ui/core/Paper'
import Fab from '@material-ui/core/Fab'
import MenuIcon from '@material-ui/icons/Menu'
import MuiMenuItem from '@material-ui/core/MenuItem'
import MuiMenuList from '@material-ui/core/MenuList'
import { Transition } from 'react-transition-group'
import Logo from '../Components/Logo'
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-scroll";
import Plaquette from "../assets/foncieredeprovence_plaquette.pdf"

const duration = 300;

const defaultStyle = {
  transition: `all ${duration}ms ease-in-out`,
  opacity: 0,
  transform: 'scale(0)',
  zIndex:30
}

const transitionStyles = {
  entering: { opacity: 1, transform: 'scale(1.2)' },
  entered:  { opacity: 1, transform: 'scale(1)' },
  exiting:  { opacity: 0, transform: 'scale(0)' },
  exited:  { opacity: 0, transform: 'scale(0)' },
}

const MenuList = withStyles({
    root: {
      width: "100%",
    }
})(MuiMenuList);

const MenuItem = withStyles({
    root: {
        display: "block",
        textAlign: "center",
        color: "#FFF",
        width: "100%",
        textTransform: "uppercase",
        letterSpacing: ".7px",
        lineHeight: "2rem",
        fontWeight: "700",
        opacity: ".8",
        fontSize: "0.9rem"
    },

})(MuiMenuItem);

const Nav = ({ mountButton, openCollapse, handleCollapse }) => {
  return (
    <React.Fragment>
      <Transition in={ mountButton } timeout={ duration }>
        {state => (
          <Fab
            aria-controls="menu"
            aria-haspopup="true"
            onClick={handleCollapse}
            style={{background: "#84754C", position: "fixed", right: "51px", top:"40px", Zindex:"40", ...defaultStyle, ...transitionStyles[state]}}
          >
            <MenuIcon style={{color: "#FFF"}}/>
          </Fab>
        )}
      </Transition>
      <Slide direction="left" in={openCollapse} onClick={handleCollapse} mountOnEnter unmountOnExit>
        <Paper className="menu">
          <Link style={{borderBottom: "0px solid #FFF"}} className="menu_logo" to="main" spy={true} smooth={true}><Logo/></Link>
          <MenuList float="center" >
            <MenuItem onClick={handleCollapse}><Link style={{borderBottom: "0px solid #FFF"}} to="a-propos" spy={true} smooth={true}>A propos</Link></MenuItem>
            <MenuItem onClick={handleCollapse}><Link style={{borderBottom: "0px solid #FFF"}} to="activites" spy={true} smooth={true}>Nos activités</Link></MenuItem>
            <MenuItem onClick={handleCollapse}><Link style={{borderBottom: "0px solid #FFF"}} to="projects" spy={true} smooth={true}>Nos opérations</Link></MenuItem>
            <MenuItem onClick={handleCollapse}><Link style={{borderBottom: "0px solid #FFF"}} to="team" spy={true} smooth={true}>Notre équipe</Link></MenuItem>
            <MenuItem onClick={handleCollapse}><Link style={{borderBottom: "0px solid #FFF"}} to="contact" spy={true} smooth={true}>Contact</Link></MenuItem>
            <MenuItem onClick={handleCollapse}><a style={{borderBottom: "0px solid #FFF"}} href={Plaquette} target="blank">Télécharger plaquette</a></MenuItem>
          </MenuList>
        </Paper>
      </Slide>
    </React.Fragment>
  )
}

export default Nav
