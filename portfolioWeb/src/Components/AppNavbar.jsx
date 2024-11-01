import React, {useEffect} from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import DarkModeSwitch from './DarkModeSwitch';

const AppNavbar = () => {
    let colorMode = 'LIGHT';

    useEffect(() => {
        colorMode = localStorage.getItem('colorMode')
    }, [localStorage.getItem('colorMode')])


  return (
    <Navbar bg={colorMode == 'DARK' ? "dark" : "light"} data-bs-theme={colorMode == 'DARK' ? "dark" : "light"} >
          <Navbar.Brand href="#home" style={{marginLeft: '10px'}}>My Portfolio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#features">Publications</Nav.Link>
            <Nav.Link href="#pricing">Projects</Nav.Link>
            <Nav.Link href="#pricing">News</Nav.Link>
            <Nav.Link href="#pricing">Teachings</Nav.Link>
          </Nav>
          <Nav.Link href="#pricing" style={{marginRight: '30px'}}>
            <DarkModeSwitch/>
          </Nav.Link>
      </Navbar>
  )
}

export default AppNavbar