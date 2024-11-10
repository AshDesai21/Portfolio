import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row className="justify-content-center" style={{ padding: "10px" }}>
          <Col
            md={7}
            className="d-flex flex-column align-items-center"
            style={{ paddingTop: "30px", paddingBottom: "50px" }}
          >
            <h1 className="section-title">
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={5} className="d-flex justify-content-center about-img">
            <img
              src={laptopImg}
              alt="about"
              className="img-fluid"
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
            />
          </Col>
        </Row>
        
        <SectionTitle title="Professional Skillset" />
        <Techstack />

        <SectionTitle title="Tools I use" />
        <Toolstack />

        
      </Container>
    </Container>
  );
}

// Reusable section title component for cleaner code
const SectionTitle = ({ title }) => (
  <h1 className="project-heading">
    <strong className="purple">{title}</strong>
  </h1>
);

export default About;
