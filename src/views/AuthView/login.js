import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { connect } from "react-redux";
// import Cookies from "universal-cookie";
import { Login } from "../../Actions/authAction";

function LoginView(props) {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  // const cookies = new Cookies();

  function handleChange() {
    props.onChange(false);
  }

  function handleEmailInput(e) {
    setEmail(e.target.value);
  }

  function handlePwdInput(e) {
    setPwd(e.target.value);
  }

  // function login() {
  //   Axios.post("http://localhost:8080/user/login", {
  //     email: email,
  //     password: pwd,
  //   })
  //     .then((reply) => {
  //       cookies.set("token", reply.data.response, { path: "/" });
  //       alert(cookies.get("token"));
  //       props.handleSuccessfulLogin(reply);
  //     })
  //     .catch((err) => console.log(err));
  // }

  return (
    <Row className="w-100 bg-light p-0 m-0">
      <Col lg={6} className="mx-auto bg-light p-5">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleEmailInput}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handlePwdInput}
            />
          </Form.Group>

          <Button
            variant="primary"
            className="w-100 default-xxs-font"
            onClick={() => props.Login(email, pwd)}
          >
            Login
          </Button>
          <p>Or</p>
          <Button
            variant="primary"
            className="w-100 default-xxs-font"
            onClick={handleChange}
          >
            Go to Register
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
export default connect(null, { Login })(LoginView);
