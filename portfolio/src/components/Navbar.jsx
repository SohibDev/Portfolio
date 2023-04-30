import React, { useState, useEffect } from "react";
import Logo from "../images/16-.jpg";
import { Container, Navbar, Nav, Button, Offcanvas } from "react-bootstrap";

function CustomNavbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState("80px");

  const handleMenuClose = () => setShowMenu(false);
  const handleMenuShow = () => setShowMenu(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setNavbarHeight("60px");
      } else {
        setNavbarHeight("80px");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      bg="light"
      expand="md"
      style={{
        boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.2)",
        height: navbarHeight,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        transition: "height 0.3s",
      }}
    >
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="/" style={{ display: "flex", alignItems: "center" }}>
          {/* <img
            src={Logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="Logo"
            style={{ marginRight: "10px" }}
          /> */}
          <h2>US Coder</h2>
        </Navbar.Brand>
        {isMobile ? (
          <Button variant="outline-dark" onClick={handleMenuShow}>
            &#9776;
          </Button>
        ) : (
          <Nav className="justify-content-end">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        )}
        <Offcanvas show={showMenu} onHide={handleMenuClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className={isMobile ? "flex-column" : "justify-content-end"}>
              <Nav.Link href="#home" onClick={handleMenuClose}>
                Home
              </Nav.Link>
              <Nav.Link href="#about" onClick={handleMenuClose}>
                About
              </Nav.Link>
              <Nav.Link href="#projects" onClick={handleMenuClose}>
                Projects
              </Nav.Link>
              <Nav.Link href="#contact" onClick={handleMenuClose}>
                Contact
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
