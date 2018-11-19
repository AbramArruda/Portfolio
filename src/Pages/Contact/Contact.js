import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Flash from "react-reveal/Flash";
import Footer from "../../Components/Footer";
import "./Contact.css";
// import EmailForm from "../../Components/EmailForm/EmailForm";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Fade left className="slow">
          <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <section>
                <div class="container">
                  <div>
                    <div class="jumbotron jumbotron-fluid">
                      <h1 id="emailContact">
                        You can reach me via email at:{" "}
                        <Flash duration={2000} delay={1000}>
                          <a href="mailto:abram1191@gmail.com" id="emailLink">
                            abram1191@gmail.com
                          </a>{" "}
                        </Flash>
                      </h1>
                    </div>
                    <div class="jumbotron jumbotron-fluid">
                      <h1 id="socialLinks">
                        I am also on:{" "}
                        <Flash duration={2000} delay={1000}>
                          <a
                            href="https://github.com/AbramArruda"
                            target="_blank"
                            id="githubLink"
                          >
                            github
                          </a>
                        </Flash>{" "}
                        and{" "}
                        <Flash duration={2000} delay={1000}>
                          <a
                            href="https://www.linkedin.com/in/abramarruda/"
                            target="_blank"
                            id="linkedInLink"
                          >
                            linkedin
                          </a>
                        </Flash>
                      </h1>
                    </div>
                  </div>

                  {/* <EmailForm /> */}
                </div>
              </section>
            </div>
          </div>
        </Fade>
        <Footer />
      </div>
    );
  }
}
