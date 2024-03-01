import React, { useState } from "react";
import styles from "../../pages/Homepage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faSchool } from "@fortawesome/free-solid-svg-icons";

export default function Experience() {
  const [xpType, setXpType] = useState("education");

  return (
    <section id="experience" className={styles.section}>
      <div id="experience-header" className={styles.sectionHeader}>
        <h2 id="experience-title" className="fs-1">
          Experience
        </h2>
        <p id="experience-subtitle">My personal and professional journey</p>
      </div>
      <div id="experience-content" className="w-100">
        <div id="experience-head" className="row justify-content-center mb-4">
          <a
            className={`fs-2 col-auto hover-pointer text-decoration-none px-sm-4 ${
              xpType === "education" ? "nav-link active" : "text-secondary"
            } ${styles.xpHeadItem}`}
            onClick={() => setXpType("education")}
          >
            <i className="bi bi-mortarboard-fill me-2"></i>
            Education
          </a>
          <a
            className={`fs-2 col-auto hover-pointer text-decoration-none px-sm-4 ${
              xpType === "work" ? "nav-link active" : "text-secondary"
            } ${styles.xpHeadItem}`}
            onClick={() => setXpType("work")}
          >
            <i className="bi bi-briefcase-fill me-2"></i>
            Work
          </a>
        </div>
        <div
          id="experience-body"
          className="d-flex flex-column align-items-center"
        >
          {xpType === "education" && (
            <>
              <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6 mb-4 border rounded p-3">
                <h3>Gestão da Teconologia da Informação</h3>
                <div className="row justify-content-between">
                  <span className="col-12 col-md-auto">
                    <FontAwesomeIcon icon={faSchool} className="me-2" />
                    Anhembi Morumbi
                  </span>
                  <span className="col-12 col-md-auto">
                    <i className="bi bi-calendar-week-fill d-inline-block me-2 text-center"></i>
                    2022 - 2024
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6 mb-4 border rounded p-3">
                <h3>Empreendedorismo e Economia</h3>
                <div className="row justify-content-between">
                  <span className="col-12 col-md-auto">
                    <FontAwesomeIcon icon={faSchool} className="me-2" />
                    Albany Senior High School
                  </span>
                  <span className="col-12 col-md-auto">
                    <i className="bi bi-calendar-week-fill d-inline-block me-2 text-center"></i>
                    2019
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6 mb-4 border rounded p-3">
                <h3>Ensino Médio e Técnico em Informática</h3>
                <div className="row justify-content-between">
                  <span className="col-12 col-md-auto">
                    <FontAwesomeIcon icon={faSchool} className="me-2" />
                    CTI - Colégio Técnico Industrial "Prof. Isaac Portal Roldán
                  </span>
                  <span className="col-12 col-md-auto">
                    <i className="bi bi-calendar-week-fill d-inline-block me-2 text-center"></i>
                    2018
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6 mb-4 border rounded p-3">
                <h3>Ensino Fundamental e Ensino Médio</h3>
                <div className="row justify-content-between">
                  <span className="col-12 col-md-auto">
                    <FontAwesomeIcon icon={faSchool} className="me-2" />
                    Colégio São José e Anglo Bauru
                  </span>
                  <span className="col-12 col-md-auto">
                    <i className="bi bi-calendar-week-fill d-inline-block me-2 text-center"></i>
                    2017 e 2020, respectivamente
                  </span>
                </div>
              </div>
            </>
          )}
          {xpType === "work" && (
            <>
              <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6 mb-4 border rounded p-3">
                <h3>Estágio em Desenvolvimento</h3>
                <div className="row justify-content-between">
                  <span className="col-12 col-md-auto">
                    <FontAwesomeIcon icon={faSchool} className="me-2" />
                    Arca Solutions
                  </span>
                  <span className="col-12 col-md-auto">
                    <i className="bi bi-calendar-week-fill d-inline-block me-2 text-center"></i>
                    2022 - 2023
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6 mb-4 border rounded p-3">
                <h3>Atendente Ativo e Receptivo</h3>
                <div className="row justify-content-between">
                  <span className="col-12 col-md-auto">
                    <FontAwesomeIcon icon={faSchool} className="me-2" />
                    Paschoalotto - Setor banco Santander
                  </span>
                  <span className="col-12 col-md-auto">
                    <i className="bi bi-calendar-week-fill d-inline-block me-2 text-center"></i>
                    2022
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6 mb-4 border rounded p-3">
                <h3>Assistente de TI</h3>
                <div className="row justify-content-between">
                  <span className="col-12 col-md-auto">
                    <FontAwesomeIcon icon={faSchool} className="me-2" />
                    inFlux Bauru
                  </span>
                  <span className="col-12 col-md-auto">
                    <i className="bi bi-calendar-week-fill d-inline-block me-2 text-center"></i>
                    2020 - 2021
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6 mb-4 border rounded p-3">
                <h3>Consultor de Vendas</h3>
                <div className="row justify-content-between">
                  <span className="col-12 col-md-auto">
                    <FontAwesomeIcon icon={faSchool} className="me-2" />
                    inFlux Bauru
                  </span>
                  <span className="col-12 col-md-auto">
                    <i className="bi bi-calendar-week-fill d-inline-block me-2 text-center"></i>
                    2019 - 2020
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
