import React, { Component } from 'react';
import './App.css';
import 'animate.css';
import ReactFullpage from '@fullpage/react-fullpage';
import Home from './components/Home/Home';
import About from './components/About/About';
import {Button} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className = "app">
      <ReactFullpage
        navigation
        navigationTooltips={["Home", "About Me", "Portfolio", "Resume"]}
        scrollOverflow={true}
      
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section home">
                <Home/>
                <Button variant="outline-secondary" size="lg">Learn More</Button>
              </div>
              <div className="section">
                <About/>
              </div>
              <div className="section">
                <h3>Projects</h3>
              </div>
              <div className="section">
                <h3>Resume</h3>
              </div>
            </div>
          );
        }}
      />
      </div>
    );
  }
}

export default App;
