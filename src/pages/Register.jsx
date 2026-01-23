import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Form,
  FloatingLabel,
  Container,
  Row,
  Col,
  Button,
  Alert,
} from "react-bootstrap";

function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const handleRegister = () => {
    if (!username || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    const userdetails = {
      username,
      email,
      password,
    };

    sessionStorage.setItem(email, JSON.stringify(userdetails));

    alert(" Registration Successful!");
    navigate("/login");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #89b8ffff 0%, #1976d2 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container>
        <Row className="justify-content-center align-items-center">

          <Col
            md={6}
            className="d-none d-md-flex justify-content-center align-items-center"
          >
            <img
              src="https://icmhs.co.ke/wp-content/uploads/2022/12/Register-to-ICMHS.png"
              alt="Register Illustration"
              className="img-fluid rounded shadow"
              style={{height: "450px" }}
            />
          </Col>

          <Col
            md={5}
            className="bg-white rounded shadow p-5 text-center"
            style={{ animation: "fadeIn 0.7s" }}
          >
            <h2 className="fw-bold text-primary mb-4">Create Your Account</h2>
            <FloatingLabel
              controlId="floatingUsername"
              label="Username"
              className="mb-3 text-start"
            >
              <Form.Control
                type="text"
                placeholder="Enter username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingEmail"
              label="Email address"
              className="mb-3 text-start"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingPassword"
              label="Password"
              className="text-start"
            >
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FloatingLabel>

            <Button
              onClick={handleRegister}
              className="w-100 mt-4 fw-semibold"
              variant="primary"
              size="lg"
            >
              Sign Up
            </Button>

            <p className="mt-4 mb-0">
              <Link
                to="/login"
                style={{
                  textDecoration: "none",
                  color: "#0d47a1",
                  fontWeight: "500",
                }}
              >
                Already registered? Login now
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Register;
