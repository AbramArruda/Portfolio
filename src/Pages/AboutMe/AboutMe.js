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
                  Always learning.{" "}
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
                  Application developer in Georgia.  
                  
                </p>
              </Fade>
            </div>
          </div>
          <div class="row about-row" id="aboutMeSkills">
            
            <div class="col-sm-12 col-lg-6">
              <div class="row" id="skillsWrapper">
                
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
                    <h3 id="degree"> Bachelor's of Science , Major in Biology </h3>
                    <Fade bottom cascade delay={2000}>
                      <ul>
                       
                        <li>University of West Georgia</li>
                        <li> 
                  <a
                    target="blank_"
                    href="https://www.westga.edu/academics/program_page.php?program_id=28"
                    id="courseContent"
                  >
                    {" "}
                    Degree curriculum {" "}
                  </a></li> 
                        
                      </ul>
                    </Fade>
                  </div>
                  <div class="col-5 no-padding">
                    <h3 id="certificate"> Full Stack Web Development Certification </h3>
                    <Fade bottom cascade delay={2000} appear={true}>
                      <ul>
                      
                        <li>Georiga Institute of Technology</li>
                        <li> 
                  <a
                    target="blank_"
                    href="https://bootcamp.pe.gatech.edu/coding/curriculum/"
                    id="courseContent"
                  >
                    {" "}
                    Certifcation curriculum{" "}
                  </a></li>
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
