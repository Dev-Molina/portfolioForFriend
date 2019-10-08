import React from "react";
import { Link } from "react-router-dom";
import video from "./Particles.mp4";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      autoplay: "autoplay",
      section:"home animated fadeOut"
    };
  }
  componentDidMount() {
    this.refs.vidRef.play();
  }
  render() {
    return (
      <section className="home">
        <video
          autoplay="autoplay"
          loop
          className="w-100"
          ref="vidRef"
          id="myVideo"
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="container-fluid">
          <div className="row align-items-center justify-content-left">
            <div className="col-12 col-lg-6 text-left">
              <h1 className="animated bounceInLeft">Hello, I'm Rubayth Haque</h1>
              <h2 className="animated bounceInLeft delay-1">Full Stack Web Developer</h2>
            </div>
          </div>
          <div className="row justify-content-left">
            <div className="col-lg-2 text-left">
              <Link
                className="mt-3 btn btn-primary btn-lg btn-block"
                to="/portfolio"
              >
                View Work
              </Link>
            </div>
            <div className="col-lg-2 text-left">
            <Link
                className="mt-3 btn btn-outline-primary btn-lg btn-block"
                to="/about"
              >
                About me
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
