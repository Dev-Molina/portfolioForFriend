import React from 'react';
import './About.css';
import 'animate.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import myPic from '../../assets/pic.JPG'

const About = ({about}) => {
    if(about){
        return (
            <div className='about'>
            <h1>About</h1>
                <Container>
                <Row className='align-items-center'>
                    <Col>
                        <Image className="myPic animated fadeIn" alt='logo' src={myPic}></Image>
                    </Col>
                    <Col>
                        <p className='info animated fadeIn'>I am a motivated new graduate in Computer Science and a passionate web developer/programmer 
                            with a relentless work ethic; I always aim to see things through.
                             Problem-solving is my hobby with a genuine love for using cutting-edge technologies such as React and Node to build quality projects! 
                             I have always been interested in web development and with a job in this field I want to improve my knowledge and my skills in this sector.</p>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
    else{
        return(
            <div className='about'>
            <h1>About</h1>
                <Container>
                <Row className='align-items-center'>
                    <Col>
                        <Image className="myPic animated fadeOut" alt='logo' src={myPic}></Image>
                    </Col>
                    <Col>
                        <p className='info animated fadeOut'>I am a motivated new graduate in Computer Science and a passionate web developer/programmer with a relentless work ethic; I always aim to see things through. Problem-solving is my hobby with a genuine love for using cutting-edge technologies to build quality projects such as React with Redux! I have always been interested in web development and with a job in this field I want to improve my knowledge and my skills in this sector.</p>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}

export default About;