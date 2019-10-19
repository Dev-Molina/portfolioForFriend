import React from "react";
import { Link } from "react-router-dom";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      col1Heading: "",
      col2Heading: ""
    };
  }

  hoverIn(colNum) {
    switch (colNum) {
      case 1:
        return this.setState({ col1Heading: "" });
      case 2:
        return this.setState({ col2Heading: "" });
      default:
        return null;
    }
  }
  hoverOut(colNum) {
    switch (colNum) {
      case 1:
        return this.setState({ col1Heading: "" });
      case 2:
        return this.setState({ col2Heading: "" });
      default:
        return null;
    }
  }

  render() {
    return (
      <div className="main">
        <div className="container animated bounceIn">
          <div className="row full-height align-items-center justify-content-center">
            <Link
              to="portfolio/professional"
              onMouseOver={() => this.hoverIn(1)}
              onMouseOut={() => this.hoverOut(1)}
              className={"col-10 col-md-10 col-lg-6 " + this.state.col1Heading}
            >
              <h1 className="center-abs">Professional</h1>
            </Link>
            <Link
              to="portfolio/personal"
              onMouseOver={() => this.hoverIn(2)}
              onMouseOut={() => this.hoverOut(2)}
              className={"col-10 col-md-10 col-lg-6 " + this.state.col2Heading}
            >
              <h1 className="center-abs">Personal</h1>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
