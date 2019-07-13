import React from "react";
import { Nav } from 'react-bootstrap';
import "./style.css";

function Navbar() {
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Clicky Game</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link >Click an image to begin!</Nav.Link>
      <Nav.Link>Score:{}</Nav.Link>
    </Nav>

  </Navbar>
  );
}

export default Navbar;
