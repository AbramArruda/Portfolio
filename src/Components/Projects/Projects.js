import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import Project1 from "../../images/photo1.jpeg";
import Project2 from "../../images/photo2.jpeg";
import Project3 from "../../images/photo3.jpeg";
import Project4 from "../../images/photo4.jpeg";
import Project5 from "../../images/photo5.jpeg";
import Project6 from "../../images/photo6.jpeg";
import "./Projects.css";

export default class Projects extends Component {
  render() {
    return (
      <Fade duration={5000}>
        <Fade bottom duration={2000}>
          <div class="container">
            <div class="row no-gutters">
              <div class="col-lg-6">
                <a
                  class="portfolio-item"
                  href="https://danielpruitt.github.io/Moodify/"
                  target="blank_"
                >
                  <span class="caption">
                    <span class="caption-content">
                      <p class="mb-0">
                        The application reads your emotion based off of a
                        picture and gives you a playlist parallelling to that
                        emotion.
                      </p>
                    </span>
                  </span>
                  <img class="img-fluid" src={Project1} alt="Psychic Game" />
                </a>
              </div>
              <div class="col-lg-6">
                <a
                  class="portfolio-item"
                  href="https://github.com/ahlev/FinalGroupProject"
                  target="blank_"
                >
                  <span class="caption">
                    <span class="caption-content">
                      <p class="mb-0">
                        Sound Up is an application that gives the people the
                        control of the music at a social event with a voting
                        system.
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
              <div class="col-lg-6">
                <a
                  class="portfolio-item"
                  href="https://www.google.com"
                  target="blank_"
                >
                  <span class="caption">
                    <span class="caption-content">
                      <p class="mb-0">
                        Basic Trivia game. You will have 120 seconds to answer
                        all questions correctly!
                      </p>
                    </span>
                  </span>
                  <img class="img-fluid" src={Project6} alt="Trivia" />
                </a>
              </div>
              <div class="col-lg-6">
                <a
                  class="portfolio-item"
                  href="https://www.google.com"
                  target="blank_"
                >
                  <span class="caption">
                    <span class="caption-content">
                      <p class="mb-0">
                        A dynamic web page that populates with your favorite
                        Movie Star gifs with click to start feature!
                      </p>
                    </span>
                  </span>
                  <img class="img-fluid" src={Project5} alt="GifTastic" />
                </a>
              </div>
              <div class="col-lg-6">
                <a
                  class="portfolio-item"
                  href="https://www.google.com"
                  target="blank_"
                >
                  <span class="caption">
                    <span class="caption-content">
                      <p class="mb-0">
                        This is a Firebase backed train schedule application. It
                        uses HTML, CSS and jQuery to render the schedule!
                      </p>
                    </span>
                  </span>
                  <img class="img-fluid" src={Project3} alt="TrainScheduler" />
                </a>
              </div>
              <div class="col-lg-6">
                <a
                  class="portfolio-item"
                  href="https://www.google.com"
                  target="blank_"
                >
                  <span class="caption">
                    <span class="caption-content">
                      <p class="mb-0">
                        An App designed to provide 5 Star Moments for out of
                        town travelers! Check the events and nearby restaurants
                        in your city!
                      </p>
                    </span>
                  </span>
                  <img class="img-fluid" src={Project4} alt="TeamProject" />
                </a>
              </div>
            </div>
          </div>
        </Fade>
      </Fade>
    );
  }
}
