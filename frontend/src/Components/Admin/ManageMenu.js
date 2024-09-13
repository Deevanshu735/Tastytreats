import React, { useEffect, useState } from "react";
import { Container, Nav, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import AdminMenuData from "./AdminMenudata";
import AddMenu from "./AddMenu"; // Assuming this is the component for adding items
import { BACKEND_BASE_URL } from "../../constant";

export default function Menu() {
  const [menu, setMenu] = useState([]);
  const [menuError, setMenuError] = useState({});
  const [menuData, setMenuData] = useState([]);
  const [menuDataError, setMenuDataError] = useState({});
  const [selectedMenu, setSelectedMenu] = useState(1);
  const [selectedMenuItem, setSelectedMenuItem] = useState([]);

  const [show, setShow] = useState(false); // Modal state for "Add Item"
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const menustyle = {
    textDecoration: "none",
    color: "black",
    textAlign: "center",
    cursor: "pointer",
    margin: "10px",
  };

  useEffect(() => {
    const getFoodCategory = async () => {
      try {
        const response = await axios.get(
          `${BACKEND_BASE_URL}/api/foods/getfoodcategory`
        );
        setMenu(response.data.categories);
        if (response.data.data.length > 0) {
          setSelectedMenu(1);
        }
      } catch (error) {
        setMenuError(error);
      }
    };
    getFoodCategory();
  }, []);

  useEffect(() => {
    const getFoodItems = async () => {
      try {
        const response = await axios.get(`${BACKEND_BASE_URL}/api/foods/menu`);
        setMenuData(response.data);
      } catch (error) {
        setMenuDataError(error);
      }
    };
    getFoodItems();
  }, []);

  useEffect(() => {
    const data = menuData.filter((item) => item.foodCategory === selectedMenu);
    setSelectedMenuItem(data);
  }, [menuData, selectedMenu]);

  return (
    <>
      <Container fluid>
        <h2 className="text-center my-3 cursive-font">
          <span className="text-danger fs-1">MANAGE MENU</span>
        </h2>
        <Nav style={menustyle} className="justify-content-center">
          {menu ? (
            <div style={{ display: "flex", alignItems: "center" }}>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                {menu.map((item, index) => (
                  <li
                    key={index}
                    style={menustyle}
                    onClick={() => setSelectedMenu(item.foodId)}
                  >
                    {item.foodCategory}
                  </li>
                ))}
              </ul>

              {/* Add Button after categories */}
              <Button
                variant="danger"
                style={{ marginLeft: "25px" }}
                onClick={handleShow}
              >
                Add Item
              </Button>
            </div>
          ) : (
            <Nav.Link style={menustyle} as={Link} to={"/"}>
              {menuError.message}
            </Nav.Link>
          )}
        </Nav>

        {selectedMenuItem && <AdminMenuData selectedMenu={selectedMenuItem} />}

        {/* Modal for Adding Item */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <AddMenu />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
}
