import React, { useEffect } from "react";
import { Container, Nav } from "react-bootstrap"; // Combined import
import { Navigation } from "../Resuable/Navigation";
import { Link } from "react-router-dom";

import axios from "axios";
import Footer from "../Resuable/Footer";
import MenuItems from "./MenuItems";

export default function Menu() {
  const [menu, setMenu] = React.useState();
  const [menuError, setMenuError] = React.useState({});
  const [menuData, setMenuData] = React.useState([]);
  const [menuDataError, setMenuDataError] = React.useState({});

  const [selectedMenu, setSelectedMenu] = React.useState(1);
  const [selectedMenuItem, setSelectedMenuItem] = React.useState([]);

  const menustyle = {
    textDecoration: "none",
    color: "black",
    textAlign: "center",
    margin: "10px",
    cursor: "pointer",
  };

  useEffect(() => {
    // setSelectedMenu
    const getFoodCategory = async () => {
      try {
        const response = await axios.get("/api/foods/getfoodcategory");
        // console.log(response.data.categories);
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
    const getFoodItems = async function () {
      try {
        const response = await axios.get("/api/foods/menu");
        console.log(response);
        setMenuData(response.data);
      } catch (error) {
        setMenuDataError(error);
      }
    };
    getFoodItems();
  }, []);

  useEffect(() => {
    const data = menuData.filter((item, i) => {
      return item.foodCategory === selectedMenu;
    });
    setSelectedMenuItem(data);
  }, [menuData, selectedMenu]);

  console.log(selectedMenu);

  return (
    <>
      <Navigation />
      <Container fluid>
        <h2 className="text-center my-3  cursive-font">
          <span className="text-danger fs-1">OUR MENU</span>
        </h2>
        <Nav style={menustyle} className="justify-content-center mb-3">
          {menu ? (
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
                  onClick={() => {
                    setSelectedMenu(item.foodId);
                  }}
                >
                  {item.foodCategory}
                </li>
              ))}
            </ul>
          ) : (
            <Nav.Link style={menustyle} as={Link} to={"/"}>
              {menuError.message}
            </Nav.Link>
          )}
        </Nav>
        {selectedMenuItem && <MenuItems selectedMenu={selectedMenuItem} />}
      </Container>
      <Footer />
    </>
  );
}
