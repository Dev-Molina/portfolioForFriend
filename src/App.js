import React, { Component } from 'react';
import './App.css';
import 'animate.css';
import ReactFullpage from '@fullpage/react-fullpage';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer';
import {Button } from 'react-bootstrap';

console.log("LICENSE NOT NEEDED (Open Source) - Rubayth Haque")
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
        this.setState({portfolio:true})
        break;
      case 3: 
        this.setState({resume:false})
        break;
      default:
        break;
    }
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
  }

  render() {
    return (
      <div className = "app">
      <ReactFullpage
        licenseKey='Open Source License'
        animateAnchor={false}
        navigation
        navigationTooltips={["Home", "About", "Portfolio", "Contact"]}
        scrollOverflow={false}
        autoScrolling={false}
        fitToSection={false}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section home">
                <Home home={this.state.home}/>
                <br/>
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
                <Portfolio portfolio={this.state.portfolio}/>
              </div>
              <div className="section">
                <div style={{height:'50rem'}}>
                  <Contact/>
                  <Footer/>
                </div>
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
