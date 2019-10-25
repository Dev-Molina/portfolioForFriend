import React from "react";
import ProjectCard from "./ProjectCard";
import CustomCard from "./CustomCard";
import FeatureProject from "./FeatureProject";

const Personal = () => {
  return (
    <div className="personal">
      <div className="container animated fadeIn">
        <h3 className="border-bottom mb-4">Featured</h3>
        <FeatureProject />

        <h3 className="border-bottom my-4">React Native</h3>
        <div className="row justify-content-around mx-0">
          <div className="col-md-8 col-lg-5 col-container animated fadeIn delay-1 mb-5">
            <CustomCard
              title="Yelp Resturant Search"
              d1="Utilizes Yelp API to retrieve resturants and catergorize by price"
              d2="On press, displays pictures of selected resturant"
              d3="Made using Expo SDK"
              images={["https://assets.rubayth.com/portfolio/personal/food-app.png"]}
              link="https://expo.io/@rubayth/Yelp"
            />
          </div>
          <div className="col-md-8 col-lg-5 col-container animated fadeIn delay-3 mb-5">
            <CustomCard
              title="Lamiko Firebase App"
              d1="Soundboard + Image storage app"
              d2="Utilizes Firebase's Cloud Storage and Realtime Database"
              d3="Made using Expo SDK and Node.js"
              images={["https://assets.rubayth.com/portfolio/personal/lamiko-login.png", "https://assets.rubayth.com/portfolio/personal/lamiko-photos.png", "https://assets.rubayth.com/portfolio/personal/lamiko-soundboard.png"]}
              link=""
            />
          </div>
        </div>

        <h3 className="border-bottom my-4">React</h3>
        <div className="row justify-content-around mx-0">
          <div className="col-md-5 col-lg-4 col-12 col-container animated fadeIn delay-1 mb-5">
            <ProjectCard
              image="https://assets.rubayth.com/portfolio/personal/facerecognition.png"
              title="Face Recognition"
              description="Detects a face using Clarifai's image recognition API. Full stack project using PERN stack and deployed to Heroku!"
              githubLink="https://github.com/rubayth/faceRecognition"
              websiteLink="https://app.rubayth.com/faceRecognition/"
            />
          </div>
          <div className="col-md-5 col-lg-4 col-12 col-container animated fadeIn delay-3 mb-5">
            <ProjectCard
              image="https://assets.rubayth.com/portfolio/personal/robofriends.PNG"
              title="Robo Friends"
              description="React + Redux app that fetches JSON and lets you search between different API generated robots by name."
              githubLink="https://github.com/rubayth/RoboFriends"
              websiteLink="https://app.rubayth.com/RoboFriends/"
            />
          </div>
        </div>

        <h3 className="border-bottom my-4">Other</h3>
        <div className="row justify-content-around mx-0">
          <div className="col-md-5 col-lg-4 col-12 col-container animated fadeIn delay-2 mb-5">
            <ProjectCard
              image="https://assets.rubayth.com/portfolio/personal/backgroundGen.PNG"
              title="Background Generator"
              description="Choose two colors and generate a background with provided CSS to apply to your code!"
              githubLink="https://github.com/rubayth/backgroundGenerator"
              websiteLink="https://app.rubayth.com/backgroundGenerator/"
            />
          </div>
          <div className="col-md-5 col-lg-4 col-12 col-container animated fadeIn delay-4 mb-5">
            <ProjectCard
              image="https://assets.rubayth.com/portfolio/personal/triply.PNG"
              title="Triply"
              description="Website to search Flight/Hotels! First project utilizing APIs. Made using HTML, PHP, CSS, and JS."
              githubLink="https://github.com/rubayth/Triply"
              websiteLink="https://app.rubayth.com/Triply/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
