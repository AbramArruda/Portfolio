import React, { Component } from "react";
import Roll from "react-reveal/Roll";
import Logo from "../../images/LOGO_B.png";
import Logo2 from "../../images/LOGO.png";
import { Link } from "react-router-dom";

import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-md">
        <div>
          <Link
            class="nav-link"
            to={process.env.PUBLIC_URL + "/"}
            id="logoLink"
          >
            <img src={Logo} id="fullImage" />
            <img src={Logo2} id="mobileImage" />
          </Link>
        </div>
        <div>
          <ul class="navbar-nav ml-auto">
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
        </div>
      </nav>
    );
  }
}
