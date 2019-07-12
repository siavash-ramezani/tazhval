import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Row } from "react-bootstrap";
class Menu extends Component {
  state = {};

  render() {
    return (
      <Row className="justify-content-end mx-0">
        <Navbar expand="lg" style={{ float: "right" }}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="mr-2" id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/link">About Us</Nav.Link>
              <Nav.Link href="/link">Contact Us</Nav.Link>
              <Nav.Link href="/link">Services</Nav.Link>
              <Nav.Link href="/link">Portfolio</Nav.Link>
              <Nav.Link href="/link">About Us</Nav.Link>
              <NavDropdown title="Language" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Eng</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Fa</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Row>
    );
  }
}

export default Menu;
