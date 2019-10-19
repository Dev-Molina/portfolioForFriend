import React, { Component, lazy, Suspense } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "animate.css";
import './styles/index.css';
import Header from "./components/Header";
import Home from "./components/Home/Home";

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
  return (<div class="spinner-border text-light" role="status">
    <span class="sr-only">Loading...</span>
  </div>)
}
class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <Router >
          <Header />
          <Suspense fallback={spinner}>
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
          </Suspense>
        </Router>
      </div>
    );
  }
}

export default App;
