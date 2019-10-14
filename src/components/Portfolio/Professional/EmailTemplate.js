import React from "react";
import img from "../../../assets/professional/spr-script.jpg";

const LowesScript = () => {
  return (
    <div className="digital-circular">
      <div className="container-fluid">
        <div class="row align-items-center">
          <div className="col-6">
            <h1 className="h1">Email Template Script</h1>
            <h2 className="h5 mb-4">Scripting/Front-End</h2>
            <ul class="list-group text-left">
              <li class="">
                Command line application
              </li>
              <li class="">Reads data from a spreadsheet and builds a templated HTML email.</li>
              <li class="">Reduced development time from hours to minutes</li>
              <li class="">Developed using Javascript on Node.js with documentation on GitLab!</li>
            </ul>
          </div>
          <div className="col-6 pic">
            <img class="w-100" src={img} alt="Email Template"/>
          </div>
        </div>

        <hr className="my-3" />
        <p>Actively in use</p>
        <div className="row justify-content-center">
          <div className="col-lg-4 text-left">
            <a
              className="btn btn-primary btn-lg btn-block text-white"
              href="https://gitlab.com/rubayth/spr-script"
            >
              View code on GitLab
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowesScript;
