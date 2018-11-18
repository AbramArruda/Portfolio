import React, { Component } from "react";
import "./Works.css";
import Flip from "react-reveal/Flip";
import Projects from "../../Components/Projects";
import Footer from "../../Components/Footer";

export default class Works extends Component {
  render() {
    return (
      <div class="jumbotron jumbotron-fluid" id="worksJumbotron">
        <div class="container">
          <Flip top duration={1500} delay={1575}>
            <h1 class="display-4" id="worksTitle">
              recent projects
            </h1>
          </Flip>
          <Projects />
        </div>
        <Footer />
      </div>
    );
  }
}
