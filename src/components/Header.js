// client/src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const linkStyle = {
    fontSize: '1.2rem', // Set the font size as per your preference
    fontWeight: 'bold',
  };

  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand as={Link} to="/" style={linkStyle}>
        <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
        E-commerce Store
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/" style={linkStyle}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/login" style={linkStyle}>
            Login
          </Nav.Link>
          <Nav.Link as={Link} to="/register" style={linkStyle}>
            Register
          </Nav.Link>
          <Nav.Link as={Link} to="/product" style={linkStyle}>
            Product
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
