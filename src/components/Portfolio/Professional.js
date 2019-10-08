import React from "react";

class Professional extends React.Component {
  constructor() {
    super();
    this.state = {
      selection: 1
    };
  }

  onBtnPress(selection) {
    this.setState({
      selection
    });
  }

  renderDescription() {
    switch (this.state.selection) {
      case 1:
        return <h1>{this.state.selection}</h1>;
      case 2:
        return <h1>{this.state.selection}</h1>;
      case 3:
        return <h1>{this.state.selection}</h1>;
      case 4:
        return <h1>{this.state.selection}</h1>;
      case 5:
        return <h1>{this.state.selection}</h1>;
      case 6:
        return <h1>{this.state.selection}</h1>;
      default:
        return <h1>default</h1>;
    }
  }
  render() {
    console.log(this.state.selection);
    return (
      <div className="professional">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-4">
              <div className="list-group list-group-flush">
                <button
                  onClick={() => this.onBtnPress(1)}
                  className="list-group-item list-group-item-action"
                >
                  1
                </button>

                <button
                  onClick={() => this.onBtnPress(2)}
                  className="list-group-item list-group-item-action"
                >
                  2
                </button>

                <button
                  onClick={() => this.onBtnPress(3)}
                  className="list-group-item list-group-item-action"
                >
                  3
                </button>

                <button
                  onClick={() => this.onBtnPress(4)}
                  className="list-group-item list-group-item-action"
                >
                  4
                </button>

                <button
                  onClick={() => this.onBtnPress(5)}
                  className="list-group-item list-group-item-action"
                >
                  5
                </button>

                <button
                  onClick={() => this.onBtnPress(6)}
                  className="list-group-item list-group-item-action"
                >
                  6
                </button>
              </div>
            </div>
            <div className="col-8">{this.renderDescription()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Professional;
