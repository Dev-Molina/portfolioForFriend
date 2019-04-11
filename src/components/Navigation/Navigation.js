import React from 'react';
//import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navigation.css'


const Navigation = () => {
    return (
        <div className="navigation">
            <Nav className="justify-content-center">
                <Nav.Item>
                    <Nav.Link href="#home"><button>Home</button></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#about"><button>About Me</button></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#projects"><button>Projects</button></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#resume"><button>Resume</button></Nav.Link>
                </Nav.Item>
            </Nav>;
        </div>
    );
    
}

export default Navigation;