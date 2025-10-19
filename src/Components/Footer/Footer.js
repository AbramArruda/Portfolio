import React, { Component } from "react";

import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div class="container-fluid" id="footer">
        <a
          href="https://github.com/AbramArruda"
          target="_blank"
          id="githubIcon"
        >
          <i class="fa fa-github fa-2x" />
        </a>
      </div>
    );
  }
}
