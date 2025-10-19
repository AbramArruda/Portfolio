import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Flash from "react-reveal/Flash";
import Footer from "../../Components/Footer";
import "./Contact.css";
// import EmailForm from "../../Components/EmailForm";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Fade left className="slow">
          <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <section>
                <div class="container" id="contactWrapper">
                  <div>
                    <div class="jumbotron jumbotron-fluid">
                      <h1 id="emailContact">
                        You can reach me via email at:{" "}
                        <Flash duration={2700} delay={1200}>
                          <a href="mailto:abramarruda@gmail.com" id="emailLink">
                            abramarruda@gmail.com
                          </a>{" "}
                        </Flash>
                      </h1>
                    </div>
                    <div class="jumbotron jumbotron-fluid">
                      <h1 id="socialLinks">
                        I am also on{" "}
                        <Flash duration={2700} delay={1200}>
                          <a
                            href="https://github.com/AbramArruda"
                            target="_blank"
                            id="githubLink"
                          >
                            github
                          </a>
                        </Flash>{" "}
                        and{" "}
                        <Flash duration={2700} delay={1200}>
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
                    <div class="jumbotron jumbotron-fluid">
                      <h3 id="emailContact2">
                        This portfolio was created using React.js
                      </h3>
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
