import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';

function NavBarComp() {
    return (
        <Router>
            <div>
                <Navbar bg="dark" variant='dark' expand="lg">
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
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
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
            </div>
            <div>
                <Routes>
                    <Route path="/home" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/contact" element={<Contact/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default NavBarComp;