import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { SignUp } from "../../Actions/authAction";
function Signup(props) {
  const [un, setUn] = useState("");
  const [pwd, setPwd] = useState("");
  function handleChange() {
    props.onChange(true);
  }

  function handleUnInput(e) {
    setUn(e.target.value);
  }
  function handlePwdInput(e) {
    setPwd(e.target.value);
  }

  return (
    <Row className="w-100">
      <Col lg={6} className="mx-auto bg-light p-5">
        <Form>
          {/* {errors ? <div>{errors.message}</div> : ""} */}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleUnInput}
              value={un}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handlePwdInput}
              value={pwd}
            />
          </Form.Group>

          <Button
            variant="primary"
            onClick={() => props.SignUp(un, pwd)}
            className="w-100 default-xxs-font"
          >
            Signup
          </Button>
          <p>Or</p>
          <Button
            variant="primary"
            className="w-100 default-xxs-font"
            onClick={handleChange}
          >
            Go to Login
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

const mapDispatchToProps = {
  SignUp,
};

export default connect(null, mapDispatchToProps)(Signup);
