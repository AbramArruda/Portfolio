import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import Project1 from "../../images/Projects/photo1.jpeg";
import Project2 from "../../images/Projects/photo2.jpeg";
import "./Projects.css";

export default class Projects extends Component {
  render() {
    return (
        <Fade bottom duration={2000} delay={1750}>
          <div class="container">
            <div class="row no-gutters">
              <div class="col-lg-6">
                <a
                  class="portfolio-item"
                  href="https://www.abramarruda.com/"
                  target="blank_"
                >
                  <span class="caption">
                    <span class="caption-content">
                      <p class="mb-0">
                        Web Application
                      </p>
                    </span>
                  </span>
                  <img class="img-fluid" src={Project1} alt="Psychic Game" />
                </a>
              </div>
              <div class="col-lg-6">
                <a
                  class="portfolio-item"
                  href="https://www.abramarruda.com/"
                  target="blank_"
                >
                  <span class="caption">
                    <span class="caption-content">
                      <p class="mb-0">
                      Game
                      </p>
                    </span>
                  </span>
                  <img
                    class="img-fluid"
                    src={Project2}
                    alt="Crystall Collector"
                  />
                </a>
              </div>
                            
            </div>
          </div>
        </Fade>
    );
  }
}
