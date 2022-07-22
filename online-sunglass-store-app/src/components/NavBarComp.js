import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBarComp() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand href="#home">
            {/* <img
              alt=""
              src="../images/logotype.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '} */}
            MARUEL
          </Navbar.Brand>
        {/* <Navbar.Brand href="#home">MARUEL</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <NavDropdown title="Sunglasses" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">For women</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                For men
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">For kids</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                All products
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComp;