import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Resume from "../../utils/Resume.pdf";
import "./AboutMe.css";

export default class AboutMe extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class="row about-row">
            <div class="col-lg-12 no-padding" id="aboutMeHeader">
              <Fade duration={2000}>
                <h1>
                  {" "}
                  I am looking to better my current skills and contiunally learn
                  every day.{" "}
                  <Fade delay={6500}>
                    <a
                      download="Resume.pdf"
                      href={Resume}
                      target="_blank"
                      id="resumeLink"
                    >
                      {" "}
                      Download my Resume{" "}
                    </a>
                  </Fade>
                </h1>
              </Fade>
            </div>
          </div>
          <div class="row about-row" id="aboutMeText">
            <div class="col-sm-12 col-lg-4 no-padding">
              <Fade left>
                <h2>About:</h2>
              </Fade>
            </div>
            <div class="col-sm-12 col-lg-8 no-padding">
              <Fade bottom duration={1800} delay={2000}>
                <p id="bio">
                  I am a Web Developer, currently living in the Atlanta area.
                  Recent graduate of a full stack web development bootcamp
                  taught at The Georgia Institute of Technology. The Curriculum
                  for this course can be found
                  <a
                    target="blank_"
                    href="https://bootcamp.pe.gatech.edu/coding/curriculum/"
                    id="courseContent"
                  >
                    {" "}
                    here.{" "}
                  </a>
                </p>
              </Fade>
            </div>
          </div>
          <div class="row about-row" id="aboutMeSkills">
            <div class="col-sm-12 col-lg-4 no-padding">
              <Fade left delay={500}>
                <h2>Skills:</h2>
              </Fade>
            </div>
            <div class="col-sm-12 col-lg-6">
              <div class="row">
                <Fade bottom cascade duration={2500} delay={2500}>
                  <div class="col-3" id="frontEndSkills">
                    <h3> Front-End: </h3>

                    <Fade bottom cascade delay={4000}>
                      <ul>
                        <li>Html</li>
                        <li>CSS</li>
                        <li>React</li>
                        <li>Javascript</li>
                      </ul>
                    </Fade>
                  </div>
                  <div class="col-3" id="backEndSkills">
                    <h3> Back-End: </h3>

                    <Fade bottom cascade delay={4000}>
                      <ul>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>Express</li>
                      </ul>
                    </Fade>
                  </div>
                  <div class="col-3" id="devToolsSkills">
                    <h3> Dev Tools: </h3>
                    <Fade bottom cascade delay={4000}>
                      <ul>
                        <li>NPM/Yarn</li>
                        <li>O-Auth</li>
                        <li>Node</li>
                        <li>axios/Ajax</li>
                      </ul>
                    </Fade>
                  </div>
                </Fade>
              </div>
            </div>
          </div>

          <div class="row about-row">
            <div class="col-sm-12 col-lg-4 no-padding" id="aboutMeEducation">
              <Fade left delay={1000}>
                <h2>Education:</h2>
              </Fade>
            </div>
            <div class="col-sm-5 col-lg-6">
              <div class="row">
                <Fade bottom cascade duration={2500} delay={3000}>
                  <div class="col-sm-5 no-padding">
                    <h3> Bachelors Degree in Biology </h3>
                    <Fade bottom cascade delay={4000}>
                      <ul>
                        <li>Spring 2013 - December 2017</li>
                        <li>University of West Georgia</li>
                      </ul>
                    </Fade>
                  </div>
                  <div class="col-5 no-padding">
                    <h3> Full Stack Development Program </h3>
                    <Fade bottom cascade delay={4000} appear={true}>
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
      </div>
    );
  }
}