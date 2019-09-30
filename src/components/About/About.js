import React from "react";
import "./About.css";
import "animate.css";
import { Container, Row, Col, Image, ListGroup } from "react-bootstrap";
import myPic from "../../assets/pic2.JPG";

const About = () => {
  return (
    <div className="about">
      <h1 className="animated fadeIn">About</h1>
      <br />
      <Container>
        <Row>
          <Col md>
            <Image
              className="myPic animated fadeInLeft delay-1"
              alt="logo"
              src={myPic}
            ></Image>
            <br />
            <br />
            <p className="info animated fadeInLeft">
              I am a motivated new graduate in Computer Science and a passionate
              web developer/programmer with a relentless work ethic; I always
              aim to see things through. Problem-solving is my hobby with a
              genuine love for using cutting-edge technologies such as React and
              Node to build quality projects! I have always been interested in
              web development and with a job in this field I want to improve my
              knowledge and my skills in this sector.
            </p>
          </Col>
          <Col className="animated fadeInRight">
            <ListGroup style={{ backgroundColor: "#58426d !important" }}>
              <ListGroup.Item>HTML</ListGroup.Item>
              <ListGroup.Item>CSS | BOOTSTRAP | MATERALIZE</ListGroup.Item>
              <ListGroup.Item>JAVASCRIPT</ListGroup.Item>
              <ListGroup.Item>REACT. JS + REDUX</ListGroup.Item>
              <ListGroup.Item>NODE. JS + EXPRESS. JS</ListGroup.Item>
              <ListGroup.Item>POSTGRESQL | MONGODB</ListGroup.Item>
              <ListGroup.Item>GIT | GITHUB</ListGroup.Item>
              <ListGroup.Item>HEROKU</ListGroup.Item>
              <ListGroup.Item>API SERVICES</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <br />
    </div>
  );
};

export default About;
