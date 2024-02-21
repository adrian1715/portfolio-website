import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { courses } from "../../pages/Certificates";
import { Link } from "react-router-dom";

export default function Certificates({ isShowingList, setIsShowingList }) {
  const toggleAlura = () => {
    setIsShowingList((prevState) => ({
      ...prevState,
      alura: !prevState.alura,
      youtube: false,
      udemy: false,
      symfonyCasts: false,
      frontend: false,
      backend: false,
      others: false,
    }));
  };

  const toggleYoutube = () => {
    setIsShowingList((prevState) => ({
      ...prevState,
      youtube: !prevState.youtube,
      alura: false,
      udemy: false,
      symfonyCasts: false,
      frontend: false,
      backend: false,
      others: false,
    }));
  };

  const toggleUdemy = () => {
    setIsShowingList((prevState) => ({
      ...prevState,
      udemy: !prevState.udemy,
      alura: false,
      youtube: false,
      symfonyCasts: false,
      frontend: false,
      backend: false,
      others: false,
    }));
  };

  const toggleSymfonyCasts = () => {
    setIsShowingList((prevState) => ({
      ...prevState,
      symfonyCasts: !prevState.symfonyCasts,
      alura: false,
      udemy: false,
      youtube: false,
      frontend: false,
      backend: false,
      others: false,
    }));
  };

  return (
    <div
      id="certificates"
      className="row w-100 justify-content-center"
      // style={{ height: "30vh" }}
    >
      <h3 className="fs-2">Completed Courses</h3>
      <div className="row justify-content-center p-0">
        <div className="row justify-content-around">
          <div
            id="alura"
            className={`mb-2 mb-md-3 col-12 col-md-6 ${
              isShowingList.alura ? "border rounded p-0" : ""
            }`}
          >
            <div
              className={`d-flex justify-content-between align-items-center hover-pointer p-2 p-md-3 ${
                isShowingList.alura ? "" : "border rounded"
              }`}
              onClick={toggleAlura}
            >
              <h4 className="fs-3 m-0 d-flex justify-content-between">Alura</h4>
              <motion.button
                className="btn"
                animate={{ rotate: isShowingList.alura ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <i className="bi bi-chevron-down"></i>
              </motion.button>
            </div>
            <AnimatePresence>
              {isShowingList.alura && (
                <ul>
                  {courses.alura.map(
                    (course, i) =>
                      i <= 5 && (
                        <motion.li
                          key={i}
                          initial={{ y: -25, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{
                            y: -25,
                            opacity: 0,
                            transition: { duration: 0.1 },
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {i < 5 ? (
                            <b>{course}</b>
                          ) : (
                            <Link to="/certificates">See all</Link>
                          )}
                        </motion.li>
                      )
                  )}
                </ul>
              )}
            </AnimatePresence>
          </div>
          <div
            id="youtube"
            className={`mb-2 mb-md-3 col-12 col-md-6 ${
              isShowingList.youtube ? "border rounded p-0" : ""
            }`}
          >
            <div
              className={`d-flex justify-content-between align-items-center hover-pointer p-2 p-md-3 ${
                isShowingList.youtube ? "" : "border rounded"
              }`}
              onClick={toggleYoutube}
            >
              <h4 className="fs-3 m-0 d-flex justify-content-between">
                Youtube
              </h4>
              <motion.button
                className="btn"
                animate={{ rotate: isShowingList.youtube ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <i className="bi bi-chevron-down"></i>
              </motion.button>
            </div>
            <AnimatePresence>
              {isShowingList.youtube && (
                <ul>
                  {courses.youtube.map((course, i) => (
                    <motion.li
                      key={i}
                      initial={{ y: -25, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{
                        y: -25,
                        opacity: 0,
                        transition: { duration: 0.1 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <b>{course.name}</b> - {course.author}
                    </motion.li>
                  ))}
                </ul>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="row justify-content-around">
          <div
            id="udemy"
            className={`mb-2 mb-md-3 col-12 col-md-6 ${
              isShowingList.udemy ? "border rounded p-0" : ""
            }`}
          >
            <div
              className={`d-flex justify-content-between align-items-center hover-pointer p-2 p-md-3 ${
                isShowingList.udemy ? "" : "border rounded"
              }`}
              onClick={toggleUdemy}
            >
              <h4 className="fs-3 m-0 d-flex justify-content-between">Udemy</h4>
              <motion.button
                className="btn"
                animate={{ rotate: isShowingList.udemy ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <i className="bi bi-chevron-down"></i>
              </motion.button>
            </div>
            <AnimatePresence>
              {isShowingList.udemy && (
                <ul>
                  {courses.udemy.map(
                    (course, i) =>
                      i <= 5 && (
                        <motion.li
                          key={i}
                          initial={{ y: -25, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{
                            y: -25,
                            opacity: 0,
                            transition: { duration: 0.1 },
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {i < 5 ? (
                            <>
                              <b>{course.name}</b> - {course.author}
                            </>
                          ) : (
                            <Link to="/certificates">See all</Link>
                          )}
                        </motion.li>
                      )
                  )}
                </ul>
              )}
            </AnimatePresence>
          </div>
          <div
            id="symfony-casts"
            className={`mb-2 mb-md-3 col-12 col-md-6 ${
              isShowingList.symfonyCasts ? "border rounded p-0" : ""
            }`}
          >
            <div
              className={`d-flex justify-content-between align-items-center hover-pointer p-2 p-md-3 ${
                isShowingList.symfonyCasts ? "" : "border rounded"
              }`}
              onClick={toggleSymfonyCasts}
            >
              <h4 className="fs-3 m-0 d-flex justify-content-between">
                SymfonyCasts
              </h4>
              <motion.button
                className="btn"
                animate={{ rotate: isShowingList.symfonyCasts ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <i className="bi bi-chevron-down"></i>
              </motion.button>
            </div>
            <AnimatePresence>
              {isShowingList.symfonyCasts && (
                <ul>
                  {courses.symfonyCasts.map(
                    (course, i) =>
                      i <= 5 && (
                        <motion.li
                          key={i}
                          initial={{ y: -25, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{
                            y: -25,
                            opacity: 0,
                            transition: { duration: 0.1 },
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {i < 5 ? (
                            <b>{course}</b>
                          ) : (
                            <Link to="/certificates">See all</Link>
                          )}
                        </motion.li>
                      )
                  )}
                </ul>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
