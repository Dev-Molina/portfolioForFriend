import React from "react";
import "./Home.css";
import planetVideo from "./Particles.mp4";

class Home extends React.Component {
  render() {
    return (
      <div className="home container-fluid">
        <video autoPlay loop className="w-100" id="myVideo">
          <source src={planetVideo} type="video/mp4" />
        </video>
        <div className="row align-items-center justify-content-center">
          <div className="text-left">
            <h1>Hello, I'm Rubayth Haque</h1>
            <h2>Full Stack Web Developer</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
