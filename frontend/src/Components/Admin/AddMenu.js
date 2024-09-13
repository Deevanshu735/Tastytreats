import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import { BACKEND_BASE_URL } from "../../constant";

function AddMenu() {
  const [foodName, setFoodName] = React.useState("");
  const [foodPrice, setFoodPrice] = React.useState();
  const [foodCategory, setFoodCategory] = React.useState();
  const [foodImage, setFoodImage] = React.useState(null);

  function handleName(e) {
    const value = e.target.value;
    setFoodName(value);
  }
  function handlePrice(e) {
    const value = e.target.value;
    const trimmedValue = value.trim();
    setFoodPrice(trimmedValue);
  }
  function handleCategory(e) {
    const value = e.target.value;
    setFoodCategory(value);
  }

  function handleCoverChange(e) {
    setFoodImage(e.target.files[0]);
  }

  const handleSubmit = async (e) => {
    if (
      foodName === "" ||
      foodPrice === "" ||
      foodCategory === "" ||
      !foodImage
    ) {
      alert("Please fill all fields");
      return;
    }
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("foodName", foodName);
      formData.append("foodPrice", foodPrice);
      formData.append("foodCategory", foodCategory);
      formData.append("foodImage", foodImage);
      const res = await axios.post(`${BACKEND_BASE_URL}/api/foods/menu-add`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res.data);
      alert(`Menu item : ${foodName} created successfully`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Container fluid>
        <h2 className="text-center fs-1 mx-5 cursive-font text-danger">
          Add New Food Item
        </h2>
        <Row>
          <Col xs={1}></Col>
          <Col Xs={10}>
            <Form className="p-3 w-100 mx-auto d-flex flex-column align-items-start  form2">
              <Form.Group controlId="formName" className="w-100 mb-3">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  required
                  onChange={handleName}
                  value={foodName}
                />
              </Form.Group>
              <Form.Group controlId="formPrice" className="w-100 mb-3">
                <Form.Control
                  type="number"
                  placeholder="Price"
                  onChange={handlePrice}
                  value={foodPrice}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formCategory" className="w-100 mb-3">
                <Form.Select
                  aria-label="Default select example"
                  onChange={handleCategory}
                >
                  <option>Select Catagory</option>
                  <option value="1">Pizza</option>
                  <option value="2">Burger</option>
                  <option value="3">Sandwich</option>
                  <option value="4">Pasta</option>
                  <option value="5">Stuff</option>
                  <option value="6">Shake</option>
                  <option value="7">Chinease</option>
                  <option value="8">Other</option>
                </Form.Select>
              </Form.Group>
              <Form.Group controlId="avatar" className="w-100 mb-3">
                <Form.Control
                  type="file"
                  name="avatar"
                  accept="image/*"
                  onChange={handleCoverChange}
                />
              </Form.Group>
            </Form>
            <Row xs={12}>
              <Col xs={2}></Col>
              <Col xs={8}>
                {" "}
                <Button
                  type="submit"
                  variant="danger"
                  className="w-100 mt-1"
                  onClick={handleSubmit}
                >
                  Add Menu
                </Button>
              </Col>
              <Col xs={2}></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AddMenu;
