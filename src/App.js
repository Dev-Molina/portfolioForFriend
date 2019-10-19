import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "animate.css";
import "./styles/index.css";
import Header from "./components/Header";
import Home from "./components/Home/Home";

import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

/*
const About = (
  lazy(() => (
    import('./components/About/About')
  ))
)
const Portfolio = (
  lazy(() => (
    import('./components/Portfolio/Portfolio')
  ))
)
const Contact = (
  lazy(() => (
    import('./components/Contact/Contact')
  ))
)


const spinner = () => {
  return (
    <div class="spinner-border text-light" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  );
};
*/

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <Router>
          <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
