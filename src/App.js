import React, { Component } from 'react';
import './App.css';
import 'animate.css';
import ReactFullpage from '@fullpage/react-fullpage';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer';
import {Button, Container, Row, Col} from 'react-bootstrap';

const state = {
  home:false,
  about:false,
  portfolio:false,
  resume:false
}

class App extends Component {
  constructor(){
    super();
    this.state=state;
  }

  onLeave = (origin, destination, direction) => {
    switch(origin.index){
      case 0: 
        this.setState({home:false})
        break;
      case 1: 
        this.setState({about:false})
        break;
      case 2: 
        this.setState({portfolio:false})
        break;
      case 3: 
        this.setState({resume:false})
        break;
      default:
        break;
    }
    console.log("Leaving section " + origin.index);
  }
  
  afterLoad = (origin, destination, direction) => {
    //let loadedSection = this;
    switch(destination.index){
      case 0: 
        this.setState({home:true})
        break;
      case 1: 
        this.setState({about:true})
        break;
      case 2: 
        this.setState({portfolio:true})
        break;
      case 3: 
        this.setState({resume:true})
        break;
      default:
        break;
    }
    console.log("After load: " + destination.index);
  }

  render() {
    return (
      <div className = "app">
      <ReactFullpage
        licenseKey='Open Source License'
        animateAnchor={false}
        navigation
        navigationTooltips={["Home", "About Me", "Portfolio", "Resume"]}
        scrollOverflow={true}
        autoScrolling={false}
        fitToSection={false}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section home">
                <Home home={this.state.home}/>
                <Button 
                  style={{color:'white'}}
                  variant="outline-secondary" 
                  size="lg"
                  onClick={() => fullpageApi.moveTo(2)}
                  >Learn More</Button>
              </div>
              <div className="section">
                <About about={this.state.about}/>
              </div>
              <div className="section portfolio">
                <Portfolio/>
              </div>
              <div className="section">
                <Contact/>
                <Resume/>
                <Footer/>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
      </div>
    );
  }
}

export default App;
