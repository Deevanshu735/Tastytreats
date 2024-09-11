import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Container, Row, Col, Button } from "react-bootstrap";

export default function ReservationManage() {
  const [reservations, setReservations] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/api/reservations/getreservations");
      setReservations(response.data.reservations);
    }

    fetchData();
  }, []);
  return (
    <>
      <Container fluid>
        <h2 className="text-center fs-1 mt-5 cursive-font text-danger">
          All Reservations
        </h2>
        <Container fluid>
          <Table responsive bordered hover>
            <thead>
              <tr>
                <th className="bg-danger text-white fs-5 p-2 text-center">
                  Res No.
                </th>
                <th className="bg-danger text-white fs-5 p-2 text-center">
                  Name
                </th>
                <th className="bg-danger text-white fs-5 p-2 text-center">
                  Phone
                </th>
                <th className="bg-danger text-white fs-5 p-2 text-center">
                  Date
                </th>
                <th className="bg-danger text-white fs-5 p-2 text-center">
                  Time
                </th>
                <th className="bg-danger text-white fs-5 p-2 text-center">
                  People
                </th>
                <th className="bg-danger text-white fs-5 p-2 text-center">
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation, index) => (
                <tr>
                  <td className="fs-6 p-3 text-center">{index + 1}</td>
                  <td className="fs-6 p-3 text-center">{reservation.name}</td>
                  <td className="fs-6 p-3 text-center">{reservation.phone}</td>
                  <td className="fs-6 p-3 text-center">{reservation.date}</td>
                  <td className="fs-6 p-3 text-center">{reservation.time}</td>
                  <td className="fs-6 p-3 text-center">{reservation.people}</td>
                  <td className="fs-6 p-3 text-center">
                    <Row xs={12}>
                      <Col xs={6}>
                        <Button
                          className="btn-hvr me-2"
                          variant="outline-danger"
                        >
                          Details
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
