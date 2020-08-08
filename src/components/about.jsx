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
                        My name is Courtney Revada and I am a self-taught
                        developer who graduated from Pacific University with a
                        degree in Health and Nutrition. Being in the technology
                        industry has shown me that you can have a lot of freedom
                        in the workplace as well as outside of it. There are no
                        limitations on what you can do. Does not matter on what
                        school, background, or where you are located. You are a
                        developer and the only thing you need to do is believe
                        in yourself and get started. Just open up your device
                        and begin!
                      </p>
                      <p>
                        The question I get the most is why do I love the tech field?
                        The technology industry allows for me to develop software solutions to
                         modern day problems. From civic problems that focus on a cause to daily 
                        problems in my personal life. Software gives me the ability to bring my
                        imagination to life every single day. The question I would ask is: why not 
                        be a part of the technology industry?
                        {" "}
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
                data-animate-effect="fadeInLeft"
              >
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
                      <strong>FrontEnd:</strong> Angular, JavaScript,
                      React.js, Bootstrap, HTML5, CSS, Material Design,
                      WordPress, JQuery, Chart.js <br />
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
