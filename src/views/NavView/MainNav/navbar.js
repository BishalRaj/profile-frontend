import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { Link as SecLink } from "react-router-dom";
import { Link } from "react-scroll";
import { NavBarData } from "./navbarData";
import { Logout } from "../../../Actions/authAction";
import { AiOutlineLogout } from "react-icons/ai";
function NavBar(props) {
  const isLoggedIn = () => {
    if (props.token || localStorage.getItem("token")) {
      return true;
    }

    return false;
  };

  return (
    <Container>
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="lg"
        className="px-4 py-3 mx-5"
      >
        <Navbar.Brand
          style={{ fontWeight: "1200 !important" }}
          className="mx-5"
        >
          <h4>Bishal</h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="mr-5 justify-content-end"
        >
          <Nav>
            {NavBarData.map((data, index) => {
              return (
                <Link
                  className="navs mx-2 "
                  activeclass="active later"
                  to={data.to}
                  spy={true}
                  key={index}
                >
                  {data.title}
                </Link>
              );
            })}

            {isLoggedIn() ? (
              <>
                <SecLink
                  className="navs mx-2 "
                  activeclass="active later"
                  key={99}
                  to="/admin"
                >
                  Settings
                </SecLink>

                <Link
                  className="navs mx-2 "
                  key={999}
                  onClick={() => props.Logout()}
                  to=""
                >
                  <AiOutlineLogout />
                </Link>
              </>
            ) : (
              <SecLink
                className="navs mx-2 "
                activeclass="active later"
                key={9999}
                to="/login"
              >
                Login
              </SecLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

/* 

const mapDispatchToProps = {
  Logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

OR

*/

export default connect(mapStateToProps, { Logout })(NavBar);
