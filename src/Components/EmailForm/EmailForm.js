import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import "./EmailForm.css";

export default class EmailForm extends Component {
  render() {
    return (
      <div id="emailForm">
        <Fade left duration={1000} delay={4000}>
          <div>
            <h3>Enter your information below to send a message.</h3>
          </div>
          <form>
            <div class="container">
              <div class="row">
                <div class="form-group col-5">
                  <label for="exampleInputEmail1">
                    <h5>Your email:</h5>
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="emailInput"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div class="form-group col-5">
                  <label for="exampleInputPassword1">
                    <h5>Message:</h5>
                  </label>
                  <input
                    type="message"
                    class="form-control"
                    id="messageInput"
                    placeholder="Type Message Here"
                  />
                </div>
              </div>
            </div>

            <button type="submit" class="btn btn-dark" id="emailButton">
              <i class="far fa-envelope fa-2x" />{" "}
            </button>
          </form>
        </Fade>
      </div>
    );
  }
}
