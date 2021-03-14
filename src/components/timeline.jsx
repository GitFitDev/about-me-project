import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          <strong>Runding Corporation:</strong> FullStack Web
                          Developer
                          <span> October 2020-Current</span>
                        </h2>
                        <ul>
                          <li>
                            Use React, Node.js, .NET, and SQL to build and
                            maintain features for Disney’s Construction team
                          </li>
                          <li>
                            Assisted in code refactoring to React Hooks from
                            Redux. Reduced amount of code used by 30%
                          </li>
                          <li>
                            Consolidated .NET SQL queries by using LINQ
                            statements to reduce 300 lines of .NET code
                          </li>
                          <li>
                            Recommended and co-implemented Node.js as middleware
                            with team to increase RESTful API payload return
                            speed by 60%
                          </li>
                          <li>
                            Refactored contract application to implement React
                            Redux to reduce 100 lines of local state code
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          <strong>Sacramento County:</strong> Front End Web
                          Developer
                          <span> October 2019-October 2020</span>
                        </h2>
                        <ul>
                          <li>
                            Demonstrated use of Angular 7+, .NET Core, SQL,
                            DOCKER, Azure DevOps CI/CD, KARMA
                          </li>
                          <li>
                            Co-developed new Angular 7+ web applications such as
                            Available Vehicle Application & Customer Service
                            Tracking
                          </li>
                          <li>
                            Led and implemented Docker to integrate testing with
                            Karma and released to Azure DevOps CI/CD
                          </li>
                          <li>
                            Proposed and developed Angular Material Container
                            with Docker to have reusable bootstrapped projects.
                          </li>
                          <li>
                            Formulated and developed SQL queries to filter
                            employees by department to increase RESTful API
                            speed by 30%
                          </li>
                          <li>
                            Presented and translated code during application
                            demo days to department stakeholders
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          <strong>Theraplatform:</strong>Junior Full Stack Web
                          Developer
                          <span> October 2018-October 2019</span>
                        </h2>
                        <ul>
                          <li>
                            Addressed company sells by redesigning company
                            website to use React.js and increased sells by 50%
                          </li>
                          <li>
                            Implemented features following SOLID design
                            principles for 100% of development lifecycle
                          </li>
                          <li>
                            Wrote 100% of Node.js CRUD RESTful APIs to manage
                            company blog posts for speech pathologists
                          </li>
                          <li>
                            Authored 100% of Node.js API tests with Postman to
                            ensure JSON payload was correct
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          <strong>MindRight:</strong> Software Engineer Intern
                          <span> April 2018-October 2019</span>
                        </h2>
                        <ul>
                          <li>
                            Guided, taught, and trained 2 new interns on SCRUM
                            and AGILE methodologies
                          </li>
                          <li>
                            Co-ordinated peer programming 100% for the
                            development of Twilio API integration for Node.js
                            server
                          </li>
                          <li>
                            Reduced Angular HTML inline styling by implementing
                            SASS refactoring by 90%
                          </li>
                          <li>
                            Gave lecture on using NGRX for state management to 3
                            developers on the engineering team
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
