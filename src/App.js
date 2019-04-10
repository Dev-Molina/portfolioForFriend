import React, { Component } from 'react';
import './App.css';
import 'animate.css';
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
      <div className = "app">
      <ReactFullpage
        anchors={["home", "about", "portfolio", "resume"]}
        scrollOverflow={true}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section home">
                <Home/>
                <button className="" onClick={() => fullpageApi.moveSectionDown()}>
                  About me
                </button>
                <button onClick={() => fullpageApi.moveTo(3)}>
                  Projects
                </button>
                <button onClick={() => fullpageApi.moveTo(4)}>
                  Resume
                </button>
              </div>
              <div className="section">
                <Navigation/>
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
      </div>
    );
  }
}

export default App;
