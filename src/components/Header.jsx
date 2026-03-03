import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const isLoggedIn = sessionStorage.getItem("token");

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Navbar
      expand="lg"
      sticky="top"
      style={{
        backgroundColor: "#0d47a1",
        color: "white",
      }}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold d-flex align-items-center"
        >
          <img
            src="https://wallpapers.com/images/hd/mobile-phone-icon-blue-background-n4cqqngny0hkmqvr-2.png"
            alt="logo"
            width="45"
            height="45"
            className="me-2"
          />
          ReviewMyMobile
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="ms-auto">

            {isLoggedIn ? (
              <>
                <Nav.Link as={Link} to="/dashboard">
                  <Button variant="light">Dashboard</Button>
                </Nav.Link>

                <Button
                  variant="danger"
                  className="ms-2"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/">
                  <Button>Home</Button>
                </Nav.Link>

                <Nav.Link as={Link} to="/login">
                  <Button>Login</Button>
                </Nav.Link>
              </>
            )}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;