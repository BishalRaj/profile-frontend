import React, { useEffect, useState } from "react";
import NavBar from "../views/NavView/MainNav/navbar";
import Intro from "../views/mainView/Intro/intro";
import About from "../views/mainView/About/about";
import Resume from "../views/mainView/Resume/resume";
import Services from "../views/mainView/Services/services";
import Skills from "../views/mainView/Skills/skills";
import Projects from "../views/mainView/Projects/projects";
import Contact from "../views/mainView/Contact/contact";
import Footer from "../views/mainView/Footer/footer";
import BottomNavBar from "../views/NavView/MainNav/bottomNavbar";
import { useHistory, useParams } from "react-router-dom";
import "../styles/homeStyle.scss";
import { connect } from "react-redux";
import { IsNotAdmin } from "../Actions/authAction";
function Home(props) {
  const [theme, setTheme] = useState("theme-dark");
  const [uid, setuid] = useState("");
  const history = useHistory();

  const { id } = useParams();
  const token = localStorage.getItem("token");

  function checkStorage() {
    return localStorage.getItem("theme");
  }

  function toggleTheme(theme) {
    setTheme({
      theme,
    });

    localStorage.setItem("theme", theme);
  }

  useEffect(() => {
    if (id) {
      setuid(id);
      console.log("uid:: " + uid);
    }

    if (!token && !props.isLoggedIn && !id) {
      history.push("/login");
    }

    props.IsNotAdmin();
  }, [id, uid, history, token]);

  return (
    <div className={`app ${checkStorage() ? checkStorage() : theme}`}>
      <NavBar />
      <Intro />
      <About />
      <Resume admin={props.admin} />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <BottomNavBar clickMe={toggleTheme} />
    </div>
  );
}

function mapStateToProps(state) {
  return { isLoggedIn: state.auth.isLoggedIn, admin: state.auth.admin };
}
export default connect(mapStateToProps, { IsNotAdmin })(Home);
