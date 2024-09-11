import React, { useState } from "react";
import { Table, Container } from "react-bootstrap";
import { Form } from "react-bootstrap";

export default function Order() {
  const [action, setAction] = useState(1);
  const arr = ["Pending", "Delivered", "Cancelled"];

  function handleAction(e) {
    setAction(e.target.value);
  }

  return (
    <>
      <Container fluid>
        <h2 className="text-center fs-1 mt-5 cursive-font text-danger">
          All Order
        </h2>
        <Container fluid>
          <Table responsive bordered hover>
            <thead>
              <tr>
                <th className="bg-danger text-white fs-5 p-2 text-center">
                  OrderID
                </th>
                <th className="bg-danger text-white fs-5 p-2 text-center">
                  Name
                </th>
                <th className="bg-danger text-white fs-5 p-2 text-center">
                  Phone
                </th>
                <th className="bg-danger text-white fs-5 p-2 text-center">
                  Address
                </th>
                <th className="bg-danger text-white fs-5 p-2 text-center">
                  Ouantity
                </th>
                <th className="bg-danger text-white fs-5 p-2 text-center">
                  Item
                </th>
                <th className="bg-danger text-white fs-5 p-2 text-center">
                  Amount
                </th>
                <th className="bg-danger text-white fs-5 p-2 text-center">
                  Status
                </th>
                <th className="bg-danger text-white fs-5 p-2 text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="fs-6 p-3 text-center">1</td>
                <td className="fs-6 p-3 text-center">Rohit</td>
                <td className="fs-6 p-3 text-center">384585238</td>
                <td className="fs-6 p-3 text-center">Bhamboli</td>
                <td className="fs-6 p-3 text-center">10</td>
                <td className="fs-6 p-3 text-center">Burger</td>
                <td className="fs-6 p-3 text-center">200</td>
                <td className="fs-5 p-3 text-center">{arr[action - 1]}</td>
                <td>
                  <Form.Group controlId="formCategory" className="w-100 mb-3">
                    <Form.Select
                      onChange={handleAction}
                      aria-label="Default select example "
                    >
                      <option value="1">Pending</option>
                      <option value="2">Delivered</option>
                      <option value="3">Cancelled</option>
                    </Form.Select>
                  </Form.Group>
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </Container>
    </>
  );
}
