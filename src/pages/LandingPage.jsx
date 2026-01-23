import React from "react";
import { Container, Row, Col, Button, Card, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2020/11/25/15/30/smileys-5776137_1280.jpg"
            alt="Slide 1"
            style={{ height: "70vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h1 className="fw-bold">Discover. Review. Save.</h1>
            <p>Add your favorite phones and review them instantly.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2016/01/29/09/57/hands-1167618_1280.jpg"
            alt="Slide 2"
            style={{ height: "70vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h1 className="fw-bold">Build Your Wishlist</h1>
            <p>Keep track of phones you want to buy.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2016/12/01/18/17/mobile-phone-1875813_1280.jpg"
            alt="Slide 3"
            style={{ height: "70vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h1 className="fw-bold">Export as PDF</h1>
            <p>Download your wishlist or reviews with a single click.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2020/05/18/22/30/smartphone-5188639_1280.jpg"
            alt="Slide 4"
            style={{ height: "70vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h1 className="fw-bold">Search by Brand or Model</h1>
            <p>Find any phone quickly with our smart search.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2017/11/10/20/10/phone-2937561_1280.jpg"
            alt="Slide 5"
            style={{ height: "70vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h1 className="fw-bold">Categorize Easily</h1>
            <p>Sort phones by brand, price, or type effortlessly.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2016/11/29/12/18/camera-1869430_1280.jpg"
            alt="Slide 6"
            style={{ height: "70vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h1 className="fw-bold">Your Personal Mobile Library</h1>
            <p>Store, manage, and explore all your favorite devices.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="py-5">
        <h2 className="text-center fw-bold mb-4">App Features</h2>
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card className="text-center shadow-lg border-0 p-3 h-100">
              <i className="bi bi-phone fs-1 text-primary"></i>
              <h4 className="mt-3">Add Mobile Phones</h4>
              <p>Add phones you own or are interested in buying.</p>
            </Card>
          </Col>

          <Col>
            <Card className="text-center shadow-lg border-0 p-3 h-100">
              <i className="bi bi-star-half fs-1 text-warning"></i>
              <h4 className="mt-3">Write Reviews & Ratings</h4>
              <p>Share honest feedback with rating and comments.</p>
            </Card>
          </Col>

          <Col>
            <Card className="text-center shadow-lg border-0 p-3 h-100">
              <h4 className="mt-3">Wishlist</h4>
              <p>Save your favourite phones for future purchase.</p>
            </Card>
          </Col>
        </Row>
      </Container>
      <div style={{ background: "#f4f4f4" }}>
        <Container className="py-5">
          <Row className="align-items-center">
            <Col md={6}>
              <img
                src="https://cdn.pixabay.com/photo/2020/08/24/09/53/smartphone-5513375_1280.jpg"
                className="img-fluid rounded shadow"
                alt="app preview"
              />
            </Col>
            <Col md={6}>
              <h2 className="fw-bold mb-3">About This App</h2>
              <p className="fs-5">
                This Mobile Phone Review & Wishlist App allows users to add
                phones, write detailed reviews, rate devices, categorize by
                brand or type, search by model or brand, and export wishlists or
                review summaries as downloadable PDF files.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="py-5">
        <h2 className="text-center fw-bold mb-4">Browse by Categories</h2>
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card className="shadow-lg border-0 p-3 text-center h-100">
              <i className="bi bi-buildings fs-1 text-secondary"></i>
              <h4 className="mt-3">Brand</h4>
              <p>Samsung, Apple, Realme, Xiaomi, OnePlus, Vivo, Oppo...</p>
            </Card>
          </Col>

          <Col>
            <Card className="shadow-lg border-0 p-3 text-center h-100">
              <i className="bi bi-tags fs-1 text-success"></i>
              <h4 className="mt-3">Price Range</h4>
              <p>Budget, Mid-Range, Flagship, Ultra Premium</p>
            </Card>
          </Col>

          <Col>
            <Card className="shadow-lg border-0 p-3 text-center h-100">
              <i className="bi bi-grid fs-1 text-info"></i>
              <h4 className="mt-3">Type</h4>
              <p>Gaming, Camera-focused, Battery King, Compact, Foldables</p>
            </Card>
          </Col>
        </Row>
      </Container>
      <div
        style={{
          background: "linear-gradient(to right, #0d47a1, #1976d2)",
          padding: "60px 0",
          color: "white",
          textAlign: "center",
        }}
      >
        <Container>
          <h2 className="fw-bold mb-3">Start Exploring Now!</h2>
          <p className="fs-5 mb-4">
            Add phones, review them, and build your wishlist today.
          </p>
          <Link to="/login">
            <Button variant="dark" size="lg" className="px-5 py-2">
              Get Started
            </Button>
          </Link>
        </Container>
      </div>
    </div>
  );
}

export default LandingPage;
