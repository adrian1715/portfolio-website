import React, { useState } from "react";
import styles from "../../pages/Homepage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faServer, faC } from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faBootstrap,
  faNodeJs,
  faNode,
  faPhp,
  faGit,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { AnimatePresence, motion } from "framer-motion";

export default function Skills() {
  const [isShowingList, setIsShowingList] = useState({
    frontend: false,
    backend: false,
    others: false,
  });

  const toggleFrontend = () =>
    setIsShowingList((prevState) => ({
      ...prevState,
      frontend: !prevState.frontend,
      backend: false,
      others: false,
    }));

  const toggleBackend = () =>
    setIsShowingList((prevState) => ({
      ...prevState,
      backend: !prevState.backend,
      frontend: false,
      others: false,
    }));

  const toggleOthers = () =>
    setIsShowingList((prevState) => ({
      ...prevState,
      others: !prevState.others,
      frontend: false,
      backend: false,
    }));

  return (
    <section id="skills" className={styles.section}>
      <h2 className="fs-1 mb-5">Skills and Technologies</h2>

      <div className="row w-100 justify-content-center">
        <div
          id="frontend"
          className="col-12 col-lg-4 text-center"
          // style={{ height: "15rem" }}
        >
          <h3>
            <i className="bi bi-window-fullscreen me-2"></i>
            Front-End
            <motion.button
              className="btn"
              // whileHover={{ scale: 1.4, transition: { duration: 0.1 } }}
              animate={{ rotate: isShowingList.frontend ? 180 : 0 }}
              transition={{ duration: 0.4 }}
              onClick={toggleFrontend}
            >
              <motion.i className="bi bi-chevron-down hover-pointer"></motion.i>
            </motion.button>
          </h3>
          <AnimatePresence>
            {isShowingList.frontend && (
              <motion.ul
                className="text-start"
                style={{ paddingLeft: "8rem" }}
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 25, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <li>
                  <FontAwesomeIcon icon={faHtml5} color="#e34c26" /> HTML
                </li>
                <li>
                  <FontAwesomeIcon icon={faCss3Alt} color="#264de4" /> CSS
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faJs}
                    style={{ color: "#f0db4f", background: "#323330" }}
                  />{" "}
                  JavaScript
                </li>
                <li>
                  <FontAwesomeIcon icon={faReact} color="#61DBFB" /> React JS
                </li>
                <li>
                  <FontAwesomeIcon icon={faBootstrap} color="#5468ff" />{" "}
                  Bootstrap
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    id="tailwind-css"
                  >
                    <path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"></path>
                  </svg>
                  Tailwind
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
        <div id="backend" className="col-12 col-lg-4 text-center">
          <h3>
            <i className="bi bi-hdd-stack me-2"></i>
            Back-End
            <motion.button
              className="btn"
              animate={{ rotate: isShowingList.backend ? 180 : 0 }}
              transition={{ duration: 0.4 }}
              onClick={toggleBackend}
            >
              <i className="bi bi-chevron-down hover-pointer"></i>
            </motion.button>
          </h3>
          <AnimatePresence>
            {isShowingList.backend && (
              <motion.ul
                className="text-start"
                style={{ paddingLeft: "8rem" }}
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 25, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <li>
                  <FontAwesomeIcon icon={faNode} /> Node JS
                </li>
                <li>
                  <FontAwesomeIcon icon={faNodeJs} /> Express JS
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhp} /> PHP
                </li>
                <li>
                  <FontAwesomeIcon icon={faDatabase} /> MySQL
                </li>
                <li>
                  <FontAwesomeIcon icon={faServer} /> MongoDB
                </li>
                <li>
                  <FontAwesomeIcon icon={faC} /> Basic C/C++
                </li>
                <li>
                  <FontAwesomeIcon icon={faGithub} /> Git/Github
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
        <div id="others" className="col-12 col-lg-4 text-center">
          <h3>
            <i className="bi bi-three-dots"></i> Others
            <motion.button
              className="btn"
              animate={{ rotate: isShowingList.others ? 180 : 0 }}
              transition={{ duration: 0.4 }}
              onClick={toggleOthers}
            >
              <i className="bi bi-chevron-down hover-pointer"></i>
            </motion.button>
          </h3>
          <AnimatePresence>
            {isShowingList.others && (
              <motion.ul
                className="text-start"
                // style={{ paddingLeft: "8rem" }}
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 25, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <li>
                  Basic marketing, entrepreneurship and economics knowledge
                </li>
                <li>Microsoft Office Pack (Word, Excel and PowerPoint)</li>
                <li>Google Drive, Docs, Sheets, etc</li>
                <li>Fluent English and Portuguese</li>
                <li>One year New Zealand exchange experience</li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
