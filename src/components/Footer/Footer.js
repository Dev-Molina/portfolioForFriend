import React from 'react';
import './Footer.css'
import Resume from '../Resume/Resume';
const Footer = () => {
    return(
        <footer className='footer'>
        <Resume/>
            <br/><br/>
            <i className="devicon-bootstrap-plain-wordmark"></i>
            <i className="devicon-nodejs-plain-wordmark"></i>
            <i className="devicon-react-original-wordmark"></i>
            <i className="devicon-express-original-wordmark"></i>
            <i className="devicon-heroku-original-wordmark"></i>
            <br/>
            RUBAYTH HAQUE ©2019
        </footer>
    ) 
}

export default Footer;