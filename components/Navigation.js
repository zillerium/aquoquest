// Navigation.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home" onClick={() => scrollToSection('home')}>
        <img src="/aquologo.png" alt="Logo" className="logo-img" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"> {/* Change this line to align nav items to the right */}
          <Nav.Link onClick={() => scrollToSection('AboutUs')}>About</Nav.Link>
          <Nav.Link onClick={() => scrollToSection('TechTabs')}>Technology</Nav.Link>
          <Nav.Link onClick={() => scrollToSection('Pitch')}>White Paper</Nav.Link>
	  <Nav.Link onClick={() => scrollToSection('Story')}>Solution</Nav.Link>
          <Nav.Link onClick={() => scrollToSection('Tokenization')}>Tokenization</Nav.Link>
          {/* ... other Nav.Links ... */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;

