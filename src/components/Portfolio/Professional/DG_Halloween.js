import React from "react";
import img from "../../../assets/professional/dg-halloween.png";

const DG_Halloween = () => {
  return (
    <div className="digital-circular">
      <div className="container-fluid">
        <div class="row align-items-center">
          <div className="col-6">
            <h1 className="h1">Halloween Page</h1>
            <h2 className="h5 mb-4">Front-End Developer</h2>
            <ul class="list-group text-left">
              <li class="">
                Collabated with designers to meet their requirments
              </li>
              <li class="">Converted PSD to into functional web page</li>
              <li class="">Developed using HTML, SCSS/CSS, JS/jQuery</li>
            </ul>
          </div>
          <div className="col-6 pic">
            <img class="w-100" src={img} alt="Halloween Page"/>
          </div>
        </div>

        <hr className="my-3" />
        <p>In production</p>
        <div className="row justify-content-center">
          <div className="col-lg-3 text-left">
            <a
              className="btn btn-primary btn-lg btn-block text-white"
              href="https://www.dollargeneral.com/seasonal/halloween.html"
            >
              View Page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DG_Halloween;
