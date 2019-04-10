import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Rubayth Haque</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-center">
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar> 
    );
    
}

export default Navigation;