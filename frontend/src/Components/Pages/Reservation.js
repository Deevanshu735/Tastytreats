import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Form, FormGroup, Button } from "react-bootstrap";
import restt from "../../assests/images/rest.webp";
import Footer from "../Resuable/Footer";
import axios from "axios";
import { Navigation } from "../Resuable/Navigation";
import { useNavigate } from "react-router-dom";
import { BACKEND_BASE_URL } from "../../constant";

export default function Reservation() {
  const navigate = useNavigate();

  const [name, setName] = React.useState("");
  const [nameError, setNameError] = React.useState("");

  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");

  const [phone, setPhone] = React.useState();
  const [phoneError, setPhoneError] = React.useState("");

  const [date, setDate] = React.useState("");
  const [dateError, setDateError] = React.useState("");

  const [time, setTime] = React.useState("");
  const [timeError, setTimeError] = React.useState("");

  const [people, setPeople] = React.useState("");
  const [peopleError, setPeopleError] = React.useState("");

  const [message, setMessage] = React.useState("");
  const [messageError, setMessageError] = React.useState("");

  function handleName(e) {
    const value = e.target.value;
    setName(value);
    const trimmedValue = value.trim();
    if (trimmedValue.length === 0) {
      setNameError("Name is required");
    } else if (trimmedValue.length < 3) {
      setNameError("Name should have at least 3 characters");
    } else if (!/^[a-zA-Z]+(\s[a-zA-Z]+)*$/.test(trimmedValue)) {
      setNameError("Please enter a valid name");
    } else {
      setNameError("");
    }
  }

  function handleEmail(e) {
    const value = e.target.value.trim();
    setEmail(value);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setEmailError("Please enter a valid email ");
    } else if (value.length === "") {
      setEmailError("Please enter Email");
    } else {
      setEmailError("");
    }
  }
  function handlePhone(e) {
    const value = e.target.value;
    setPhone(value);

    // Check if the field is empty
    if (value === "") {
      setPhoneError("Phone number is required");
    }
    // Check if the phone number is a valid 10-digit number
    else if (!/^\d{10}$/.test(value)) {
      setPhoneError("Please enter a valid 10-digit number");
    }
    // If valid, clear the error
    else {
      setPhoneError("");
    }
  }

  function handleDate(e) {
    const value = e.target.value;
    setDate(value);

    const today = new Date();
    const selectedDate = new Date(value);

    today.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);

    if (value.length === 0) {
      setDateError("Date is required");
    } else if (selectedDate < today) {
      setDateError("You cannot select a past date");
      setDate("");
    } else {
      setDateError("");
    }
  }

  function handleTime(e) {
    const value = e.target.value;
    setTime(value);

    const today = new Date();
    const selectedDate = new Date(date);
    const currentTime = today.toTimeString().slice(0, 5);
    if (
      selectedDate.toDateString() === today.toDateString() &&
      value < currentTime
    ) {
      setTimeError("You cannot select a past time today");
      setTime("");
    } else if (value.length === 0) {
      setTimeError("Time is required");
    } else {
      setTimeError("");
    }
  }

  function handlePeople(e) {
    const value = e.target.value;
    setPeople(value);
    if (value.length === 0) {
      setPeopleError("Number of Guests is required");
    } else if (Number(value) < 1) {
      setPeopleError("Number of Guests should be a positive integer");
    } else if (Number(value) > 20) {
      setPeopleError("Number of Guests should not exceed 20");
    } else {
      setPeopleError("");
    }
  }

  function handleMessage(e) {
    const value = e.target.value;
    setMessage(value);
    if (value.length === 0) {
      setMessageError("Message is required");
    } else {
      setMessageError("");
    }
  }

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (name === "") {
      setNameError("Name is required");
    }
    if (email === "") {
      setEmailError("Email is required");
    }
    if (phone === "") {
      setPhoneError("Phone is required");
    }
    if (date === "") {
      setDateError("Date is required");
    }
    if (time === "") {
      setTimeError("Time is required");
    }
    if (people === "") {
      setPeopleError("Please enter number of people");
    }
    if (message === "") {
      setMessageError("Message is required");
    }

    if (
      nameError ||
      emailError ||
      phoneError ||
      dateError ||
      timeError ||
      peopleError ||
      messageError
    ) {
      console.error("Please fix validation errors before submitting");
      return;
    }

    try {
      const reservationData = {
        name,
        email,
        phone,
        date,
        time,
        people,
        message,
      };

      const res = await axios.post(
        `${BACKEND_BASE_URL}/api/reservations/reserve`,
        reservationData
      );
      console.log(res.data);
      alert("Reservation Successful! We'll contact you soon.");
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Navigation />
      <h2 className="text-center my-3 cursive-font">
        <span className="text-danger fs-1"> A TABLE</span>
      </h2>
      <Container className="my-2 shadow-lg p-0">
        <Row lg={12} className="h-50">
          <Col lg={4} className="p-0">
            <Image style={{ width: "100%" }} src={restt} />
          </Col>
          <Col lg={8} className="my-5 pt-3 px-4">
            <Form className="px-1">
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Form.Control
                      className="custom-input"
                      type="text"
                      placeholder="Your Name"
                      onChange={handleName}
                      value={name}
                    />
                  </FormGroup>
                  <span className="text-danger ms-2">{nameError}</span>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Form.Control
                      className="custom-input"
                      type="email"
                      placeholder="Your Email"
                      onChange={handleEmail}
                      value={email}
                    />
                  </FormGroup>
                  <span className="text-danger ms-2">{emailError}</span>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Form.Control
                      className="custom-input"
                      type="tel"
                      placeholder="Your Phone"
                      onChange={handlePhone}
                      value={phone}
                    />
                  </FormGroup>
                  <span className="text-danger ms-2">{phoneError}</span>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Form.Control
                      className="custom-input"
                      type="date"
                      placeholder="Enter date"
                      onChange={handleDate}
                      value={date}
                    />
                  </FormGroup>
                  <span className="text-danger ms-2">{dateError}</span>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Form.Control
                      className="custom-input"
                      type="time"
                      placeholder="Time"
                      onChange={handleTime}
                      value={time}
                    />
                  </FormGroup>
                  <span className="text-danger ms-2">{timeError}</span>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Form.Control
                      className="custom-input"
                      type="number"
                      placeholder="No of people"
                      onChange={handlePeople}
                      value={people}
                    />
                  </FormGroup>
                  <span className="text-danger ms-2">{peopleError}</span>
                </Col>
              </Row>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  className="custom-input my-2"
                  as="textarea"
                  placeholder="Message"
                  onChange={handleMessage}
                  value={message}
                  rows={4}
                />
              </Form.Group>
              <span className="text-danger ms-2">{messageError}</span>
              <FormGroup className="text-center">
                <Button
                  variant="danger"
                  className="b1"
                  active
                  onClick={handleSendMessage}
                >
                  Send Message
                </Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
