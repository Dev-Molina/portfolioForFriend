import React from 'react';
import './Footer.css'
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return(
        <footer className='footer'>
            <SocialIcon className='icons'
            url="https://github.com/rubayth"
            bgColor="white"/>
            <SocialIcon className='icons'
            url="https://www.linkedin.com/in/rubayth/"
            bgColor="white"/>
            <SocialIcon className='icons'
            url="mailto:rubayth19@gmail.com"
            bgColor="white"/>
            <br/><br/>
            RUBAYTH HAQUE ©2019
        </footer>
    ) 
}

export default Footer;