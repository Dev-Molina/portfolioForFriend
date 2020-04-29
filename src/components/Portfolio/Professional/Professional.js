import React from "react";
import Freelance from "./Freelance";
import PureRed from "./PureRed";
import Macys from "./Macys";

class Professional extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className="professional animated fadeIn">
        <div className="container">
        <div className="row align-items-center">
            <div className="col-12 my-4">
              <h3 className="border-bottom text-left">Macy's Technology</h3>
            </div>
            <Macys />
          </div>
          <div className="row align-items-center">
            <div className="col-12 my-4">
              <h3 className="border-bottom text-left">PureRED</h3>
            </div>
            <PureRed />
          </div>
          <div className="row align-items-center justify-content-center freelance mb-5">
            <div className="col-12 my-4">
              <h3 className="border-bottom">Freelance</h3>
            </div>
            <Freelance />
          </div>
        </div>
      </div>
    );
  }
}

export default Professional;
