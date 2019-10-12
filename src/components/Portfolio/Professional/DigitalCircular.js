import React from "react";
import img from "./prdc-page.png";
const DigitalCircular = () => {
  return (
    <div className="digital-circular">
      <div className="container-fluid">
        <div class="row align-items-center">
          <div className="col-6">
            <h1 className="h1">Digital Circular</h1>
            <h2 className="h5">Lead React Developer</h2>
            <ul class="list-group text-left">
              <li class="">
                Makes a call to our API to receive JSON data of offers to be
                displayed.
              </li>
              <li class="">
                Created logic to group raw data together based on promotion type
                into reusable components
              </li>
              <li class="">
                Developed using React + Redux, Bootstrap, SCSS/CSS
              </li>
              <li class="">From wireframe --> WordPress mock up --> React</li>
            </ul>
          </div>
          <div className="col-6" style={{ overflow: "scroll", height: "50%", overflowX:'hidden' }}>
            <img class="w-100" src={img} />
          </div>
        </div>

        <hr className="my-3" />
        <p>Currently not in production</p>
        <div className="row justify-content-center">
          <div className="col-lg-3 text-left">
            <a
              className="btn btn-primary btn-lg btn-block text-white"
              to="/portfolio"
            >
              View Work
            </a>
          </div>
          <div className="col-lg-3 text-left">
            <a
              className="btn btn-outline-primary btn-lg btn-block"
              to="/about"
            >
              Try it Out!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalCircular;
