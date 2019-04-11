import React from 'react';
import './About.css';
import { Jumbotron, Image } from 'react-bootstrap';
import background from '../../assets/aboutBackground.PNG'
const Home = () => {
    return (
        <div>
            <img src={background} className='about' style={{zIndex:1}}/>
            <div className='info' style={{zIndex:1000}}>
            <p>I am a motivated new graduate in Computer Science and a passionate web developer/programmer with a relentless work ethic; I always aim to see things through. Problem-solving is my hobby with a genuine love for using cutting-edge technologies to build quality projects such as React with Redux! I have always been interested in web development and with a job in this field I want to improve my knowledge and my skills in this sector.</p>
            </div>
        </div>
    )
}


export default Home;