import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './Resume.css'
import Contact from '../Contact/Contact'

const Resume = () =>  {
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <h1 style={{color:'white'}}>Resume</h1>
            <br/>
            <Button
              style={{color:'white'}}
              variant="outline-secondary" 
              size="lg"
              ><a href="" download>Download a Copy</a>
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