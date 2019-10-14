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
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          <strong>Theraplatform:</strong> ​FrontEnd Engineer
                          Contractor <span>April 2019-September 2019</span>
                        </h2>
                        <p>
                          <ul>
                            <li>
                              Used JIRA to collaborate on tickets and attend
                              daily standups
                            </li>
                            <li>
                              Passed Code reviews for submitted tickets on
                              Github
                            </li>
                            <li>
                              Developed multiple components with React to assist
                              in project efficiency
                            </li>
                            <li>
                              Designed HTML and CSS wireframes for landing pages
                            </li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          <strong>MindRight:</strong> Junior Software Engineer
                          <span>October 2017-April 2019</span>
                        </h2>
                        <p>
                          <ul>
                            <li>
                              Supported software engineering projects in Agile
                              work environment
                            </li>
                            <li>
                              Used development tools such as Visual Studio Code,
                              GitHub, SourceTree, Chrome Dev Tools, and JIRA.
                            </li>
                            <li>
                              Collaborated on all stages of systems development
                              life-cycle, from requirements gathering to
                              production releases.
                            </li>
                            <li>
                              Developed landing pages, dashboards, and online
                              applications using Angular 2+, JavaScript,
                              MongoDB, Node.JS, and Express
                            </li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          <strong>Starbucks:</strong> Shift Supervisor
                          <span>October 2016-December2017</span>
                        </h2>
                        <p>
                          <ul>
                            <li>
                              Assessed job applications and made hiring
                              recommendations to bring in top candidates for key
                              vacancies.
                            </li>
                            <li>
                              Recruited, interviewed, and hired individuals
                              which would add value to teams while bringing a
                              wealth of experience.
                            </li>
                            <li>
                              Helped with planning schedules and delegating
                              assigning to meet coverage and service demands.
                            </li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
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
