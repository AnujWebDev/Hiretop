import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className='mx-5' id='logo'><img src='images/main.png' alt="this is an logo" width={'132px'} height={'36px'}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  className='text-center' id="basic-navbar-nav">
          <Nav id="items" className="ms-auto">
            <Nav.Link>
                <Link className='elements' to="">For Employers</Link>
            </Nav.Link>
            <Nav.Link>
                <Link className='elements' to="">Refer And Earn ₹15k</Link>
            </Nav.Link>
            <Nav.Link>
                <Link className='elements' to="/login">Login</Link>
            </Nav.Link>
            <Nav.Link>
                <Link className='elements' to="/signUp">signUp</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
