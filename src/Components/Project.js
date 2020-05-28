import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent'
import Img1 from '../assets/ope_1.jpg'
import Img2 from '../assets/ope_2_2.jpg'
import Img3 from '../assets/ope_4_2.jpg'
import Img4 from '../assets/ope_4.jpg'

const Project = () => {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const [fullWidth] = React.useState(true);
  const [maxWidth] = React.useState('md');

  const handleClickOpen = scrollType => () => {
    setOpen(true);
    setScroll(scrollType);
  };
  const handleClickOpen2 = scrollType => () => {
    setOpen2(true);
    setScroll(scrollType);
  };
  const handleClickOpen3 = scrollType => () => {
    setOpen3(true);
    setScroll(scrollType);
  };
  const handleClickOpen4 = scrollType => () => {
    setOpen4(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };
  const handleClose4 = () => {
    setOpen4(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div component="section" id="project" className="bloc bloc_project bloc_white">
      <div className="bloc_content">
          <h1 className="bloc_title" style={{ marginBottom: "3rem"}}>Quelques-unes de nos opérations</h1>
          <ul className="projects">
              <li className="preview">
                  <a type="button" onClick={handleClickOpen('body')} className="asset preview_thumbnail">
                      <img src={Img1} className="asset_asset" alt="Boulevard Chave immeuble"></img>
                  </a>
                  <Dialog
                      fullWidth={fullWidth}
                      maxWidth={maxWidth}
                      open={open}
                      onClose={handleClose}
                      scroll={scroll}
                  >
                      <DialogContent dividers={scroll === 'body'}>
                          <div className="slider">
                              <div className="asset">
                                  <img className="asset_asset" src={Img1} alt="Boulevard Chave immeuble"/>
                              </div>
                          </div>
                          <div className="project_intro">
                              <div className="project_intro_content">
                                  <h2 className="project_location">Marseille, France</h2>
                                  <h1 className="project_title">Boulevard Chave</h1>
                                  <aside className="project_info">
                                      <table className="project_specs">
                                          <tbody>
                                              <tr className="project_spec">
                                                  <td className="project_spec_title">Opération</td>
                                                  <td className="project_spec_value">
                                                      <div className="richText">
                                                          <p>Fonciere de provence</p>
                                                      </div>
                                                  </td>
                                              </tr>
                                              <tr className="project_spec">
                                                  <td className="project_spec_title">Type de bien</td>
                                                  <td className="project_spec_value">
                                                      <div className="richText">
                                                          <p>Immeuble mixte</p>
                                                      </div>
                                                  </td>
                                              </tr>
                                              <tr className="project_spec">
                                                  <td className="project_spec_title">Surface</td>
                                                  <td className="project_spec_value">
                                                      <div className="richText">
                                                          <p>280 m2</p>
                                                      </div>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </aside>
                                  <div className="project_description">
                                      <p>Foncière de Provence a acquis cet immeuble de 280m² sis 178 boulevard Chave 13005 MARSEILLE.
                                      Il est composé de 6 appartements : un T3, 4 T2 et un T1 et 2 locaux commerciaux.
                                      Il a été prévu de réaliser des travaux d’embellissement de la cage d’escalier, le rafraichissement des appartements au fur et à mesure des départs. 
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </DialogContent>
                  </Dialog>
              </li>
              <li className="preview">
                  <a type="button" onClick={handleClickOpen2('body')} className="asset preview_thumbnail">
                      <img src={Img2} className="asset_asset" alt="Rue Boscary immeuble"></img>
                  </a>
                  <Dialog
                      fullWidth={fullWidth}
                      maxWidth={maxWidth}
                      open={open2}
                      onClose={handleClose2}
                      scroll={scroll}
                  >
                      <DialogContent dividers={scroll === 'body'}>
                          <div className="slider">
                              <div className="asset">
                                  <img className="asset_asset" src={Img2} alt="Rue Boscary immeuble"/>
                              </div>
                          </div>
                          <div className="project_intro">
                              <div className="project_intro_content">
                                  <h2 className="project_location">Marseille, France</h2>
                                  <h1 className="project_title">Rue Boscary</h1>
                                  <aside className="project_info">
                                      <table className="project_specs">
                                          <tbody>
                                              <tr className="project_spec">
                                                  <td className="project_spec_title">Opération</td>
                                                  <td className="project_spec_value">
                                                      <div className="richText">
                                                          <p>Fonciere de provence</p>
                                                      </div>
                                                  </td>
                                              </tr>
                                              <tr className="project_spec">
                                                  <td className="project_spec_title">Type de bien</td>
                                                  <td className="project_spec_value">
                                                      <div className="richText">
                                                          <p>Immeuble mixte</p>
                                                      </div>
                                                  </td>
                                              </tr>
                                              <tr className="project_spec">
                                                  <td className="project_spec_title">Surface</td>
                                                  <td className="project_spec_value">
                                                      <div className="richText">
                                                          <p>688 m2</p>
                                                      </div>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </aside>
                                  <div className="project_description">
                                      <p>Fonciere de Provence a acquis cet immeuble de 688m² au 38 rue Boscary 13004 MARSEILLE courant 2019.
                                      Il s’agit d’un immeuble de construction semi-récente, composé de 8 studios, 8 T2, 1 local commercial avec son sous-sol attenant et une place de stationnement sur rue ainsi qu’un ensemble de caves privative à chaque lot.
                                      L’ensemble est loué dans sa totalité à ce jour.  
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </DialogContent>
                  </Dialog>
              </li>
              <li className="preview">
                  <a type="button" onClick={handleClickOpen3('body')} className="asset preview_thumbnail">
                      <img src={Img3} className="asset_asset" alt="Rue Curiol immeuble"></img>
                  </a>
                  <Dialog
                      fullWidth={fullWidth}
                      maxWidth={maxWidth}
                      open={open3}
                      onClose={handleClose3}
                      scroll={scroll}
                  >
                      <DialogContent dividers={scroll === 'body'}>
                          <div className="slider">
                              <div className="asset">
                                  <img className="asset_asset" src={Img3}  alt="Rue Curiol immeuble"/>
                              </div>
                          </div>
                          <div className="project_intro">
                              <div className="project_intro_content">
                                  <h2 className="project_location">Marseille, France</h2>
                                  <h1 className="project_title">Rue de Curiol</h1>
                                  <aside className="project_info">
                                      <table className="project_specs">
                                          <tbody>
                                              <tr className="project_spec">
                                                  <td className="project_spec_title">Opération</td>
                                                  <td className="project_spec_value">
                                                      <div className="richText">
                                                          <p>Provence Valorisation</p>
                                                      </div>
                                                  </td>
                                              </tr>
                                              <tr className="project_spec">
                                                  <td className="project_spec_title">Type de bien</td>
                                                  <td className="project_spec_value">
                                                      <div className="richText">
                                                          <p>Immeuble mixte</p>
                                                      </div>
                                                  </td>
                                              </tr>
                                              <tr className="project_spec">
                                                  <td className="project_spec_title">Surface</td>
                                                  <td className="project_spec_value">
                                                      <div className="richText">
                                                          <p>800 m2</p>
                                                      </div>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </aside>
                                  <div className="project_description">
                                      <p>Provence Valorisation a acquis cet immeuble haussmannien de 800m² sis 82 rue de Curiol 13001 MARSEILLE.
                          Élevé de quatre étages et composé de 10 appartements, un ensemble de caves et un local sur rue (non commercial). Les lots seront revendus en l’état à la découpe, après un traitement des façades, de la toiture et un rafraichissement complet de la cage d’escalier.   
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </DialogContent>
                  </Dialog>
              </li>
              <li className="preview">
                  <a type="button" onClick={handleClickOpen4('body')} className="asset preview_thumbnail">
                      <img src={Img4} className="asset_asset" alt="Rue de Roubaix immeuble"></img>
                  </a>
                  <Dialog
                      fullWidth={fullWidth}
                      maxWidth={maxWidth}
                      open={open4}
                      onClose={handleClose4}
                      scroll={scroll}
                  >
                      <DialogContent dividers={scroll === 'body'}>
                          <div className="slider">
                              <div className="asset">
                                  <img className="asset_asset" src={Img4} alt="Rue de Roubaix immeuble"/>
                              </div>
                          </div>
                          <div className="project_intro">
                              <div className="project_intro_content">
                                  <h2 className="project_location">Marseille, France</h2>
                                  <h1 className="project_title">Rue de Roubaix</h1>
                                  <aside className="project_info">
                                      <table className="project_specs">
                                          <tbody>
                                              <tr className="project_spec">
                                                  <td className="project_spec_title">Opération</td>
                                                  <td className="project_spec_value">
                                                      <div className="richText">
                                                          <p>Provence Valorisation</p>
                                                      </div>
                                                  </td>
                                              </tr>
                                              <tr className="project_spec">
                                                  <td className="project_spec_title">Type de bien</td>
                                                  <td className="project_spec_value">
                                                      <div className="richText">
                                                          <p>Immeuble mixte</p>
                                                      </div>
                                                  </td>
                                              </tr>
                                              <tr className="project_spec">
                                                  <td className="project_spec_title">Surface</td>
                                                  <td className="project_spec_value">
                                                      <div className="richText">
                                                          <p>1230 m2</p>
                                                      </div>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </aside>
                                  <div className="project_description">
                                      <p>Cet ensemble composé de 16 appartements, 2 locaux commerciaux, un hangar et un garage pour une surface totale de 1230m2 a été acquis le 1er août 2019 par PROVENCE VALORISATION.
                          Situé au 13/15/17 Rue de Roubaix 13013 MARSEILLE. Les lots ont été vendus par immeuble, à différents investisseurs.
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </DialogContent>
                  </Dialog>
              </li>
          </ul>    
      </div>
  </div>
  )
}

export default Project
