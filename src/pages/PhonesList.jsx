import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  Modal,
  Carousel,
} from "react-bootstrap";
import {
  getPhonesAPI,
  deletePhoneAPI,
  addToWishlistAPI,
  getWishlistAPI,
} from "../services/allAPIs";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function PhonesList() {
  const [phones, setPhones] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [selectedReview, setSelectedReview] = useState("");

  const navigate = useNavigate();

  const openReviewModal = (reviewText) => {
    setSelectedReview(reviewText || "No review available.");
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  useEffect(() => {
    loadPhones();
    loadWishlist();
  }, []);

  const loadPhones = async () => {
    const result = await getPhonesAPI();
    if (result.status >= 200 && result.status < 300) {
      setPhones(result.data);
    }
  };

  const loadWishlist = async () => {
    const result = await getWishlistAPI();
    if (result.status === 200) {
      setWishlist(result.data);
    }
  };

  const handleAddToWishlist = async (phone) => {
    const exists = wishlist.find((item) => item.id === phone.id);
    if (exists) {
      Swal.fire("Already added", "This phone is already in your wishlist!", "info");
      return;
    }

    const res = await addToWishlistAPI(phone);

    if (res.status === 201) {
      Swal.fire("Added!", "Phone added to wishlist", "success");
      loadWishlist();
    }
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This phone will be deleted permanently.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await deletePhoneAPI(id);
        if (response.status === 200) {
          Swal.fire("Deleted!", "Phone removed successfully.", "success");
          loadPhones();
        }
      }
    });
  };
  const filteredPhones = phones.filter((phone) =>
    phone.brand.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        padding: "60px 0",
        minHeight: "90vh",
        background: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
      }}
    >
      <Container>
        <div className="d-flex justify-content-start mb-3">
          <Button variant="secondary" onClick={() => navigate("/dashboard")}>
            ← Back to Dashboard
          </Button>
        </div>

        
        <div className="d-flex justify-content-center mb-4">
          <input
            type="text"
            className="form-control shadow-sm"
            placeholder="Search phones..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "60%",
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #90caf9",
            }}
          />
          <Button className="ms-2" variant="primary">Search</Button>
        </div>

        <h2 className="fw-bold text-center mb-4" style={{ color: "#0d47a1" }}>
          All Added Phones
        </h2>

        <Row className="g-4">
          {filteredPhones.map((phone) => (
            <Col md={4} key={phone.id}>
              <Card className="shadow-sm border-0 rounded-4 card">
                <Button
                  variant="danger"
                  className="delete"
                  onClick={() => handleDelete(phone.id)}
                >
                  x
                </Button>

                {phone.images?.length > 0 ? (
                  <Carousel indicators={false} interval={2000}>
                    {phone.images.map((img, index) => (
                      <Carousel.Item key={index}>
                        <img src={img} alt="phone" className="pimg" />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                ) : (
                  <div className="placeholder-img">
                    <i className="bi bi-phone fs-1 text-secondary"></i>
                  </div>
                )}

                <Card.Body>
                  <h5 className="fw-bold">
                    {phone.brand}{" "}
                    <span className="text-primary">{phone.model}</span>
                  </h5>

                  <Badge bg="info" className="me-2">
                    {phone.type || "No Type"}
                  </Badge>

                  <Badge bg="warning" text="dark">
                    ⭐ {phone.rating}
                  </Badge>

                  <h5 className="text-success mt-3">₹ {phone.price}</h5>

                  <Button
                    variant="outline-primary"
                    className="w-100 mt-3"
                    onClick={() => openReviewModal(phone.review)}
                  >
                    Show Review
                  </Button>

                  <Button
                    variant="danger"
                    className="w-100 mt-3"
                    onClick={() => handleAddToWishlist(phone)}
                  >
                    Add to Wishlist
                  </Button>

                  <Link
                    to={`/editphone/${phone.id}`}
                    className="w-100 mt-3 btn btn-primary"
                  >
                    Edit Phone
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Phone Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="fs-5">{selectedReview}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <style>{`
        .card {
          position: relative;
          transition: 0.3s;
        }
        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0px 8px 25px rgba(0,0,0,0.15);
        }
        .pimg {
          width: 100%;
          height: 230px;
          object-fit: cover;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
        }
        .pimg {
          width: 100%;
          height: 230px;
          background: #ddd;
          display: flex;
          justify-content: center;
          align-items: center;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
        }
        .delete{
          position: absolute;
          top: 10px;
          right: 10px;
          border-radius: 50%;
          padding: 0px 9px;
          font-size: 1.2rem;
          z-index: 10;
        }
      `}</style>
    </div>
  );
}

export default PhonesList;
