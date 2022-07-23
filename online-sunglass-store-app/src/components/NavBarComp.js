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
import KidsProducts from '../pages/KidsGlasses';
import MenProducts from '../pages/MenGlasses';
import WomenProducts from '../pages/WomenGlasses';
import NotFoundPage from '../pages/NotFoundPage';
import logo from '../images/logo_white.png';

function NavBarComp() {
    return (
        <Router>
            <div>
                <Navbar bg="dark" variant='dark' expand="lg">
                    <Container>
                        <Navbar.Brand as={Link} to="/">
                            <img
                                alt="Logo of Maruel"
                                src={logo}
                                width="80"
                                className="d-inline-block"
                            />{' '}
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                                <NavDropdown title="Sunglasses" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/women">For women</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/men">
                                        For men
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/kids">For kids</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item as={Link} to="/home">
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
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/women" element={<WomenProducts />} />
                    <Route path="/men" element={<MenProducts />} />
                    <Route path="/kids" element={<KidsProducts />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default NavBarComp;