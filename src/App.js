import React from 'react'
import './App.css'
import { ParallaxProvider } from 'react-scroll-parallax'

import Head from './Components/Head'
import Main from './Components/Main'
import Quote from './Components/Quote'
import Intro from './Components/Intro'
import Activites from './Components/Activites'
import Team from './Components/Team'
import Project from './Components/Project'
import Footer from './Components/Footer'
import Nav from './Components/Nav'
import Loader from './Components/Loader'

class App extends React.Component {
  state = {
    mountNavButton: false,
    openCollapse: false,
    open: false,
    loading: true,
    height: window.innerHeight,
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleNavButton)
    this.timerhandle = setTimeout(() => {
      this.setState({ loading:false })
    }, 5700) 
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleNavButton)
  }

  handleNavButton = () => {
    const scrollPx = document.documentElement.scrollTop
    let mountNavButton = null
    if(scrollPx > 650) mountNavButton = true
    else mountNavButton = false
    this.setState({ mountNavButton })
  }

  handleCollapse = () => {
    const { openCollapse } = {...this.state}
    this.setState({openCollapse: !openCollapse})
  }
  closeCollapse = () => {
    this.setState({openCollapse: null})
  }

  render() {
    if(this.state.loading) {
      return (
         <Loader refElement={ el => this.loaderElement = el } height={ this.state.height }/>
      );
    } else {
      return (
          <React.Fragment>
            <div className="App" onClick={this.closeCollapse}>
              <Head />
              <Main />
              <Quote />
              <ParallaxProvider>
                <Intro />
              </ParallaxProvider>
              <Activites/>
              <Team/>
              <Project/>
              <Footer/>
            </div>
            <Nav mountButton={ this.state.mountNavButton } openCollapse={ this.state.openCollapse } handleCollapse={ this.handleCollapse } />
          </React.Fragment>
      );
    }
  }
}

export default App;
