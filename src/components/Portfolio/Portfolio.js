import React from "react";
import { Switch, Route } from "react-router-dom";
import Particles from "react-particles-js";

import Personal from "./Personal";
import Professional from "./Professional/Professional";
import Main from "./Main";

class Portfolio extends React.Component {
  render() {
    return (
      <section className="portfolio">
        <Particles className="particles-js" />
        <Switch>
          <Route path="/portfolio/professional">
            <Professional />
          </Route>
          <Route path="/portfolio/personal">
            <Personal />
          </Route>
          <Route exact path="/portfolio">
            <Main />
          </Route>
        </Switch>
      </section>
    );
  }
}

export default Portfolio;
