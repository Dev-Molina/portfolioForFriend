import React from 'react';
import { Button } from 'react-bootstrap';
import './Resume.css';

const Resume = () =>  {
  return (
    <div className='resume'>
      <Button
        style={{color:'white'}}
        variant="outline-secondary" 
        onClick= { () => window.open('https://rubayth.herokuapp.com/resume.pdf')}
        >Download my resume!
      </Button>
      
    </div>
  );
}


export default Resume;
