import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import feedbackkLogo from "../../../assets/personal/feedbackkLogo.png";
import feedbackk from "../../../assets/personal/feedbackk.PNG";

const FeatureProject = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="row justify-content-center align-items-center col-container p-3">
      <div className="col-6">
        <img
          style={{ height: "150px", width: "auto" }}
          src={feedbackkLogo}
          alt="logo"
        />
        <ul class="list-group text-left my-4">
          <li>
            Full stack feedback-collection application! This mega app sends a
            survey to a big list of users through email and collects their
            feedback.
          </li>
          <li>Made using React, Redux, Node + Express, MongoDB</li>
          <li>
            Features: <b>Google oAuth</b> for login, <b>Passport</b> for
            authentication, <b>Stripe</b> for billing, and <b>SendGrid</b> for
            emailing.
          </li>
        </ul>

        <a
          className="btn btn-primary text-white mr-3"
          href="https://github.com/rubayth/feedbackk-api"
        >
          View code on GitHub
        </a>
        <a
          className="btn btn-outline-primary"
          href="http://feedbackk.herokuapp.com/"
        >
          Try it Out!
        </a>
      </div>
      <div className="col-6">
        <Slider {...settings}>
          <div>
            <img className="w-100" src={feedbackk} alt="project" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default FeatureProject;
