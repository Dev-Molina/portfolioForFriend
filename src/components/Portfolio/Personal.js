import React from "react";
import { Button } from "react-bootstrap";
import ProjectCard from "../ProjectCard/ProjectCard";
import faceRecognition from "../../assets/facerecognition.png";
import robofriends from "../../assets/robofriends.jpg";
import backgroundGen from "../../assets/backgroundGen.PNG";
import triply from "../../assets/triply.PNG";
import feedbackkLogo from "../../assets/feedbackkLogo.png";
//import feedbackk from "../../assets/feedbackk.PNG";
import GitHubButton from "react-github-btn";

const Personal = () => {
  return (
    <div className="personal">
      <div className="container-fluid">
        <div className="jumbotron animated fadeIn">
          <img
            style={{ height: "150px", width: "auto" }}
            src={feedbackkLogo}
            alt="logo"
          />
          <p>
            Full stack feedback-collection application! This mega app sends a
            survey to a big list of users through email and collects their
            feedback.
          </p>
          <p>Made using React, Redux, Node + Express, MongoDB</p>
          <p>
            Features: <b>Google oAuth</b> for login, <b>Passport</b> for
            authentication, <b>Stripe</b> for billing, and <b>SendGrid</b> for
            emailing.
          </p>
          <GitHubButton
            href="https://github.com/rubayth/feedbackk-api"
            data-size="large"
            aria-label="Follow @Rubayth on GitHub"
          >
            View code on GitHub
          </GitHubButton>
          <br />
          <Button
            style={{ color: "white" }}
            variant="primary"
            onClick={() => window.open("http://feedbackk.herokuapp.com/")}
          >
            Visit website
          </Button>
        </div>
        <div className="row justify-content-center mb-5">
          <div className="col-md-4 animated fadeIn delay-1">
            <ProjectCard
              image={faceRecognition}
              title="Face Recognition"
              description="Detects a face from a picture! Full stack project using PERN and deployed to Heroku!"
              githubLink="https://github.com/rubayth/faceRecognition"
              websiteLink="https://rubayth.com/faceRecognition/"
            />
          </div>
          <div className="col-md-4 animated fadeIn delay-3">
            <ProjectCard
              image={robofriends}
              title="Robo Friends"
              description="React + Redux app that lets you search between different API generated robots by name."
              githubLink="https://github.com/rubayth/RoboFriends"
              websiteLink="https://rubayth.com/RoboFriends/"
            />
          </div>
        </div>
        <div className="row justify-content-center mb-5">
          <div className="col-md-4 animated fadeIn delay-2">
            <ProjectCard
              image={backgroundGen}
              title="Background Generator"
              description="Choose two colors and generate a background with provided CSS to apply to your code!"
              githubLink="https://github.com/rubayth/backgroundGenerator"
              websiteLink="https://rubayth.com/backgroundGenerator/"
            />
          </div>
          <div className="col-md-4 animated fadeIn delay-4">
            <ProjectCard
              image={triply}
              title="Triply"
              description="Website to search Flight/Hotels! First project utilizing APIs. Made using HTML, PHP, CSS, and JS."
              githubLink="https://github.com/rubayth/Triply"
              websiteLink="https://rubayth.com/Triply/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
