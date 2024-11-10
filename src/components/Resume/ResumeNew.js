import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

// Google Drive embed link for the resume PDF
const resumeLink = "https://drive.google.com/file/d/1p9iW4NeZb90eZ8tVXl1bsOvvfC4DZdG2/preview";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        
        {/* Download Button */}
        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "20px" }}>
          <Button
            variant="primary"
            href="https://drive.google.com/uc?id=1p9iW4NeZb90eZ8tVXl1bsOvvfC4DZdG2"
            target="_blank"
            style={{ maxWidth: "250px" }}
            download
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* PDF Viewer using iframe */}
        <Row style={{ justifyContent: "center" }}>
          <iframe
            src={resumeLink}
            style={{
              width: "100%",
              height: "1000px",  // Increased height for the first page preview
              border: "none",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              maxWidth: "900px",  // Ensure it doesn't stretch too much on large screens
              margin: "0 auto"
            }}
            title="Resume Preview"
            allowFullScreen
          ></iframe>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
