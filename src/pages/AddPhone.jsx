import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  Button,
} from "react-bootstrap";
import Swal from "sweetalert2";
import { addPhoneAPI } from "../services/allAPIs";
import { useNavigate } from "react-router-dom";

function AddPhone() {
  const [phoneData, setPhoneData] = useState({
    brand: "",
    model: "",
    type: "",
    price: "",
    review: "",
    rating: "",
    images: [],
  });

  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoneData((prev) => ({
          ...prev,
          images: [...prev.images, reader.result],
        }));
      };
      reader.readAsDataURL(file);
    });
  };

  const handleSave = async () => {
    const { brand, model, rating } = phoneData;

    if (!brand || !model || !rating) {
      Swal.fire({
        title: "Missing Information",
        text: "Please fill Brand, Model, and Rating!",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    try {
      const result = await addPhoneAPI(phoneData);

      if (result.status= 200) {
        Swal.fire({
          title: "Success!",
          text: "Phone added successfully!",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/dashboard");
        });

        setPhoneData({
          brand: "",
          model: "",
          type: "",
          price: "",
          review: "",
          rating: "",
          images: [],
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Failed to add phone. Try again.",
          icon: "error",
        });
      }
    } catch (err) {
      Swal.fire({
        title: "Server Error",
        text: "Something went wrong. Try again later.",
        icon: "error",
      });
    }
  };
  return (
    <div
      style={{
        minHeight: "90vh",
        background: "linear-gradient(135deg, #e3f2fd, #bbdefb 100%)",
        padding: "40px 0",
      }}
    >
      <Container>
        <div className="d-flex justify-content-start mb-3">
          <Button variant="secondary" onClick={() => navigate("/dashboard")}>
            ← Back to Dashboard
          </Button>
        </div>
        <Row className="justify-content-center">
          <Col md={8} className="bg-white p-5 rounded shadow">
            <h2
              className="fw-bold text-center mb-4"
              style={{ color: "#0d47a1" }}
            >
              Add a New Phone
            </h2>
            <Row className="g-3">
              <Col md={6}>
                <FloatingLabel label="Brand">
                  <Form.Control
                    type="text"
                    value={phoneData.brand}
                    placeholder="Enter brand"
                    onChange={(e) =>
                      setPhoneData({ ...phoneData, brand: e.target.value })
                    }
                  />
                </FloatingLabel>
              </Col>
              <Col md={6}>
                <FloatingLabel label="Model">
                  <Form.Control
                    type="text"
                    value={phoneData.model}
                    placeholder="Enter phone model"
                    onChange={(e) =>
                      setPhoneData({ ...phoneData, model: e.target.value })
                    }
                  />
                </FloatingLabel>
              </Col>
              <Col md={6}>
                <FloatingLabel label="Type">
                  <Form.Select
                    value={phoneData.type}
                    onChange={(e) =>
                      setPhoneData({ ...phoneData, type: e.target.value })
                    }
                  >
                    <option value="">Select Type</option>
                    <option>Gaming</option>
                    <option>Camera</option>
                    <option>Battery</option>
                    <option>Budget</option>
                    <option>Flagship</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
              <Col md={6}>
                <FloatingLabel label="Price (₹)">
                  <Form.Control
                    type="number"
                    value={phoneData.price}
                    placeholder="Price"
                    onChange={(e) =>
                      setPhoneData({ ...phoneData, price: e.target.value })
                    }
                  />
                </FloatingLabel>
              </Col>
              <Col md={12}>
                <FloatingLabel label="Rating (1-5)">
                  <Form.Select
                    value={phoneData.rating}
                    onChange={(e) =>
                      setPhoneData({ ...phoneData, rating: e.target.value })
                    }
                  >
                    <option value="">Select Rating</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
              <Col md={12}>
                <FloatingLabel label="Review">
                  <Form.Control
                    as="textarea"
                    style={{ height: "120px" }}
                    value={phoneData.review}
                    placeholder="Write review"
                    onChange={(e) =>
                      setPhoneData({ ...phoneData, review: e.target.value })
                    }
                  />
                </FloatingLabel>
              </Col>
              <Col md={12}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Attach Images</Form.Label>
                  <Form.Control
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </Form.Group>
              </Col>
              {phoneData.images.length > 0 && (
                <Col md={12}>
                  <div className="d-flex flex-wrap gap-3">
                    {phoneData.images.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt="preview"
                        style={{
                          width: "120px",
                          height: "120px",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                      />
                    ))}
                  </div>
                </Col>
              )}
            </Row>
            <Button
              className="w-100 mt-4"
              variant="primary"
              size="lg"
              onClick={handleSave}
            >
              Save Phone
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AddPhone;
