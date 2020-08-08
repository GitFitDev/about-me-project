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
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          <strong>Sacramento County:</strong> FullStack Web Developer Contractor
                          <span> October 2019-Current</span>
                        </h2>
                          <ul>
                            <li>
                              Developed 5 Intranet Applications with Angular Client from planning phase to 
                              product delivery to client. 
                            </li>
                            <li>
                            Harnessed Angular Material Design Package to Create and Deliver Beautiful UI/UX for in House Applications
                            </li>
                            <li>
                            Handled Angular 8 + 9 SPA by using RestfulAPI, Components, Design Packages, & Lifecycle hooks.
                            </li>
                            <li>
                            Maintained and Created APIs in ASP.Net backend for Angular Client Front End
                            </li>
                            <li>Created the Angular Client Architecture Outline for Newly Developed Applications</li>
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
                          <strong>Theraplatform:</strong> ​FrontEnd Engineer
                          Contractor <span> March 2019-September 2019</span>
                        </h2>
                          <ul>
                            <li>
                            Collaborated with engineering team for daily standups and biweekly sprint cycles.
                            </li>
                            <li>
                            Maintained and updated all HTML and CSS files for React.js on company site.
                            </li>
                            <li>
                              Developed multiple components with React to assist
                              in project efficiency.
                            </li>
                            <li>Designed HTML and CSS wireframes for landing pages</li>
                            <li>Managed .Net Server on the backend</li>
                            <li>Handled Angular 5 Web Application data by using Typescript in component lifecycle</li>
                            <li>Implemented Stripe Api in Angular 5 typescript components</li>
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
                          <strong>MindRight:</strong> Junior Software Engineer Intern to Hire
                          <span> October 2017-March 2019</span>
                        </h2>
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
                            <li>Intern hired on as Junior Software Engineer</li>
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
