import React from "react";
import img from "../../../assets/professional/lowes-script.jpg";

const LowesScript = () => {
  return (
    <div className="digital-circular">
      <div className="container-fluid">
        <div class="row align-items-center">
          <div className="col-6">
            <h1 className="h1">Lowes Node Script</h1>
            <h2 className="h5 mb-4">Scripting</h2>
            <ul class="list-group text-left">
              <li class="">
                Ask: Create hundreds of HTML files containing an image for Lowes.
              </li>
              <li class="">Solution: Wrote a script that reads data from a spreadsheet to build HTML through a template</li>
              <li class="">Developed using Javascript on Node.js</li>
            </ul>
          </div>
          <div className="col-6 pic">
            <img class="w-100" src={img} alt="Convert to HTML"/>
          </div>
        </div>

        <hr className="my-3" />
        <p>Assets delivered</p>
        <div className="row justify-content-center">
          <div className="col-lg-4 text-left">
            <a
              className="btn btn-primary btn-lg btn-block text-white"
              href="https://gitlab.com/rubayth/lowes-node-script"
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
