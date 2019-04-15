import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './Resume.css';

const Resume = () =>  {
  return (
    <div>
      <h3 style={{color:'white'}}>Resume</h3>
      <Button
        style={{color:'white'}}
        variant="outline-secondary" 
        onClick= { () => window.open('https://sleepy-refuge-68921.herokuapp.com/resume.pdf')}
        >Download a Copy
      </Button>
    </div>
  );
}


export default Resume;