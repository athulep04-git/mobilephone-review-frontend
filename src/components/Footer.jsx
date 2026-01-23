import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0d47a1",
        padding: "20px 0",
        marginTop: "40px",
        color: "white",
        textAlign: "center",
      }}
    >
      <Container>
        <p className="mb-1 fw-semibold">
          Mobile Phone Review & Wishlist App
        </p>
        <small style={{ opacity: 0.8 }}>
          © {new Date().getFullYear()} All Rights Reserved
        </small>
      </Container>
    </footer>
  );
}

export default Footer;
