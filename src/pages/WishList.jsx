import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Carousel
} from "react-bootstrap";
import { getWishlistAPI, removeWishlistAPI } from "../services/allAPIs";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useNavigate } from "react-router-dom";

function Wishlist() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadWishlist();
  }, []);

  const loadWishlist = async () => {
    const result = await getWishlistAPI();
    if (result.status === 200) {
      setItems(result.data);
    }
  };

  const removeItem = async (id) => {
    const res = await removeWishlistAPI(id);
    if (res.status === 200) {
      loadWishlist();
    }
  };

  const downloadCard = async (phoneId) => {
    const element = document.getElementById(`card${phoneId}`);

    const canvas = await html2canvas(element, { scale: 3 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`wishlist-item-${phoneId}.pdf`);
  };

  const downloadPDF = async () => {
    const element = document.getElementById("wishlistPDF");

    const canvas = await html2canvas(element, { scale: 3 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("wishlist.pdf");
  };

  return (
    <div style={{ minHeight: "90vh", padding: "50px 0" }}>
      <Container>
        

        <div className="d-flex justify-content-between mb-4">
          <Button variant="secondary" onClick={() => navigate("/dashboard")}>
            ← Back to Dashboard
          </Button>

          <Button variant="dark" onClick={downloadPDF}>
            Download PDF
          </Button>
        </div>

        <div id="wishlistPDF">
          <h2 className="fw-bold text-center mb-4">Your Wishlist</h2>
          <Row className="g-4">
            {items.length > 0 ? (
              items.map((phone) => (
                <Col md={4} key={phone.id}>
           
                  <div id={`card${phone.id}`}>
                    <Card className="shadow border-0 rounded-4 position-relative">
                      <Button
                        size="sm"
                        variant="primary"
                        onClick={() => downloadCard(phone.id)}
                        style={{
                          position: "absolute",
                          top: "10px",
                          right: "10px",
                          zIndex: 10,
                        }}
                      >
                        ⬇️
                      </Button>

                      <Carousel indicators={false} interval={2000}>
                        {phone.images.map((img, index) => (
                          <Carousel.Item key={index}>
                            <img
                              src={img}
                              className="d-block w-100"
                              style={{
                                height: "230px",
                                objectFit: "cover",
                                borderTopLeftRadius: "20px",
                                borderTopRightRadius: "20px",
                              }}
                            />
                          </Carousel.Item>
                        ))}
                      </Carousel>

                      <Card.Body>
                        <h5 className="fw-bold">
                          {phone.brand}{" "}
                          <span className="text-primary">{phone.model}</span>
                        </h5>

                        <p className="mb-1">
                          <strong>Type:</strong> {phone.type || "Not specified"}
                        </p>

                        <p className="mb-1">
                          <strong>Rating:</strong> ⭐ {phone.rating}
                        </p>

                        <p className="text-success fw-bold mb-2">
                          ₹ {phone.price}
                        </p>

                        <div
                          style={{
                            background: "#f7f7f7",
                            padding: "10px",
                            borderRadius: "8px",
                            minHeight: "80px",
                            border: "1px solid #ddd",
                          }}
                        >
                          <strong>Review:</strong>
                          <p className="mb-0" style={{ fontSize: "0.9rem" }}>
                            {phone.review || "No review added."}
                          </p>
                        </div>

                        <Button
                          variant="danger"
                          className="w-100 mt-3"
                          onClick={() => removeItem(phone.id)}
                        >
                          Remove
                        </Button>
                      </Card.Body>

                    </Card>
                  </div>
                </Col>
              ))
            ) : (
              <h4 className="text-muted text-center">Wishlist is empty</h4>
            )}
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Wishlist;
