import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedinIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {
  return (
    <div component="section" id="contact" className="bloc bloc_light home_contact">
      <div className="bloc_content">
        <div className="richText" style={{fontWeight: '600'}}>
          <p><a href="https://www.google.fr/maps/place/306+Rue+Paradis,+13008+Marseille/@43.2796311,5.3803016,17z/data=!3m1!4b1!4m5!3m4!1s0x12c9c74d4760856f:0x3ed7f0bc7291bdb2!8m2!3d43.2796272!4d5.3824903" target="blank">FONCIERE DE PROVENCE<br/>306 rue Paradis,<br/>13006 Marseille, France</a></p>
          <p><a href="mailto:contact@foncieredeprovence.com">contact@foncieredeprovence.com</a></p>
        </div>
        <ul className="social_contact">
          <li className="social"><a target="blank" href="https://www.linkedin.com/company/groupeprotis/"><LinkedinIcon style={{ fontSize: 40 }}/></a></li>
          <li className="social"><a target="blank" href="https://www.instagram.com/foncieredeprovence/"><InstagramIcon style={{ fontSize: 40 }}/></a></li>
          <li className="social"><a target="blank" href="https://www.facebook.com/foncieredeprovence/?__tn__=%2Cd%2CP-R&eid=ARDB-mWESR065MDmYpoIlLj1ZDDbTPMyzqCYakUDVh62TURDo1KeO9YYvL1eood1JSFxy6JU8HdGRJEU"><FacebookIcon style={{ fontSize: 40 }}/></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer