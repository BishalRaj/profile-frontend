import { Form, Button, Col, Alert } from "react-bootstrap";
import React, { useState } from "react";
import Axios from "axios";

export default function About() {
  const [f_name, setf_name] = useState("");
  const [m_name, setm_name] = useState("");
  const [l_name, setl_name] = useState("");
  const [dob, setdob] = useState("");
  const [address, setaddress] = useState("");
  const [zip, setzip] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [website, setwebsite] = useState("");
  const [responseMessage, setresponseMessage] = useState("");
  const [responseStatus, setresponseStatus] = useState("");

  function handlefNameInput(e) {
    setf_name(e.target.value);
  }
  function handlemNameInput(e) {
    setm_name(e.target.value);
  }
  function handlelNameInput(e) {
    setl_name(e.target.value);
  }
  function handleDobInput(e) {
    setdob(e.target.value);
  }
  function handleAddressInput(e) {
    setaddress(e.target.value);
  }
  function handleZipInput(e) {
    setzip(e.target.value);
  }
  function handleEmailInput(e) {
    setemail(e.target.value);
  }
  function handlePhoneInput(e) {
    setphone(e.target.value);
  }
  function handleWebsiteInput(e) {
    setwebsite(e.target.value);
  }

  function onSubmit() {
    const data = {
      f_name: f_name,
      m_name: m_name,
      l_name: l_name,
      dob: dob,
      address: address,
      zip: zip,
      email: email,
      phone: phone,
      website: website,
    };
    Axios.post("http://localhost:8080/about", data)
      .then((response) => {
        setresponseMessage(response.data.message);
        setresponseStatus(response.status);
      })
      .catch((err) => {
        setresponseMessage(err.response.data.message);
        setresponseStatus(err.response.status);
      });
  }

  return (
    <>
      About
      <div className="px-5 w-50 mx-auto">
        {responseMessage ? (
          <Alert
            variant={
              responseStatus === 200
                ? "success"
                : responseStatus === 401
                ? "danger"
                : "warning"
            }
          >
            {responseMessage}
          </Alert>
        ) : (
          ""
        )}
        <Form>
          <Form.Label>Name</Form.Label>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Control
                type="text"
                value={f_name}
                onChange={handlefNameInput}
                placeholder="First name"
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Control
                type="text"
                value={m_name}
                onChange={handlemNameInput}
                placeholder="Middle name"
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Control
                type="text"
                value={l_name}
                onChange={handlelNameInput}
                placeholder="Last name"
              />
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              value={dob}
              onChange={handleDobInput}
              placeholder="Date of Birth"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              value={address}
              onChange={handleAddressInput}
              placeholder="Address"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Zip</Form.Label>
            <Form.Control
              type="number"
              value={zip}
              onChange={handleZipInput}
              placeholder="Zip Code"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={handleEmailInput}
              placeholder="Email"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="number"
              value={phone}
              onChange={handlePhoneInput}
              placeholder="Phone no."
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Website Link</Form.Label>
            <Form.Control
              type="text"
              value={website}
              onChange={handleWebsiteInput}
              placeholder="www.sthsthsth.com"
            />
          </Form.Group>
          <Button variant="primary" onClick={onSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}
