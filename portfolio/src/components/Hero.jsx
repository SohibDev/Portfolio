import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import profile from "../images/das2.jpg";
import profile2 from "../images/profile2.jpg";
import resume from '../files/US.pdf'

function PortfolioHero() {
  const heroImageUrl = profile;

  return (
    <div
      className="hero-section rounded-5"
      style={{ backgroundImage: `url(${heroImageUrl})`, marginTop: "90px" }}
    >
      <Container>
        <Row
          className="justify-content-center align-items-center"
          style={{ height: "50vh" }}
        >
          <Col md={8} lg={6} className="text-start">
            <h1 className="text-white mb-4">Uzoqov Sohibjon</h1>
            <h2 className="text-white mb-4">Front-End Developer</h2>
            <p className="text-white mb-5">
              I'm really interested in doing the UI part!
            </p>
            <div className="d-flex flex-row">
              <a href="https://t.me/sohibjon0101" target="_blank">
                <Button
                  variant="primary"
                  size="lg"
                  className="me-3"
                >
                  Hire Me
                </Button>
              </a>
              <Button variant="outline-light" size="lg" href={resume}>
                <FontAwesomeIcon icon={faFileDownload} className="me-2" />
                Download CV
              </Button>
            </div>
          </Col>
          <Col className="text-end d-none d-lg-block">
            <img
              src={profile2}
              alt=""
              style={{ maxHeight: "50vh", maxWidth: "500px" }}
              className="rounded-end-4"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PortfolioHero;
