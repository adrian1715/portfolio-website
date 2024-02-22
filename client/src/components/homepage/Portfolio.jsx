import React from "react";
import styles from "../../pages/Homepage.module.css";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className={styles.section}
      style={{ paddingTop: "3rem" }}
    >
      <h2 id="portfolio-title" className="fs-1 mb-3">
        Portfolio
      </h2>
      <div
        id="portfolio-content"
        className="d-flex flex-column justify-content-around"
      >
        <div className="row justify-content-around mb-lg-4">
          <div className="row col-lg-5 border rounded p-0 p-lg-4 mb-4 mb-lg-0">
            <div className="m-auto col-5 col-lg-10">
              <img
                src="/images/letrico-project.png"
                className="border rounded mb-lg-2 col-12"
              />
            </div>
            <div className="col-7 col-lg-12 d-flex flex-column justify-content-center">
              <h3 className="fs-2 text-center">Letrico</h3>
              <div className="row justify-content-center">
                <Link
                  to="https://github.com/adrian1715/letrico"
                  target="_blank"
                  className="btn btn-outline-primary col-lg-5 mb-2 mb-lg-0 me-lg-2"
                >
                  Github<i className="bi bi-github ms-2"></i>
                </Link>
                <Link
                  to="/projects/letrico"
                  className="btn btn-outline-secondary col-lg-5 ms-lg-2"
                >
                  Live Demo<i className="bi bi-wifi ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="row col-lg-5 border rounded p-0 p-lg-4 mb-4 mb-lg-0">
            <div className="m-auto col-5 col-lg-10">
              <img
                src="/images/simulator-project.png"
                className="border rounded mb-lg-2 col-12"
              />
            </div>
            <div className="col-7 col-lg-12 d-flex flex-column justify-content-center">
              <h3 className="fs-2 text-center">Simulators</h3>
              <div className="row justify-content-center">
                <Link
                  to="https://github.com/adrian1715/simulador-de-sorteio"
                  target="_blank"
                  className="btn btn-outline-primary col-lg-5 mb-2 mb-lg-0 me-lg-2"
                >
                  Github<i className="bi bi-github ms-2"></i>
                </Link>
                <Link
                  to="/projects/simulators"
                  className="btn btn-outline-secondary col-lg-5 ms-lg-2"
                >
                  Live Demo<i className="bi bi-wifi ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <br /> */}
        <div className="row justify-content-around mb-lg-4">
          <div className="row col-lg-5 border rounded p-0 p-lg-4 mb-4 mb-lg-0">
            <div className="m-auto col-5 col-lg-10">
              <img
                src="/images/timer-project.png"
                className="border rounded mb-lg-2 col-12"
              />
            </div>
            <div className="col-7 col-lg-12 d-flex flex-column justify-content-center">
              <h3 className="fs-2 text-center">Pomodoro Timer</h3>
              <div className="row justify-content-center">
                <Link
                  to="https://github.com/adrian1715/pomodoro-timer"
                  target="_blank"
                  className="btn btn-outline-primary col-lg-5 mb-2 mb-lg-0 me-lg-2"
                >
                  Github<i className="bi bi-github ms-2"></i>
                </Link>
                <Link
                  to="/projects/pomodoro-timer"
                  className="btn btn-outline-secondary col-lg-5 ms-lg-2"
                >
                  Live Demo<i className="bi bi-wifi ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="row col-lg-5 border rounded p-0 p-lg-4 mb-4 mb-lg-0">
            <div className="m-auto col-5 col-lg-10">
              <img
                src="/images/dp-project.png"
                className="border rounded mb-lg-2 col-12"
              />
            </div>
            <div className="col-7 col-lg-12 d-flex flex-column justify-content-center">
              <h3 className="fs-2 text-center">Website Clones</h3>
              <div className="row justify-content-center">
                <Link
                  to="https://github.com/adrian1715/recriando-sites"
                  target="_blank"
                  className="btn btn-outline-primary col-lg-5 mb-2 mb-lg-0 me-lg-2"
                >
                  Github<i className="bi bi-github ms-2"></i>
                </Link>
                <Link
                  to="/projects/website-clones"
                  className="btn btn-outline-secondary col-lg-5 ms-lg-2"
                >
                  Live Demo<i className="bi bi-wifi ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <Link
            to="/projects"
            className={`btn btn-success col-lg-11 py-2 ${styles.buttonText}`}
            style={{ letterSpacing: "0.1rem" }}
          >
            See all projects
          </Link>
        </div>
      </div>
    </section>
  );
}
