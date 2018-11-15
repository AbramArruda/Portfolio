import React, { Component } from "react";

import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid" id="footer">
          <a
            href="https://www.linkedin.com/in/abramarruda/"
            target="_blank"
            id="linkedInIcon"
          >
            <i class="fa fa-linkedin fa-3x" />
          </a>
          <a
            href="https://github.com/AbramArruda"
            target="_blank"
            id="githubIcon"
          >
            <i class="fa fa-github fa-3x" />
          </a>
        </div>
      </div>
    );
  }
}
