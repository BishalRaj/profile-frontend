import { Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import Axios from "axios";

export default function Skills() {
  const [from, setfrom] = useState("");
  const [to, setto] = useState("");
  const [degree, setdegree] = useState("");
  const [university, setuniversity] = useState("");
  const [description, setdescription] = useState("");

  const [responseMessage, setresponseMessage] = useState("");
  const [responseStatus, setresponseStatus] = useState("");

  function handlefromInput(e) {
    setfrom(e.target.value);
  }
  function handletoInput(e) {
    setto(e.target.value);
  }
  function handledegreeInput(e) {
    setdegree(e.target.value);
  }
  function handleuniversityInput(e) {
    setuniversity(e.target.value);
  }
  function handledescriptionInput(e) {
    setdescription(e.target.value);
  }

  function onSubmit() {
    const data = {
      from: from,
      to: to,
      degree: degree,
      university: university,
      description: description,
    };
    console.log(data);
    Axios.post("http://localhost:8080/skills", data).then((response) => {
      setresponseMessage(response.data.message);
      setresponseStatus(response.status);
    });
  }

  return (
    <>
      Skills
      <div className="px-5 w-50 mx-auto">
        {responseMessage ? (
          <p
            className={responseStatus === 200 ? "text-success" : "text-danger"}
          >
            {responseMessage}
          </p>
        ) : (
          ""
        )}
        <Form>
          <Form.Group>
            <Form.Label>Career Joined in</Form.Label>
            <Form.Control
              type="number"
              value={from}
              onChange={handlefromInput}
              min="2000"
              max={new Date().getFullYear()}
              placeholder="2020"
            />

            <Form.Label>Career Ended in</Form.Label>
            <Form.Control
              type="number"
              value={to}
              onChange={handletoInput}
              min="2000"
              max={new Date().getFullYear()}
              placeholder="2020"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>degree</Form.Label>
            <Form.Control
              type="text"
              value={degree}
              onChange={handledegreeInput}
              placeholder="degree"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>university</Form.Label>
            <Form.Control
              type="text"
              value={university}
              onChange={handleuniversityInput}
              placeholder="University Name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={handledescriptionInput}
              placeholder="description"
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
