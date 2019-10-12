import React from "react";
import DigitalCircular from './DigitalCircular';
import LowesFoods from './LowesFoods';
import DGHalloween from './DG_Halloween';
import LowesScript from './LowesScript';

class Professional extends React.Component {
  constructor() {
    super();
    this.state = {
      selection: 1,
      underline1: "active",
      underline2: "",
      underline3: "",
      underline4: "",
      underline5: "",
      underline6: ""
    };
  }

  onBtnPress(selection) {
    const key = "underline" + selection;

    this.setState({
      underline1: "",
      underline2: "",
      underline3: "",
      underline4: "",
      underline5: "",
      underline6: ""
    });

    this.setState({
      selection,
      [key]: "active"
    });
  }

  renderDescription() {
    switch (this.state.selection) {
      case 1: {
        return <DigitalCircular/>;
      }
      case 2:
        return <LowesFoods />;
      case 3:
        return <DGHalloween />;
      case 4:
        return <LowesScript />;
      case 5:
        return <h1>{this.state.selection}</h1>;
      case 6:
        return <h1>{this.state.selection}</h1>;
      default:
        return <h1>default</h1>;
    }
  }
  render() {
    return (
      <div className="professional animated fadeIn">
        <div className="container-fluid">
          <div className="row full-height align-items-center">
            <div className="col-12">
              <div className="row inner-row align-items-center p-3">
                <div className="col-3">
                  <div className="list-group">
                    <button
                      onClick={() => this.onBtnPress(1)}
                      className="list-group-item list-group-item-action"
                    >
                      <strong className={"underline " + this.state.underline1}>
                        Digital Circular React App
                      </strong>
                    </button>

                    <button
                      onClick={() => this.onBtnPress(2)}
                      className="list-group-item list-group-item-action"
                    >
                      <strong className={"underline " + this.state.underline2}>
                        Lowes Foods Fall Landing Page
                      </strong>
                      
                    </button>

                    <button
                      onClick={() => this.onBtnPress(3)}
                      className="list-group-item list-group-item-action"
                    >
                      <strong className={"underline " + this.state.underline3}>
                        Dollar General Halloween Landing Page
                      </strong>
                    </button>

                    <button
                      onClick={() => this.onBtnPress(4)}
                      className="list-group-item list-group-item-action"
                    >
                      <strong className={"underline " + this.state.underline4}>
                        Lowes HTML Node Script
                      </strong>
                    </button>

                    <button
                      onClick={() => this.onBtnPress(5)}
                      className="list-group-item list-group-item-action"
                    >
                      <strong className={"underline " + this.state.underline5}>
                        Soemthing
                      </strong>
                    </button>

                    <button
                      onClick={() => this.onBtnPress(6)}
                      className="list-group-item list-group-item-action"
                    >
                      <strong className={"underline " + this.state.underline6}>
                        Something else
                      </strong>
                    </button>
                  </div>
                </div>
                <div className="col-9">{this.renderDescription()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Professional;
