import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft">
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Me</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        My name is Courtney Revada and I am a developer with
                        humble beginnings from foster care to now full-time web
                        developer professional. I’m working towards making a
                        positive mark on the world by building applications that
                        people need. I believe that anyone can learn to code as
                        long as they are willing and desire to. My mantra is
                        "One line of code today == the change I will create
                        tomorrow." Happy Coding!
                      </p>
                      <p>
                        The question I get the most is: What motivates you to do
                        what you do? The answer to that does not only drive me
                        to succeed in my career but in life as well. Growing up
                        in the foster care system there was no role model to
                        define what success looks like for me. As a working
                        professional, I want to be that role model for all the
                        foster youth and young children following after me. By
                        working hard I can represent possibility; the idea that
                        you can do and be anything regardless of the stigma
                        surrounding your background.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some things I do</h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-display2" />
                  </span>
                  <div className="desc">
                    <h3>Web Development</h3>
                    <p className="left">
                      <strong>FrontEnd:</strong> Angular, JavaScript, React.js,
                      Bootstrap, HTML5, CSS, Material Design, WordPress, JQuery,
                      Chart.js <br />
                      <strong>BackEnd:</strong> Node.js, Express.js, MongoDB,
                      SQL, C#, ASP.Net
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-git" />
                  </span>
                  <div className="desc">
                    <h3>Services, Tools, and Git</h3>
                    <p className="left">
                      <strong>Analytics:</strong> Amazon Web Services, Google
                      Cloud Platform, Google Analytics, Firebase <br />
                      <strong>Task Manager:</strong> Jira, Confluence, Trello,
                      Azure DevOps <br />
                      <strong>Git Control:</strong> Github, Bitbucket,
                      Sourcetree
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-user2" />
                  </span>
                  <div className="desc">
                    <h3>Culture Fit</h3>
                    <p className="left">
                      <strong>Soft Skills:</strong> Good Communication,
                      Self-Motivated, Problem Solver, Charismatic, Adaptable,
                      Fast Learner, Optimistic
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
