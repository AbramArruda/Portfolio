import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Logo from "../../images/LOGO_B.png";
import Logo2 from "../../images/LOGO.png";
import { Link } from "react-router-dom";

import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-md">
        <div>
          <Fade duration={2000} delay={300}>
            <Link
              class="nav-link"
              to={process.env.PUBLIC_URL + "/"}
              id="logoLink"
            >
              <img src={Logo} id="fullImage" />
              <img src={Logo2} id="mobileImage" />
            </Link>
          </Fade>
        </div>

        <ul class="nav">
          <li class="nav-item">
            <Fade duration={2000} delay={300}>
              <Link
                class="nav-link underline"
                to={process.env.PUBLIC_URL + "/AboutMe"}
                id="aboutLink"
              >
                about
              </Link>
            </Fade>
          </li>
          <li class="nav-item">
            <Fade duration={2000} delay={300}>
              <Link
                class="nav-link underline"
                to={process.env.PUBLIC_URL + "/Works"}
                id="worksLink"
              >
                works
              </Link>
            </Fade>
          </li>
          <li class="nav-item">
            <Fade duration={2000} delay={300}>
              <Link
                class="nav-link underline"
                to={process.env.PUBLIC_URL + "/Contact"}
                id="contactLink"
              >
                contact
              </Link>
            </Fade>
          </li>
        </ul>
      </nav>
    );
  }
}
