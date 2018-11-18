import React, { Component } from "react";
import Roll from "react-reveal/Roll";
import Logo from "../../images/LOGO_B.png";
import Logo2 from "../../images/LOGO.png";

import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-md">
        <div>
          <a class="nav-link" href="/" id="logoLink">
            <img src={Logo} id="fullImage" />
            <img src={Logo2} id="mobileImage" />
          </a>
        </div>
        <div>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link underline" href="/AboutMe" id="aboutLink">
                about
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link underline" href="/Works" id="worksLink">
                works
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link underline" href="/Contact" id="contactLink">
                contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
