import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './Resume.css'
import Contact from '../Contact/Contact'

const Resume = () =>  {
  return (
    <Container style={{}}>
      <Row>
        <Col>
          <div>
            <h1 style={{color:'white'}}>Resume</h1>
            <br/>
            <Button
              style={{color:'white'}}
              variant="outline-secondary" 
              size="lg"
              onClick= { () => window.open('https://sleepy-refuge-68921.herokuapp.com/resume.pdf')}
              >Download a Copy
            </Button>
          </div>
        </Col>
        <Col>
          <Contact/>
        </Col>
      </Row>
    </Container>
    
  );
}


export default Resume;