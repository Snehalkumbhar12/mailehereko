import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar className="mb-4" >
            <Navbar.Brand href="/">▶️</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto"> {/* Align everything to the right */}
                    <Nav.Link as={Link} to="/">Movies</Nav.Link>
                    <Nav.Link as={Link} to="/">TV Shows</Nav.Link>
                    <Nav.Link as={Link} to="/">Suggest me {"🡢"}</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
