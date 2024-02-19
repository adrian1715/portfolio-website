import React from "react";
import styles from "../../pages/Homepage.module.css";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className={styles.section}
      style={{ paddingTop: "3rem" }}
      //   style={{ justifyContent: "flex-end", paddingBottom: "2rem" }}
    >
      <h2 className="fs-1 mb-3">Portfolio</h2>
      <div
        id="content"
        className="d-flex flex-column justify-content-around"
        // style={{ height: "70vh" }}
      >
        <div className="row justify-content-around mb-lg-4">
          <div className="row col-12 col-lg-5 border rounded p-0 p-lg-4 mb-4 mb-lg-0">
            <div className="m-auto col-5 col-lg-10">
              <img
                src="/images/letrico-project.png"
                className="border rounded col-12 mb-lg-2"
              />
            </div>
            <div className="col-7 col-lg-12 d-flex flex-column justify-content-center">
              <h3 className="fs-2 text-center">Letrico</h3>
              <div className="row justify-content-center">
                <Link className="btn btn-outline-primary col-12 col-lg-5 mb-2 mb-lg-0 me-lg-2">
                  <i className="bi bi-github me-2"></i>Github
                </Link>
                <Link className="btn btn-outline-secondary col-12 col-lg-5 ms-lg-2">
                  <i className="bi bi-wifi me-2"></i>Live Demo
                </Link>
              </div>
            </div>
          </div>
          <div className="row col-12 col-lg-5 border rounded p-0 p-lg-4 mb-4 mb-lg-0">
            <div className="m-auto col-5 col-lg-10">
              <img
                src="/images/simulator-project.png"
                className="border rounded col-12 mb-lg-2"
              />
            </div>
            <div className="col-7 col-lg-12 d-flex flex-column justify-content-center">
              <h3 className="fs-2 text-center">Simulators</h3>
              <div className="row justify-content-center">
                <Link className="btn btn-outline-primary col-12 col-lg-5 mb-2 mb-lg-0 me-lg-2">
                  <i className="bi bi-github me-2"></i>Github
                </Link>
                <Link className="btn btn-outline-secondary col-12 col-lg-5 ms-lg-2">
                  <i className="bi bi-wifi me-2"></i>Live Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <br /> */}
        <div className="row justify-content-around mb-lg-4">
          <div className="row col-12 col-lg-5 border rounded p-0 p-lg-4 mb-4 mb-lg-0">
            <div className="m-auto col-5 col-lg-10">
              <img
                src="/images/timer-project.png"
                className="border rounded col-12 mb-lg-2"
              />
            </div>
            <div className="col-7 col-lg-12 d-flex flex-column justify-content-center">
              <h3 className="fs-2 text-center">Pomodoro Timer</h3>
              <div className="row justify-content-center">
                <Link className="btn btn-outline-primary col-12 col-lg-5 mb-2 mb-lg-0 me-lg-2">
                  <i className="bi bi-github me-2"></i>Github
                </Link>
                <Link className="btn btn-outline-secondary col-12 col-lg-5 ms-lg-2">
                  <i className="bi bi-wifi me-2"></i>Live Demo
                </Link>
              </div>
            </div>
          </div>
          <div className="row col-12 col-lg-5 border rounded p-0 p-lg-4 mb-4 mb-lg-0">
            <div className="m-auto col-5 col-lg-10">
              <img
                src="/images/dp-project.png"
                className="border rounded col-12 mb-lg-2"
              />
            </div>
            <div className="col-7 col-lg-12 d-flex flex-column justify-content-center">
              <h3 className="fs-2 text-center">Website Clones</h3>
              <div className="row justify-content-center">
                <Link className="btn btn-outline-primary col-12 col-lg-5 mb-2 mb-lg-0 me-lg-2">
                  <i className="bi bi-github me-2"></i>Github
                </Link>
                <Link className="btn btn-outline-secondary col-12 col-lg-5 ms-lg-2">
                  <i className="bi bi-wifi me-2"></i>Live Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <Link to="/projects" className="btn btn-success col-11 fs-5">
            See all projects
          </Link>
        </div>
      </div>
    </section>
  );
}
