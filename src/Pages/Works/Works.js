import React, { Component } from "react";
import "./Works.css";
import Fade from "react-reveal/Fade";
import Projects from "../../Components/Projects";
import Footer from "../../Components/Footer";

export default class Works extends Component {
  render() {
    return (
      <div class="jumbotron jumbotron-fluid" id="worksJumbotron">
        <div class="container">
          <Fade top duration={2000} delay={200}>
            <h1 class="display-6" id="worksTitle">
              2026 projects
            </h1>
          </Fade>
          <Projects />
        </div>
        <Footer />
      </div>
    );
  }
}
