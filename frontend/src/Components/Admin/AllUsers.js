import axios from "axios";
import React, { useEffect } from "react";
import { Container, Table, Row, Col, Button } from "react-bootstrap";

export default function AllUsers() {
  const [users, setUsers] = React.useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/api/users/all");
      console.log(response.data.users);
      setUsers(response.data.users);
    }

    fetchData();
  }, []);
  return (
    <>
      <Container xs={12} fluid>
        <h2 className="text-center fs-1 mt-2 cursive-font text-danger">
          All users
        </h2>
        <Container xs={12} fluid>
          <Table bordered hover>
            <thead>
              <tr>
                <th className="bg-danger text-white fs-5 p-2 text-center">
                  User Id
                </th>
                <th className="bg-danger text-white fs-5 p-2 text-center">
                  Name
                </th>
                <th className="bg-danger text-white fs-5 p-2 text-center">
                  Email
                </th>
                <th className="bg-danger text-white fs-5 p-2 text-center">
                  Phone
                </th>
                <th className="bg-danger text-white fs-5 p-2 text-center">
                  Role
                </th>
                <th className="bg-danger text-white fs-5 p-2 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <td className="fs-6 p-3 text-center">{index + 1}</td>
                  <td className="fs-6 p-3 text-center">{user.name}</td>
                  <td className="fs-6 p-3 text-center">{user.email}</td>
                  <td className="fs-6 p-3 text-center">{user.phone}</td>
                  <td className="fs-6 p-3 text-center">{user.role}</td>
                  <td className="fs-6 p-3 text-center">
                    <Row xs={12}>
                      <Col xs={6}>
                        <Button
                          className="btn-hvr me-2"
                          variant="outline-danger"
                        >
                          Edit
                        </Button>
                      </Col>
                      <Col xs={6}>
                        <Button
                          className="btn-hvr me-2"
                          variant="outline-danger"
                        >
                          Delete
                        </Button>
                      </Col>
                    </Row>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </Container>
    </>
  );
}
