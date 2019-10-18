import React from "react";
import ProjectCard from "./ProjectCard";
import CustomCard from "./CustomCard";
import FeatureProject from "./FeatureProject";

import faceRecognition from "../../../assets/personal/facerecognition.png";
import robofriends from "../../../assets/personal/robofriends.PNG";
import backgroundGen from "../../../assets/personal/backgroundGEN.PNG";
import triply from "../../../assets/personal/triply.PNG";
import foodApp from "../../../assets/personal/food-app.png";
import lamikoLogin from "../../../assets/personal/lamiko-login.png";
import lamikoPhoto from "../../../assets/personal/lamiko-photos.png";
import lamikoSound from "../../../assets/personal/lamiko-soundboard.png";

const Personal = () => {
  return (
    <div className="personal">
      <div className="container animated fadeIn">
        <h2 className="border-bottom mb-4">Featured</h2>
        <FeatureProject />

        <h2 className="border-bottom my-4">React Native</h2>
        <div className="row justify-content-around mx-0">
          <div className="col-md-8 col-lg-5 col-container animated fadeIn delay-1 mb-5">
            <CustomCard
              title="Yelp Resturant Search"
              d1="Utilizes Yelp API to retrieve resturants and catergorize by price"
              d2="On press, displays pictures of selected resturant"
              d3="Made using Expo SDK"
              images={[foodApp]}
              link="https://expo.io/@rubayth/Yelp"
            />
          </div>
          <div className="col-md-8 col-lg-5 col-container animated fadeIn delay-3 mb-5">
            <CustomCard
              title="Lamiko Firebase App"
              d1="Soundboard + Image stroage app"
              d2="Utilizes Firebase's Cloud Storage and Realtime Database"
              d3="Made using Expo SDK and Node.js"
              images={[lamikoLogin, lamikoPhoto, lamikoSound]}
              link=""
            />
          </div>
        </div>

        <h2 className="border-bottom my-4">React</h2>
        <div className="row justify-content-around mx-0">
          <div className="col-md-5 col-lg-4 col-12 col-container animated fadeIn delay-1 mb-5">
            <ProjectCard
              image={faceRecognition}
              title="Face Recognition"
              description="Detects a face from a picture! Full stack project using PERN and deployed to Heroku!"
              githubLink="https://github.com/rubayth/faceRecognition"
              websiteLink="https://rubayth.com/faceRecognition/"
            />
          </div>
          <div className="col-md-5 col-lg-4 col-12 col-container animated fadeIn delay-3 mb-5">
            <ProjectCard
              image={robofriends}
              title="Robo Friends"
              description="React + Redux app that lets you search between different API generated robots by name."
              githubLink="https://github.com/rubayth/RoboFriends"
              websiteLink="https://rubayth.com/RoboFriends/"
            />
          </div>
        </div>

        <h2 className="border-bottom my-4">Other</h2>
        <div className="row justify-content-around mx-0">
          <div className="col-md-5 col-lg-4 col-12 col-container animated fadeIn delay-2 mb-5">
            <ProjectCard
              image={backgroundGen}
              title="Background Generator"
              description="Choose two colors and generate a background with provided CSS to apply to your code!"
              githubLink="https://github.com/rubayth/backgroundGenerator"
              websiteLink="https://rubayth.com/backgroundGenerator/"
            />
          </div>
          <div className="col-md-5 col-lg-4 col-12 col-container animated fadeIn delay-4 mb-5">
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
