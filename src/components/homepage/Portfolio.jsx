import React from "react";
import styles from "../../pages/Homepage.module.css";
import { Link } from "react-router-dom";
import { toLinkFormatter } from "../../utils/toLinkFormatter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Portfolio() {
  const projects = [
    {
      name: "desempregados.com",
      website: "https://desempregados-com.onrender.com",
      description:
        "A full-stack job platform connecting job seekers and companies in the Brazilian market.",
    },
    {
      name: "Producer",
      github: "producer-extension",
      image: "producer-project.jpeg",
      chromeStore:
        "https://chromewebstore.google.com/detail/producer-focus-extension/ljihbhechnhegaokmpkhmeonhmlmiijk",
      description:
        "A Chrome extension that blocks distracting sites during focus sessions using reusable blocking modes.",
    },
    {
      name: "Website Clones",
      description:
        "Pixel-faithful frontend recreations of the Disney+ and Spotify landing pages.",
    },
    {
      name: "Letrico",
      description:
        "A Wordle-inspired word-guessing game in Portuguese, built with vanilla JavaScript.",
    },
    {
      name: "Simulators",
      description:
        "A draw and match simulator for the World Cup and South American club tournaments.",
    },
    {
      name: "Pomodoro Timer",
      description:
        "A simple timer app for managing focused work sessions using the Pomodoro technique.",
    },
  ];

  return (
    <section id="portfolio" className={styles.section}>
      <div id="portfolio-header" className={styles.sectionHeader}>
        <h2 id="portfolio-title" className="fs-1">
          Portfolio
        </h2>
        <p id="portfolio-subtitle">What I've been working on</p>
      </div>

      <div className="row position-relative">
        <div className="col-9 mx-auto px-0">
          <div id="portfolioContent" className="carousel slide">
            <div className="carousel-inner">
              {projects.map((proj, i) => (
                <div
                  key={i}
                  className={`carousel-item ${i === 0 ? "active" : ""}`}
                >
                  <div className="border rounded">
                    <img
                      src={`/images/${
                        proj.image
                          ? proj.image
                          : `${toLinkFormatter(proj.name)}-project.png`
                      }`}
                      className="border rounded w-100 mb-4"
                    />
                    <div>
                      <h3 className="fs-2 text-center">{proj.name}</h3>
                      <p className="text-center px-4">{proj.description}</p>
                      <div className="row justify-content-center mb-4">
                        <a
                          href={`https://github.com/adrian1715/${
                            proj.github
                              ? proj.github
                              : proj.name === "Letrico"
                                ? "letrico"
                                : proj.name === "Simulators"
                                  ? "simulador-de-sorteio"
                                  : proj.name === "Pomodoro Timer"
                                    ? "pomodoro-timer"
                                    : proj.name === "Website Clones"
                                      ? "recriando-sites"
                                      : proj.name
                          }`}
                          target="_blank"
                          className="btn btn-outline-primary col-11 col-lg-5 mb-2 mb-lg-0 me-lg-2"
                        >
                          Github<i className="bi bi-github ms-2"></i>
                        </a>
                        <a
                          href={
                            proj.chromeStore
                              ? proj.chromeStore
                              : proj.website
                                ? proj.website
                                : `/projects/${toLinkFormatter(proj.name)}`
                          }
                          target="__blank"
                          className="btn btn-outline-secondary col-11 col-lg-5 ms-lg-2"
                        >
                          {proj.chromeStore ? (
                            <>
                              Chrome Store<i className="bi bi-google ms-2"></i>
                            </>
                          ) : (
                            <>
                              Live Demo<i className="bi bi-wifi ms-2"></i>
                            </>
                          )}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Link
            to="/projects"
            className="btn btn-success w-100 d-flex justify-content-center"
            style={{ fontSize: "1.5rem", letterSpacing: "0.1rem" }}
          >
            See all projects
          </Link>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#portfolioContent"
          data-bs-slide="prev"
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{ color: "var(--bs-body-color)", fontSize: "1rem" }}
          />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#portfolioContent"
          data-bs-slide="next"
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            style={{ color: "var(--bs-body-color)", fontSize: "1rem" }}
          />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
