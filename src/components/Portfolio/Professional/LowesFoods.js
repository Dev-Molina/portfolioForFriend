import React from "react";
import img from "../../../assets/projects/lowes-foods.png";

const LowesFoods = () => {
  return (
    <div className="digital-circular">
      <div className="container-fluid">
        <div class="row align-items-center">
          <div className="col-6">
            <h1 className="h1">Lowes Foods Fall Page</h1>
            <h2 className="h5 mb-4">Front-End Developer</h2>
            <ul class="list-group text-left">
              <li class="">
                Collabated with designers to meet their requirments
              </li>
              <li class="">
                Converted PSD to into functional web page
              </li>
              <li class="">
                Developed using HTML, SCSS/CSS, JS/jQuery
              </li>
            </ul>
          </div>
          <div className="col-6 pic">
            <img class="w-100" src={img} />
          </div>
        </div>

        <hr className="my-3" />
        <p>In process to production</p>
        <div className="row justify-content-center">
          <div className="col-lg-3 text-left">
            <a className="btn btn-primary btn-lg btn-block text-white" href="http://rubayth.gitlab.io/lowes-foods-fall/">
              View Page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowesFoods;
