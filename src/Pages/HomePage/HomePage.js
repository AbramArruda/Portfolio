import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import "./HomePage.css";
import TextLoop from "react-text-loop";
import Footer from "../../Components/Footer";
import Animation from "../../Components/Animation";

export default class HomePage extends Component {
  render() {
    return (
      <div class="container-fluid">
        <div class="row" id="homeTextDiv">
          <div class="col-sm-12 col-lg-7">
            <h1 id="homeText">
              {" "}
              <Fade cascade left duration={3000} delay={500}>
                Hi, I'm Abram Arruda
              </Fade>
            
              <Fade bottom delay={3200} speed={2500} >
                <h3 id="homeText2" p> 
                  <TextLoop delay={2000} interval={6500} mask={true}
                    springConfig={{ stiffness: 130, damping: 100 }}
                    children={[
                      "developer",
                      "botanist",
                      "husband",
                      "footballer",
                      "student",
                    ]}
                  />
                 
                </h3>
              </Fade>
            </h1>
          </div>
          <div class="col-sm-12 col-lg-5" id="homeImage">
            <Animation />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
