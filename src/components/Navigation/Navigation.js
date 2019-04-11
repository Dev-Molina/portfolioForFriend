import React from 'react';
//import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navigation.css'
import Button from 'react-bootstrap/Button';


const Navigation = () => {
    return (
        <div className="navigation">
            <Nav className="justify-content-center">
                <Nav.Item>
                    <Nav.Link href="#home"><Button variant="light">Home</Button></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#about"><Button variant="light">About Me</Button></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#projects"><Button variant="light">Projects</Button></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#resume"><Button variant="light">Resume</Button></Nav.Link>
                </Nav.Item>
            </Nav>;
        </div>
    );
    
}

export default Navigation;