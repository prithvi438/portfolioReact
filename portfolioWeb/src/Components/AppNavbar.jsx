import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink as RouterNavLink } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const AppNavbar = () => {
    // const navigate = useNavigate();
    const [colorMode, setColorMode] = useState('LIGHT');

    useEffect(() => {
        const mode = localStorage.getItem('colorMode');
        setColorMode(mode || 'LIGHT');
    }, []);

    return (
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">My Portfolio</Navbar.Brand>
          <Nav className="me-auto">
            


            <Nav.Link href="/publication">Publication</Nav.Link>
            <Nav.Link href="/project">Project</Nav.Link>
            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link href="/teaching">Teachings</Nav.Link>
            <Nav.Link href="#pricing">Talks</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
};

export default AppNavbar;
