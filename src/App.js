import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js';
import particleParam from './particleParam';
import ReactFullpage from '@fullpage/react-fullpage';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';

class App extends Component {

  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }
  render() {
    return (
      <ReactFullpage
        anchors={["home", "about", "portfolio", "resume"]}
        sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
        scrollOverflow={true}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section">
                <Home/>
                <button onClick={() => fullpageApi.moveSectionDown()}>
                  Learn More
                </button>
              </div>
              <div className="section">
                <h3>About Me</h3>
              </div>
              <div className="section">
                <div className="slide">
                  <h3>Projects</h3>
                </div>
                <div className="slide">
                  <h3>Slide 2.2</h3>
                </div>
                <div className="slide">
                  <h3>Slide 2.3</h3>
                </div>
              </div>
              <div className="section">
                <h3>Resume</h3>
              </div>
            </div>
          );
        }}
      />
    );
  }
}

export default App;
