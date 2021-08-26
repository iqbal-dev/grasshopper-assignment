import Image from "next/image";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../../../public/logo.png";
const Header = () => {
  return (
    <>
      <Navbar bg="white" expand="lg" className="mb-5">
        <Navbar.Brand href="#home">
          <Image src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto d-flex navigation">
            <Nav.Link className="mr-5" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="mr-5" href="#link">
              About Us
            </Nav.Link>
            <Nav.Link className="mr-5" href="#link">
              Service
            </Nav.Link>
            <Nav.Link className="mr-5" href="#link">
              Projects
            </Nav.Link>
            <Nav.Link className="mr-5" href="#link">
              Blog
            </Nav.Link>
            <Nav.Link className="mr-5" href="#link">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
