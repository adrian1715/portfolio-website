import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { courses } from "../../pages/Certificates";
import { Link } from "react-router-dom";
import { links } from "../../App";

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

  const { items } = links.filter((link) => link.path === "/certificates")[0];

  return (
    <div id="courses" className="row w-100 justify-content-center">
      <h3 id="courses-title" className="fs-2">
        Completed Courses
      </h3>
      <div id="courses-content" className="row justify-content-center">
        {items.map((item) => (
          <motion.div
            animate={{
              height: isShowingList[item[0].toLowerCase() + item.substring(1)]
                ? "auto"
                : "6vh",
            }}
            key={item}
            id={item.toLowerCase()}
            className={`mb-2 mb-md-3 col-md-6 ${
              isShowingList[item[0].toLowerCase() + item.substring(1)]
                ? "border rounded px-0"
                : ""
            }`}
          >
            <div
              id={`${item.toLowerCase()}-head`}
              className={`d-flex justify-content-between align-items-center hover-pointer p-2 p-md-3 ${
                isShowingList[item[0].toLowerCase() + item.substring(1)]
                  ? ""
                  : "border rounded"
              }`}
              onClick={
                item === "Alura"
                  ? toggleAlura
                  : item === "Udemy"
                  ? toggleUdemy
                  : item === "Youtube"
                  ? toggleYoutube
                  : item === "SymfonyCasts"
                  ? toggleSymfonyCasts
                  : () => ""
              }
            >
              <h4 className="fs-3 m-0 d-flex justify-content-between">
                {item}
              </h4>
              <motion.button
                className="btn"
                animate={{
                  rotate: isShowingList[
                    item[0].toLowerCase() + item.substring(1)
                  ]
                    ? 180
                    : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <i className="bi bi-chevron-down"></i>
              </motion.button>
            </div>

            <AnimatePresence>
              {isShowingList[item[0].toLowerCase() + item.substring(1)] && (
                <ul id={`${item.toLowerCase()}-body`}>
                  {courses[item[0].toLowerCase() + item.substring(1)].map(
                    (course, i, array) =>
                      i < 4 ? (
                        <motion.li
                          key={i}
                          initial={{ y: -50, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{
                            y: -50,
                            opacity: 0,
                            transition: { duration: 0.1 },
                          }}
                          transition={{ duration: 0.4 }}
                        >
                          {typeof course === "object"
                            ? `${course.name} - ${course.author}`
                            : course}
                        </motion.li>
                      ) : i === array.length - 1 ? (
                        <motion.li
                          key={i}
                          initial={{ y: -50, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{
                            y: -50,
                            opacity: 0,
                            transition: { duration: 0.1 },
                          }}
                        >
                          <Link to={`/certificates/${item.toLowerCase()}`}>
                            See all
                          </Link>
                        </motion.li>
                      ) : (
                        ""
                      )
                  )}
                </ul>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
