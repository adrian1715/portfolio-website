import React from "react";
import styles from "../../pages/Homepage.module.css";
import { motion } from "framer-motion";
import DownloadCV from "../DownloadCV";

export default function Home() {
  return (
    <main>
      <section id="home" className={styles.section}>
        <div className="row justify-content-around">
          <img
            src="/images/me.jpg"
            id="home-profile-image"
            className="rounded-circle col-11 col-sm-auto col-lg-5 col-xl-auto mb-3 mb-lg-0"
            style={{ maxHeight: "30rem" }}
          />
          <div className="row col-10 col-lg-6 d-flex justify-content-between">
            <div id="home-text" className="text-lg-cente col-10 my-auto">
              <p id="home-welcome-message" className="m-0">
                Welcome, I am
              </p>
              <h1 id="home-title">Adrian Lobato</h1>
              <h2 id="home-subtitle" className="mb-lg-4">
                Full-Stack Developer
              </h2>
              <p className="mb-lg-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                saepe sapiente magnam reprehenderit labore odio nihil quis
                consequatur. Rerum ducimus voluptatem mollitia fuga expedita at
                nesciunt dolore, exercitationem excepturi et?
              </p>
              <div className="w-100 row">
                <div className="col-12 col-lg-6 mb-1 mb-lg-0">
                  <a href="#contact">
                    <button className="btn btn-primary w-100">
                      Get in touch <i className="bi bi-send-fill ms-2"></i>
                    </button>
                  </a>
                </div>
                <div className="col-12 col-lg-6">
                  <DownloadCV className="btn btn-secondary w-100" />
                </div>
              </div>
            </div>

            <ul
              id="socials"
              className="list-unstyled d-flex flex-column justify-content-center align-items-end col-1 pe-0"
            >
              <motion.li
                className="mb-1"
                style={{ width: "fit-content" }}
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0.75, scale: 1.1 }}
              >
                <a
                  href="https://www.linkedin.com/in/adrian-lobato/"
                  target="_blank"
                  style={{ color: "inherit" }}
                >
                  <i className={`bi bi-linkedin fs-1`}></i>
                </a>
              </motion.li>
              <motion.li
                className="mb-1"
                style={{ width: "fit-content" }}
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0.75, scale: 1.1 }}
              >
                <a
                  href="https://github.com/adrian1715"
                  target="_blank"
                  style={{ color: "inherit" }}
                >
                  <i className={`bi bi-github fs-1`}></i>
                </a>
              </motion.li>
              <motion.li
                className="mb-1"
                style={{ width: "fit-content" }}
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0.75, scale: 1.1 }}
              >
                <a href="" target="_blank" style={{ color: "inherit" }}>
                  <i className={`bi bi-envelope-fill fs-1`}></i>
                </a>
              </motion.li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
