import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import {
  Container,
  Row,
  Card,
  Col,
  Button,
  Modal,
  ListGroup,
  InputGroup,
  FormControl,
} from "react-bootstrap";

const cardStyle = {
  margin: "20px 0px",
  width: "100%",
  maxWidth: "22rem",
  border: "1px solid white",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
};

const imageContainerStyle = {
  width: "100%",
  height: "200px",
  overflow: "hidden",
};

const imageStyle = {
  objectFit: "contain",
  width: "100%",
  height: "100%",
};

const MenuItems = ({ selectedMenu }) => {
  const [show, setShow] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [loadingItem, setLoadingItem] = useState(null);

  const handleClose = () => setShow(false);

  const handleShow = (item) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem.foodName === item.foodName
    );

    if (!existingItem) {
      handleAddItem(item);
    }

    setShow(true);
  };

  const handleAddItem = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.foodName === item.foodName
    );

    if (existingItemIndex === -1) {
      setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }
  };

  const handleAddWithSpinner = (item, index) => {
    setLoadingItem(index); // Set the loading state for this specific item

    setTimeout(() => {
      handleAddItem(item);
      setLoadingItem(null); // Reset loading state after 1 second
    }, 500);
  };

  const increaseQuantity = (index) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity += 1;
    setCartItems(updatedItems);
  };

  const decreaseQuantity = (index) => {
    const updatedItems = [...cartItems];
    if (updatedItems[index].quantity > 1) {
      updatedItems[index].quantity -= 1;
    } else {
      updatedItems.splice(index, 1);
    }
    setCartItems(updatedItems);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.foodPrice * item.quantity,
    0
  );

  return (
    <Container>
      <Row xs={1} sm={2} md={3} className="d-flex justify-content-around">
        {selectedMenu.map((item, index) => (
          <Card key={index} style={cardStyle}>
            <Card.Body className="position-relative pt-1 w-100 h-100">
              <Row xs={12} className="h-60">
                <Col>
                  <div style={imageContainerStyle}>
                    <img
                      src={item.foodImage}
                      alt={item.foodName}
                      style={imageStyle}
                    />
                  </div>
                </Col>
              </Row>
              <Row xs={12}>
                <Col>
                  <h5 className="text-center">{item.foodName}</h5>
                </Col>
              </Row>
              <Row xs={12}>
                <Col>
                  <h5 className="text-center text-danger">
                    <span className="text-black">Price: &#8377;</span>
                    {item.foodPrice}
                  </h5>
                </Col>
              </Row>
              <Row xs={12} className="d-flex justify-content-center">
                <Col className="d-flex justify-content-center">
                  <Button
                    className="btn-hvr me-2"
                    style={{
                      width: "30%",
                      color: "black",
                      textAlign: "center",
                    }}
                    variant="outline-danger"
                    onClick={() => handleShow(item)}
                  >
                    Order
                  </Button>
                  <Button
                    className="btn-hvr"
                    style={{
                      width: "30%",
                      color: "black",
                      textAlign: "center",
                    }}
                    variant="outline-danger"
                    onClick={() => handleAddWithSpinner(item, index)}
                    disabled={loadingItem === index}
                  >
                    {loadingItem === index ? (
                      <Spinner
                        variant="danger"
                        animation="border"
                        size="sm"
                        style={{ marginLeft: "10px" }}
                      />
                    ) : (
                      "Add"
                    )}
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
      </Row>

      {/* Modal for showing order details */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Order Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.length > 0 ? (
            <div>
              <h6>Added Items:</h6>
              <ListGroup variant="flush">
                {cartItems.map((item, index) => (
                  <ListGroup.Item
                    key={index}
                    className="d-flex justify-content-between align-items-center"
                  >
                    <span>
                      {item.foodName} - &#8377; {item.foodPrice * item.quantity}
                    </span>
                    <InputGroup style={{ width: "30%" }}>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => decreaseQuantity(index)}
                      >
                        -
                      </Button>
                      <FormControl
                        readOnly
                        value={item.quantity}
                        className="text-center"
                      />
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => increaseQuantity(index)}
                      >
                        +
                      </Button>
                    </InputGroup>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <hr />
              <h5>Total Price: &#8377; {totalPrice}</h5>
            </div>
          ) : (
            <p>No items added to the cart yet.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {cartItems.length > 0 && (
            <Button variant="danger" onClick={handleClose}>
              Confirm Order
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default MenuItems;
