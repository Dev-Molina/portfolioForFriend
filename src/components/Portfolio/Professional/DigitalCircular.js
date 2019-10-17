import React from "react";
import img from "../../../assets/professional/prdc-page.jpg";

const DigitalCircular = () => {
  return (
    <div className="digital-circular">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12">
            <h1 className="h1 d-none d-md-block">Digital Circular</h1>
            <h2 className="h5 mb-4">Lead React Developer</h2>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-6">
            <ul class="list-group text-left">
              <li class="">
                Makes a call to our API to receive JSON data of offers to be
                displayed.
              </li>
              <li class="">
                Created logic to group raw data together based on promotion type
                into reusable components.
              </li>
              <li class="">
                Developed using React + Redux, Node + Express, Bootstrap,
                SCSS/CSS.
              </li>
              <li class="">From wireframe --> WordPress mock up --> React</li>
            </ul>
          </div>
          <div className="col-6 pic">
            <img class="w-100" src={img} alt="Digital Circular App" />
          </div>
        </div>

        <hr className="my-3" />
        <p>Currently not in production</p>
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-6 col-12 text-left">
            <a
              className="btn btn-primary btn-lg btn-block text-white mb-2"
              href="/portfolio"
            >
              View code on GitHub
            </a>
          </div>
          <div className="col-lg-5 col-md-6 col-12 text-left">
            <a
              className="btn btn-outline-primary btn-lg btn-block"
              href="https://rubayth.com/digital-circular"
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
