import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, FloatingLabel, Button } from "react-bootstrap";
import { getPhoneByIdAPI, updatePhoneAPI } from "../services/allAPIs";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

function EditPhone() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [phoneData, setPhoneData] = useState({
    brand: "",
    model: "",
    type: "",
    price: "",
    review: "",
    rating: "",
    images: [],
  });

  useEffect(() => {
    loadPhone();
  }, []);

  const loadPhone = async () => {
    const response = await getPhoneByIdAPI(id);
    if (response.status === 200) {
      setPhoneData(response.data);
    }
  };

  const handleUpdate = async () => {
    const response = await updatePhoneAPI(id, phoneData);

    if (response.status >= 200 && response.status < 300) {
      Swal.fire("Updated!", "Phone details updated successfully.", "success")
        .then(() => navigate("/phones"));
    } else {
      Swal.fire("Error", "Failed to update", "error");
    }
  };

  return (
    <div style={{ minHeight: "90vh", padding: "40px 0" }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="bg-white p-5 rounded shadow">
            <h2 className="fw-bold mb-4 text-center">Edit Phone</h2>

            <FloatingLabel label="Model" className="mb-3">
              <Form.Control
                value={phoneData.model}
                onChange={(e) => setPhoneData({ ...phoneData, model: e.target.value })}
              />
            </FloatingLabel>


            <FloatingLabel label="Brand" className="mb-3">
              <Form.Control
                value={phoneData.brand}
                onChange={(e) => setPhoneData({ ...phoneData, brand: e.target.value })}
              />
            </FloatingLabel>

            <FloatingLabel label="Type" className="mb-3">
              <Form.Select
                value={phoneData.type}
                onChange={(e) => setPhoneData({ ...phoneData, type: e.target.value })}
              >
                <option value="">Select Type</option>
                <option>Gaming</option>
                <option>Camera</option>
                <option>Battery</option>
                <option>Budget</option>
                <option>Flagship</option>
              </Form.Select>
            </FloatingLabel>

            <FloatingLabel label="Price (₹)" className="mb-3">
              <Form.Control
                type="number"
                value={phoneData.price}
                onChange={(e) => setPhoneData({ ...phoneData, price: e.target.value })}
              />
            </FloatingLabel>

            <FloatingLabel label="Rating (1–5)" className="mb-3">
              <Form.Select
                value={phoneData.rating}
                onChange={(e) => setPhoneData({ ...phoneData, rating: e.target.value })}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Select>
            </FloatingLabel>
            <FloatingLabel label="Review" className="mb-3">
              <Form.Control
                as="textarea"
                style={{ height: "120px" }}
                value={phoneData.review}
                onChange={(e) => setPhoneData({ ...phoneData, review: e.target.value })}
              />
            </FloatingLabel>

            <Button variant="primary" className="w-100" onClick={handleUpdate}>
              Update Phone
            </Button>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default EditPhone;
