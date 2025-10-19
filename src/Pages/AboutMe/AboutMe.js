import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Resume from "../../utils/Resume.pdf";
import "./AboutMe.css";
import Footer from "../../Components/Footer";

export default class AboutMe extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class="row about-row" id="aboutMeHeaderWrapper">
            <div class="col-lg-12 no-padding" id="aboutMeHeaderContainer">
              <Fade duration={2000}>
                <h1 id="aboutMeHeader">
                  {" "}
                  Always learning and facing new challenges.{" "}
                  <Fade delay={2000}>
                    <a
                      download="Resume.pdf"
                      href={Resume}
                      target="_blank"
                      id="resumeLink"
                    >
                      <br /> Download my Resume{" "}
                    </a>
                  </Fade>
                </h1>
              </Fade>
            </div>
          </div>
          <div class="row about-row" id="aboutMeText">
            <div class="col-sm-12 col-lg-4 no-padding">
              <Fade left>
                <h2 id="about">About:</h2>
              </Fade>
            </div>
            <div class="col-sm-12 col-lg-8 no-padding">
              <Fade bottom duration={1800} delay={1000}>
                <p id="bio">
                  Web developer and content creator in Georgia.
                  Full stack development certification received from
                  The Georgia Institute of Technology. The development
                  program curriculum 
                  <a
                    target="blank_"
                    href="https://bootcamp.pe.gatech.edu/coding/curriculum/"
                    id="courseContent"
                  >
                    {" "}
                   can be found here.{" "}
                  </a>
                </p>
              </Fade>
            </div>
          </div>
          <div class="row about-row" id="aboutMeSkills">
            <div class="col-sm-12 col-lg-4 no-padding">
              <Fade left delay={200}>
                <h2 id="skills">Skills:</h2>
              </Fade>
            </div>
            <div class="col-sm-12 col-lg-6">
              <div class="row" id="skillsWrapper">
                <Fade bottom cascade duration={2500} delay={1500}>
                  <div class="col-3" id="frontEndSkills">
                    <h3 id="frontEnd"> Front-End: </h3>

                    <Fade bottom cascade delay={2000}>
                      <ul id="skillsList1">
                        <li>Html</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>JQuery</li>
                        <li>React</li>
                      </ul>
                    </Fade>
                  </div>
                  <div class="col-3" id="backEndSkills">
                    <h3 id="backEnd"> Back-End: </h3>

                    <Fade bottom cascade delay={2000}>
                      <ul id="skillsList2">
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>Sequelize</li>
                        <li>Express</li>
                      </ul>
                    </Fade>
                  </div>
                  <div class="col-3" id="devToolsSkills">
                    <h3 id="devTools"> Dev Tools: </h3>
                    <Fade bottom cascade delay={2000}>
                      <ul id="skillsList3">
                        <li>NPM/Yarn</li>
                        <li>O-Auth</li>
                        <li>Node</li>
                        <li>Ajax/axios</li>
                      </ul>
                    </Fade>
                  </div>
                </Fade>
              </div>
            </div>
          </div>

          <div class="row about-row" id="educationWrapper">
            <div class="col-sm-12 col-lg-4 no-padding" id="aboutMeEducation">
              <Fade left delay={400}>
                <h2 id="education">Education:</h2>
              </Fade>
            </div>
            <div class="col-sm-5 col-lg-6">
              <div class="row">
                <Fade bottom cascade duration={2000} delay={1700}>
                  <div class="col-sm-5 no-padding">
                    <h3 id="degree"> Bachelors Degree in Biology </h3>
                    <Fade bottom cascade delay={2000}>
                      <ul>
                        <li>Spring 2013 - December 2017</li>
                        <li>University of West Georgia</li>
                      </ul>
                    </Fade>
                  </div>
                  <div class="col-5 no-padding">
                    <h3 id="certificate"> Full Stack Development Program </h3>
                    <Fade bottom cascade delay={2000} appear={true}>
                      <ul>
                        <li>May 2018 - November 2018</li>
                        <li>Georiga Institute of Technology</li>
                      </ul>
                    </Fade>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
