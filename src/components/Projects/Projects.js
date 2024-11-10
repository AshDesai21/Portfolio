import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ashzone from "../../Assets/Projects/ashzone.png";
import business_website from "../../Assets/Projects/business_website.png";

import chat from "../../Assets/Projects/chat.jpg";
import JobFind from "../../Assets/Projects/JobFind.com.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ashzone}
              isBlog={false}
              title="ashzone.com"
              description="AshZone.com is an e-commerce platform built with Python and Flask, where users can easily buy and sell products. It features secure user registration, product listings, a shopping cart, and order management for a seamless shopping experience."
              ghLink="https://github.com/AshrafDesai/AshZone.Com"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={business_website}
              isBlog={false}
              title="SurfaTech Integrated Solutions"
              description="SurfaTech Integrated Solution is a business website designed to showcase the company's range of services and brands. The platform highlights the expertise and offerings of SurfaTech, while providing an Enquiry Page for visitors to request more information about any product or service. It's a user-friendly site aimed at connecting customers with the solutions they need."
              ghLink="https://github.com/AshrafDesai/SurfaTechnoServices.com"
              demoLink="http://lnkiy.in/surfatechintegratedsoln"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Chat-Application"
              description="This is a simple chat application built using React.js. Users can join different chat rooms, send messages, and interact with others in real-time."
              ghLink="https://github.com/AshrafDesai/Chat-Application"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={JobFind}
              isBlog={false}
              title="JobFind.Com"
              description="JobFind.com is an innovative job portal that simplifies the job search process, enabling candidates to quickly discover and apply for the right opportunities with leading employers."
              ghLink="https://github.com/AshrafDesai/JobFind.Com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;