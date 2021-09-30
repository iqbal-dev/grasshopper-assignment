import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
const Header = () => {
  const router = useRouter();
  return (
    <>
      <Navbar bg="white" expand="lg" className="mb-5">
        <Link href="/">
          <Navbar.Brand href="/">
            <h1>Reconnect</h1>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto d-flex navigation">
            <Link href="/">
              <Nav.Link className="mr-5" href="/">
                Home
              </Nav.Link>
            </Link>
            <Link href="/about">
              <Nav.Link className="mr-5" href="/about">
                About Us
              </Nav.Link>
            </Link>

            <Link href="/service">
              <Nav.Link className="mr-5" href="/service">
                Service
              </Nav.Link>
            </Link>
            <Link href="/project">
              <Nav.Link className="mr-5" href="/project">
                Projects
              </Nav.Link>
            </Link>
            <Link href="/team">
              <Nav.Link className="mr-5" href="/team">
                Team
              </Nav.Link>
            </Link>
            <Link href="/contact">
              <Nav.Link className="mr-5" href="/contact">
                Contact
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
