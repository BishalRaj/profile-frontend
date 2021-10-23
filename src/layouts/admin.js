import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "../views/NavView/AdminNav/NavBar";
import Home from "../views/adminView/home";
import About from "../views/adminView/About/about";
import Resume from "../views/adminView/Resume/resume";
import Skills from "../views/adminView/Resume/resume";
import "../styles/adminStyles.css";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { IsAdmin } from "../Actions/authAction";

function AdminLayout(props) {
  const history = useHistory();
  const [path, setPath] = useState("Home");
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token") || props.token;
    if (!token || !token.length || token.length <= 0) {
      history.push("/login");
    }
    props.IsAdmin();
  }, [history, props.token, props.IsAdmin]);

  const showSideBar = (_sidebar) => {
    setSidebar(_sidebar);
  };

  function handleClick(_path) {
    setPath(_path);
  }

  return (
    <div>
      <Navbar changePath={handleClick} slide={showSideBar} />
      <div
        className={
          sidebar ? "admin-container-active pb-5" : "admin-container pb-5"
        }
      >
        {path === "About" ? (
          <About />
        ) : path === "Resume" ? (
          <Resume />
        ) : path === "Skills" ? (
          <Skills />
        ) : (
          <Home />
        )}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    token: state.auth.token,
    admin: state.auth.admin,
  };
}

export default connect(mapStateToProps, { IsAdmin })(AdminLayout);
