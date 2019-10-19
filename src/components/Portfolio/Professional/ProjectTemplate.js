import React from "react";

class DigitalCircular extends React.Component {
  renderPoints(li) {
    return li.map((description, i) => {
      return <li key={i}>{description}</li>;
    });
  }

  renderButtons(button) {
    const length = Object.keys(button).length;

    if (length === 1) {
      return (
        <div className="col-lg-5 col-md-6 col-12 text-left">
          <a
            className="btn btn-primary btn-lg btn-block text-white"
            href={button[0].href}
          >
            {button[0].description}
          </a>
        </div>
      );
    } else if (length === 2) {
      return (
        <>
          <div className="col-lg-5 col-md-6 col-12 text-left">
            <a
              className="btn btn-primary btn-lg btn-block text-white"
              href={button[0].href}
            >
              {button[0].description}
            </a>
          </div>
          <div className="col-lg-5 col-md-6 col-12 text-left">
            <a
              className="btn btn-outline-primary btn-lg btn-block"
              href={button[1].href}
            >
              {button[1].description}
            </a>
          </div>
        </>
      );
    } else {
      return;
    }
  }
  render() {
    const { title, position, li, status, button, img } = this.props;
    return (
      <div className="digital-circular">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12">
              <h1 className="h1 d-none d-md-block">{title}</h1>
              <h2 className="h5 mb-4">{position}</h2>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-6">
              <ul className="list-group text-left">{this.renderPoints(li)}</ul>
            </div>
            <div className="col-6 pic">
              <img className="w-100" src={img} alt="Project" />
            </div>
          </div>

          <hr className="my-3" />
          <p>{status}</p>
          <div className="row justify-content-center">
            {this.renderButtons(button)}
          </div>
        </div>
      </div>
    );
  }
}

export default DigitalCircular;
