import React, { Component } from "react";
import Logo from "../../images/LOGO_B.png";
import Logo2 from "../../images/LOGO.png";
import { Link } from "react-router-dom";
import Flip from "react-reveal/Flip";

import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-md justify-content-left" id="navbar">
        <div>
          <Flip duration={1500} delay={500}>
            <Link
              class="nav-link"
              to={process.env.PUBLIC_URL + "/"}
              id="logoLink"
            >
              <img src={Logo} id="fullImage" />
              <img src={Logo2} id="mobileImage" />
            </Link>
          </Flip>
        </div>
        <ul class="nav" id="linkContainer">
          <li class="nav-item">
            <Link
              class="nav-link underline"
              to={process.env.PUBLIC_URL + "/AboutMe"}
              id="aboutLink"
            >
              about
            </Link>
          </li>
          <li class="nav-item">
            <Link
              class="nav-link underline"
              to={process.env.PUBLIC_URL + "/Works"}
              id="worksLink"
            >
              works
            </Link>
          </li>
          <li class="nav-item">
            <Link
              class="nav-link underline"
              to={process.env.PUBLIC_URL + "/Contact"}
              id="contactLink"
            >
              contact
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
