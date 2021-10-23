import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import "../styles/loginStyle.scss";
import Login from "../views/AuthView/login";
import Register from "../views/AuthView/signup";
function Auth(props) {
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("token") || props.token;
    try {
      if (token || token.length || token.length > 0) {
        history.push("/");
      }
    } catch (error) {}
  }, [props.token, history]);

  const [login, setLogin] = useState(true);

  function handleChange(value) {
    setLogin(value);
  }

  return (
    <>
      {/* <NavBar /> */}
      <Container className="loginPage d-flex align-items-center justify-content-center">
        {login ? (
          <Login onChange={handleChange} />
        ) : (
          <Register onChange={handleChange} />
        )}
      </Container>
    </>
  );
}

function mapStateToProps(state) {
  return {
    token: state.auth.token,
  };
}

export default connect(mapStateToProps)(Auth);
