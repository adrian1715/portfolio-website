import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  const courses = {
    alura: [
      "PHP: conceitos, lidando com dados, loops e mais",
      "Avançando com PHP: Arrays, Strings, Função e Web",
      "Orientação a Objetos com PHP: Classes, métodos e atributos",
      "Avançando com Orientação a Objetos com PHP: Herança, Polimorfismo e Interfaces",
      "PHP: manipulando coleções com Arrays",
      "PHP Exception: tratamento de erros",
      "PHP Composer: Dependências, Autoload e Publicação",
      "PHP e PDO: trabalhando ocm banco de dados",
      "SQL com MySQL: manipule e consulte dados",
      "DoctrineORM: acesse o banco com Mapeamento Objeto-Relacional",
      "Consultas SQL: avançando no SQL com MySQL",
      "Expressões Regulares: capturando textos de forma mágica",
      "HTTP: Entendendo a web por baixo dos panos",
      "PHP e MySQL: Criando uma webapp",
      "PHP Strings: Operações e expressões regulares",
      "PHP I/O: trabalhando com arquivos e streams",
      "jQuery: domine a biblioteca mais popular do mercado parte 1",
      "jQuery: avance na biblioteca mais popular do mercado parte 2",
      "Hábitos: da produtividade às metas pessoas",
      "Linux Onboarding: usando a CLI de uma forma rápida e prática",
      "Foco: trazendo mais resultados para o dia a dia",
    ],
    youtube: [
      { name: "HTML e CSS para iniciantes", author: "RB Tech" },
      { name: "Banco de Dados MySQL", author: "Curso em Vídeo" },
    ],
    udemy: [
      { name: "Introdução ao Inbound Marketing", author: "RD University" },
      {
        name: "Aprenda Linguagem C - Fundamentos para a Lógica de Programação",
        author: "One Day code",
      },
      {
        name: "HTML5: Primeiros passos na carreira de Desenvolvedor",
        author: "Marnei Cardoso",
      },
      { name: "Introdução à Linguagem HTML", author: "Diego Mariano" },
      { name: "Web Design for Web Developers", author: "Jonas Schmedtmann" },
      {
        name: "Introdução ao Inbound Marketing",
        author: "Daniel Tapias Morales, serfrontend Cursos",
      },
      { name: "Web Development Bootcamp", author: "Colt Steele" },
      { name: "React The Complete Guide", author: "Maximilan Schwarzmüller" },
    ],
    symfonyCasts: [
      "Symfony: Level 1",
      "Symfony: Level 2",
      "Symfony: Level 3",
      "Symfony: Level 4",
      "Symfony: Best Practices",
      "Fixtures with Alice",
      "PhpStorm",
    ],
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
                          {i < 5 ? <b>{course}</b> : <a href="#">See all</a>}
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
                            <a href="#">See all</a>
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
                          {i < 5 ? <b>{course}</b> : <a href="#">See all</a>}
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
