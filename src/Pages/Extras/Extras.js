import React, { Component } from "react";
import "./Extras.css";
import Fade from "react-reveal/Fade";
import Resume from "../../utils/Resume.pdf";

import Footer from "../../Components/Footer";

export default class Extras extends Component {
  render() {
    return (
      <div class="jumbotron jumbotron-fluid" id="extrasJumbotron">
        <div class="container">
          <Fade top duration={2000} delay={200}>
            <h1 class="display-6" id="extrasTitle">
              resources
            </h1>
          </Fade>
          <div> 
          <a
                      download="Resume.pdf"
                      href={Resume}
                      target="_blank"
                      id="resumeLink"
                    >
                      <br /> Download my Resume{" "}
                    </a>

          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
