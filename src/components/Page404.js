import React from "react";
import Particles from "react-particles-js";

const Page404 = ({ location }) => (
  <section>
    <Particles className="particles-js" />
    <div className="container">
      <div className="row align-items-center full-height">
        <div className="col-12">
          <h1 className="display-1">404</h1>
          <h2>
            No match found for <code>{location.pathname}</code>
          </h2>
          <a className="btn btn-primary btn-lg mt-4">View Home Page</a>
        </div>
      </div>
    </div>
  </section>
);

export default Page404;
