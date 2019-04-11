import React from 'react';
import './About.css';
import 'animate.css';
//import { Jumbotron } from 'react-bootstrap';


const About = ({about}) => {
    if(about){
        return (
            <div className='about'>
                <p className='info animated fadeIn'>I am a motivated new graduate in Computer Science and a passionate web developer/programmer with a relentless work ethic; I always aim to see things through. Problem-solving is my hobby with a genuine love for using cutting-edge technologies to build quality projects such as React with Redux! I have always been interested in web development and with a job in this field I want to improve my knowledge and my skills in this sector.</p>
            </div>
        )
    }
    else{
        return(
            <div className='about'>
                <p className='info animated fadeOut'>I am a motivated new graduate in Computer Science and a passionate web developer/programmer with a relentless work ethic; I always aim to see things through. Problem-solving is my hobby with a genuine love for using cutting-edge technologies to build quality projects such as React with Redux! I have always been interested in web development and with a job in this field I want to improve my knowledge and my skills in this sector.</p>
            </div>
        )
    }
}

export default About;