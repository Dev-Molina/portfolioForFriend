import React from "react";
import { Switch, Route } from "react-router-dom";
import Particles from "react-particles-js";

import Personal from "./Personal/Personal";
import Professional from "./Professional/Professional";
import Main from "./Main";
import Page404 from "../Page404";

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
          <Route component={Page404} />
        </Switch>
      </section>
    );
  }
}

export default Portfolio;
