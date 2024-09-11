// import React, { useState } from "react";
// import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
// import { IoLogOut } from "react-icons/io5";
// import { IoHome } from "react-icons/io5";
// import { FaUserDoctor } from "react-icons/fa6";
// import { CgProfile } from "react-icons/cg";
// import { FaUser } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import ManageMenu from "./ManageMenu";
// import ReservationManage from "./ReservationManage";
// import AllUsers from "./AllUsers";
// import Order from "./Order";
// import AdminHome from "./AdminHome";

// const Admin = () => {
//   const [activeSection, setActiveSection] = useState("home"); // Default active section
//   const navigate = useNavigate();

//   const renderContent = () => {
//     switch (activeSection) {
//       case "home":
//         return <AdminHome />;
//       case "users":
//         return <AllUsers />;
//       case "managemenu":
//         return <ManageMenu />;
//       case "reservation":
//         return <ReservationManage />;
//       case "order":
//         return <Order />;
//       case "logout":
//         return navigate("/");
//       default:
//         return (
//           <div>
//             <h2>Home</h2>
//             <p>Welcome to the Admin Dashboard Home.</p>
//           </div>
//         );
//     }
//   };

//   return (
//     <Container fluid>
//       <Row>
//         <Navbar style={{ background: "#F8F9FA" }} expand="lg">
//           <Navbar.Brand className=" fs-1 mx-5 cursive-font text-danger">
//             Tasty Treats
//           </Navbar.Brand>
//           <Navbar.Brand className="fs-2 mx-auto text-danger">
//             Admin Dashboard
//           </Navbar.Brand>
//         </Navbar>
//       </Row>

//       <Row>
//         <Col
//           xs={2}
//           style={{ height: "100vh", backgroundColor: "rgb(245, 245, 245) " }}
//         >
//           <Nav className="mt-4 ">
//             <Nav.Link
//               className="text-danger"
//               onClick={() => setActiveSection("home")}
//             >
//               <IoHome style={{ marginRight: "0.5rem" }} /> Home
//             </Nav.Link>

//             <Nav.Link
//               className="text-danger"
//               onClick={() => setActiveSection("users")}
//             >
//               <IoHome style={{ marginRight: "0.5rem" }} /> AllUsers
//             </Nav.Link>

//             <Nav.Link
//               className="text-danger"
//               onClick={() => setActiveSection("managemenu")}
//               style={{ color: "" }}
//             >
//               <FaUser style={{ marginRight: "0.5rem" }} />
//               Manage Menu
//             </Nav.Link>
//             <Nav.Link
//               className="text-danger"
//               onClick={() => setActiveSection("order")}
//               style={{ color: "white" }}
//             >
//               <CgProfile style={{ marginRight: "0.5rem" }} />
//               Order
//             </Nav.Link>
//             <Nav.Link
//               className="text-danger"
//               onClick={() => setActiveSection("reservation")}
//               style={{ color: "white" }}
//             >
//               <FaUserDoctor style={{ marginRight: "0.5rem" }} />
//               Reservation
//             </Nav.Link>
//             <Nav.Link
//               className="text-danger"
//               onClick={() => setActiveSection("logout")}
//               style={{ color: "white" }}
//             >
//               <IoLogOut style={{ marginRight: "0.2rem" }} />
//               Logout
//             </Nav.Link>
//           </Nav>
//         </Col>
//         <Col xs={10} style={{ padding: "20px", overflowY: "hidden" }}>
//           {renderContent()}

//           {/* Add more content here as needed */}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// // export default Admin;

// import React, { useState } from "react";
// import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
// import { IoMdRestaurant } from "react-icons/io";
// import { FaListUl } from "react-icons/fa";
// import { FaShoppingCart } from "react-icons/fa";
// import { IoCheckboxOutline } from "react-icons/io5";
// import { IoLogOut, IoHome } from "react-icons/io5";
// import { useNavigate } from "react-router-dom";
// import ManageMenu from "./ManageMenu";
// import ReservationManage from "./ReservationManage";
// import AllUsers from "./AllUsers";
// import Order from "./Order";
// import AdminHome from "./AdminHome";

// const Admin = () => {
//   const [activeSection, setActiveSection] = useState("home"); // Default active section
//   const navigate = useNavigate();

//   const renderContent = () => {
//     switch (activeSection) {
//       case "home":
//         return <AdminHome onSelectSection={setActiveSection} />;
//       case "users":
//         return <AllUsers />;
//       case "managemenu":
//         return <ManageMenu />;
//       case "reservation":
//         return <ReservationManage />;
//       case "order":
//         return <Order />;
//       case "logout":
//         return navigate("/");
//       default:
//         return <AdminHome onSelectSection={setActiveSection} />;
//     }
//   };

//   return (
//     <Container fluid>
//       <Row>
//         <Navbar style={{ background: "#F8F9FA" }} expand="lg">
//           <Navbar.Brand className=" fs-1 mx-5 cursive-font text-danger">
//             Tasty Treats
//           </Navbar.Brand>
//           <Navbar.Brand className="fs-2 mx-auto text-danger">
//             Admin Dashboard
//           </Navbar.Brand>
//         </Navbar>
//       </Row>

//       <Row>
//         <Col
//           xs={2}
//           style={{ height: "100vh", backgroundColor: "rgb(245, 245, 245)" }}
//         >
//           <Nav className="mt-4">
//             <Nav.Link
//               className="text-danger"
//               onClick={() => setActiveSection("home")}
//             >
//               <IoHome style={{ marginRight: "0.5rem" }} /> Home
//             </Nav.Link>

//             <Nav.Link
//               className="text-danger"
//               onClick={() => setActiveSection("users")}
//             >
//               <FaListUl style={{ marginRight: "0.5rem" }} /> All Users
//             </Nav.Link>

//             <Nav.Link
//               className="text-danger"
//               onClick={() => setActiveSection("managemenu")}
//             >
//               <IoMdRestaurant style={{ marginRight: "0.5rem" }} />
//               Manage Menu
//             </Nav.Link>

//             <Nav.Link
//               className="text-danger"
//               onClick={() => setActiveSection("order")}
//             >
//               <FaShoppingCart style={{ marginRight: "0.5rem" }} />
//               Order
//             </Nav.Link>

//             <Nav.Link
//               className="text-danger"
//               onClick={() => setActiveSection("reservation")}
//             >
//               <IoCheckboxOutline style={{ marginRight: "0.5rem" }} />
//               Reservation
//             </Nav.Link>

//             <Nav.Link
//               className="text-danger"
//               onClick={() => setActiveSection("logout")}
//             >
//               <IoLogOut style={{ marginRight: "0.2rem" }} />
//               Logout
//             </Nav.Link>
//           </Nav>
//         </Col>
//         <Col xs={10} style={{ padding: "20px", overflowY: "hidden" }}>
//           {renderContent()}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Admin;

import React, { useState } from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { IoMdRestaurant } from "react-icons/io";
import { FaListUl } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoCheckboxOutline } from "react-icons/io5";
import { IoLogOut, IoHome } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import ManageMenu from "./ManageMenu";
import ReservationManage from "./ReservationManage";
import AllUsers from "./AllUsers";
import Order from "./Order";
import AdminHome from "./AdminHome";

const Admin = () => {
  const [activeSection, setActiveSection] = useState("home"); // Default active section
  const navigate = useNavigate();

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return <AdminHome onSelectSection={setActiveSection} />;
      case "users":
        return <AllUsers />;
      case "managemenu":
        return <ManageMenu />;
      case "reservation":
        return <ReservationManage />;
      case "order":
        return <Order />;
      case "logout":
        return navigate("/");
      default:
        return <AdminHome onSelectSection={setActiveSection} />;
    }
  };

  return (
    <Container fluid>
      {/* Navbar Row */}
      <Row>
        <Navbar style={{ background: "#F8F9FA" }} expand="lg">
          <Navbar.Brand className="fs-1 mx-lg-5 mx-md-3 mx-sm-2 cursive-font text-danger">
            Tasty Treats
          </Navbar.Brand>
          <Navbar.Brand className="fs-2 mx-auto text-danger">
            Admin Dashboard
          </Navbar.Brand>
        </Navbar>
      </Row>

      <Row>
        {/* Sidebar Navigation */}
        <Col
          xs={12}
          sm={3}
          md={2}
          className="p-0"
          style={{
            height: "100vh",
            backgroundColor: "rgb(245, 245, 245)",
            minHeight: "100vh",
          }}
        >
          <Nav className="flex-column mt-4 px-3">
            <Nav.Link
              className="text-danger"
              onClick={() => setActiveSection("home")}
            >
              <IoHome style={{ marginRight: "0.5rem" }} /> Home
            </Nav.Link>

            <Nav.Link
              className="text-danger"
              onClick={() => setActiveSection("users")}
            >
              <FaListUl style={{ marginRight: "0.5rem" }} /> All Users
            </Nav.Link>

            <Nav.Link
              className="text-danger"
              onClick={() => setActiveSection("managemenu")}
            >
              <IoMdRestaurant style={{ marginRight: "0.5rem" }} />
              Manage Menu
            </Nav.Link>

            <Nav.Link
              className="text-danger"
              onClick={() => setActiveSection("order")}
            >
              <FaShoppingCart style={{ marginRight: "0.5rem" }} />
              Order
            </Nav.Link>

            <Nav.Link
              className="text-danger"
              onClick={() => setActiveSection("reservation")}
            >
              <IoCheckboxOutline style={{ marginRight: "0.5rem" }} />
              Reservation
            </Nav.Link>

            <Nav.Link
              className="text-danger"
              onClick={() => setActiveSection("logout")}
            >
              <IoLogOut style={{ marginRight: "0.2rem" }} />
              Logout
            </Nav.Link>
          </Nav>
        </Col>

        {/* Main Content */}
        <Col
          xs={12}
          sm={9}
          md={10}
          style={{ padding: "20px", overflowY: "hidden" }}
        >
          {renderContent()}
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;
