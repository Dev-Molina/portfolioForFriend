import React from "react";
import ReactCompareImage from "react-compare-image";
import particleParam from './particleParam';
import Particles from 'react-particles-js';
import "../../assets/aboutBackground.PNG";

class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      col1Heading: "center-abs",
      col2Heading: "center-abs"
    };
  }

  hoverIn(colNum) {
    switch (colNum) {
      case 1:
        return this.setState({ col1Heading: "center-abs animated pulse" });
      case 2:
        return this.setState({ col2Heading: "center-abs animated pulse" });
      default:
        return null;;
    }
  }
  hoverOut(colNum) {
    switch (colNum) {
      case 1:
        return this.setState({ col1Heading: "center-abs" });
      case 2:
        return this.setState({ col2Heading: "center-abs" });
      default:
        return null;
    }
  }

  render() {
    return (
      <section className="portfolio animated bounceIn">
        <Particles params={particleParam}/>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div
              onMouseOver={() => this.hoverIn(1)}
              onMouseOut={() => this.hoverOut(1)}
              className="col-lg-6"
            >
              <h1 className={this.state.col1Heading}>Professional</h1>
            </div>
            <div
              onMouseOver={() => this.hoverIn(2)}
              onMouseOut={() => this.hoverOut(2)}
              className="col-lg-6"
            >
              <h1 className={this.state.col2Heading}>Personal</h1>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
