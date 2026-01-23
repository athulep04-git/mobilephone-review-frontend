import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
  <div
    style={{
      minHeight: "90vh",
      padding: "60px 0",
      backgroundImage:
        "url('https://cdn.pixabay.com/photo/2019/11/02/13/01/mobile-4596298_1280.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <Container>
      <h2 className="fw-bold text-center mb-5" style={{ color: "white" }}>
        Welcome to Your Dashboard
      </h2>

      <Row className="g-4 justify-content-center">

        <Col md={3}>
          <Link to="/addphone" style={{ textDecoration: "none", color: "inherit" }}>
            <Card className="text-center shadow-lg border-0 p-4 h-100 ">
              <i className="bi bi-phone fs-1 text-primary"></i>
              <h5 className="mt-3 fw-semibold">Add Phone</h5>
            </Card>
          </Link>
        </Col>

        <Col md={3}>
          <Link to="/phones" style={{ textDecoration: "none", color: "inherit" }}>
            <Card className="text-center shadow-lg border-0 p-4 h-100 card">
              <i className="bi bi-collection fs-1 text-warning"></i>
              <h5 className="mt-3 fw-semibold">Phones</h5>
            </Card>
          </Link>
        </Col>

        <Col md={3}>
          <Link to="/wishlist" style={{ textDecoration: "none", color: "inherit" }}>
            <Card className="text-center shadow-lg border-0 p-4 h-100 card">
              <i className="bi bi-heart-fill fs-1 text-danger"></i>
              <h5 className="mt-3 fw-semibold">Wishlist</h5>
            </Card>
          </Link>
        </Col>

      </Row>
    </Container>

    <style>{`
      .card {
        transition: all 0.3s ease;
        border-radius: 14px;
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(4px);
      }
      .card:hover {
        transform: translateY(-8px);
        box-shadow: 0px 10px 25px rgba(0,0,0,0.2);
      }
    `}</style>
  </div>
);

}

export default Dashboard;
