import React from 'react'
import Video from '../assets/vid.mp4'
import Logo from '../Components/Logo.js'

const style = {
  backgroundColor: "#F1ECCE"
}

const Main = () => {
  return (
    <section id="main" className="bloc bloc_video bloc_video_overlay">
      <div className="asset" style={{ style }}>
        <video className="asset_asset" autoPlay muted loop src={Video}></video>
      </div>
      <div className="bloc_content">
        <Logo className="home_logo" />
      </div>
    </section>
  )
}

export default Main
