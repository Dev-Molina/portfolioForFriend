import React from 'react';
import './Portfolio.css'
import { CardDeck } from 'react-bootstrap';
import ProjectCard from '../ProjectCard/ProjectCard';
import faceRecognition from '../../assets/facerecognition.png';
import robofriends from '../../assets/robofriends.jpg';
import backgroundGen from '../../assets/backgroundGen.PNG';


const Portfolio = () => {
        return (
            <div className='portfolio'>
            <h1 className='title'>Portfolio</h1>
                <CardDeck>
                    <ProjectCard
                        image={faceRecognition}
                        title='Face Recognition'
                        description='Detects a face from a picture! Full stack project using PERN and deployed to Heroku!'
                        githubLink='https://github.com/rubayth/faceRecognition'
                        websiteLink='https://face-detect-project.herokuapp.com/'
                        />
                    <ProjectCard
                        image={robofriends}
                        title='Robo Friends'
                        description="React app that lets you search between different API generated robots by name."
                        githubLink='https://github.com/rubayth/RoboFriends'
                        websiteLink='https://rubayth.github.io/RoboFriends/'
                        />
                    <ProjectCard
                            image={backgroundGen}
                            title='Background Generator'
                            description="Choose two colors and generate a background with provided CSS to apply to your code!"
                            githubLink='https://github.com/rubayth/backgroundGenerator'
                            websiteLink='https://rubayth.github.io/backgroundGenerator/'
                            />
                </CardDeck>
            </div>
            )
        }       
export default Portfolio;