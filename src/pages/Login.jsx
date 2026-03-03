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

function Login() {
  const navigate = useNavigate();

  const [lemail, setlEmail] = useState("");
  const [lpassword, setlPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    setError("");
    if (!lemail || !lpassword) {
      setError("Please enter both email and password.");
      return;
    }

    const storedUser = JSON.parse(sessionStorage.getItem(lemail));
    if (!storedUser) {
      setError("User not found. Please register first.");
      return;
    }

    if (
      storedUser.password === lpassword &&
      storedUser.email === lemail
    ) {
      sessionStorage.setItem("token", "true")
      alert("Login successful!");
      navigate("/dashboard");
    } else {
      setError("Invalid password. Please try again.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #bcd7ffff 0%, #1976d2 100%)",
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
              src="https://img.freepik.com/premium-vector/login-concept-illustration_114360-757.jpg"
              alt="Login Illustration"
              className="img-fluid rounded shadow"
              style={{
                maxHeight: "500px",
                border: "5px solid white",
              }}
            />
          </Col>

          <Col
            md={5}
            className="bg-white rounded shadow p-5 text-center"
          >
            <img
              src="https://www.pngmart.com/files/16/Vector-Gold-Key-PNG-Photos.png"
              alt="React Logo"
              width="50px"
              className="mb-3"
            />
            <h2 className="fw-bold text-primary mb-4">
              Login to Continue
            </h2>

            {error && (
              <Alert
                variant="danger"
                className="py-2 text-start"
              >
                {error}
              </Alert>
            )}

            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3 text-start"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={(e) => setlEmail(e.target.value)}
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
                onChange={(e) => setlPassword(e.target.value)}
              />
            </FloatingLabel>

            <Button
              onClick={handleLogin}
              className="w-100 mt-4 fw-semibold"
              variant="primary"
              size="lg"
            >
              Sign In
            </Button>

            <p className="mt-4 mb-0">
              <Link
                to="/register"
                style={{
                  textDecoration: "none",
                  color: "#0d47a1",
                  fontWeight: "500",
                }}
              >
                New here? Register now
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
