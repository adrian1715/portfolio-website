import React from "react";
import styles from "../../pages/Homepage.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div id="about-header" className={styles.sectionHeader}>
        <h2 id="about-title" className="fs-1">
          About me
        </h2>
        <p id="about-subtitle">Who I am</p>
      </div>
      <div id="about-content" className="row justify-content-center">
        <div
          id="about-image"
          className="col-lg-5 col-xl-4 mb-4 mb-lg-0 d-flex justify-content-center align-items-center"
        >
          <img src="/images/me-2.jpg" className="rounded img-fluid" />
        </div>
        <div className="col-lg-7 col-xl-6 px-md-4 px-lg-3 d-flex flex-column justify-content-center">
          <p>
            Full-Stack Italian-Brazilian developer with experience in web
            development and IT support. I'm actively building modern
            applications using technologies like JavaScript, React, Node.js,
            PHP, and SQL. Currently studying Business Computing at the
            Technological University of Dublin, with a background in IT
            Management. I'm an EU citizen through my Italian nationality, with
            full work rights, currently based in Ireland.
          </p>
          <p className="m-0">
            Proactive and dedicated, I enjoy collaborating with others,
            continuously learning, and contributing to a positive environment. I
            focus on turning ideas into practical, efficient, and scalable
            solutions, with clean implementation and attention to real-world
            requirements. I'm always looking for new challenges and
            opportunities to grow both as a developer and as a person.
          </p>
        </div>
      </div>
    </section>
  );
}
