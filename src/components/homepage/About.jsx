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
          <img src="/images/me-2.png" className="rounded img-fluid" />
        </div>
        <div className="col-lg-6 px-md-4 px-lg-3 d-flex flex-column justify-content-center">
          <p className="m-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            neque dicta quae illum hic, expedita aspernatur, cum a, blanditiis
            repudiandae assumenda! Tempore iusto facilis tenetur neque, delectus
            repudiandae nam harum? <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            enim minima ab expedita quis tempore, totam nisi soluta aperiam quia
            fuga voluptate modi, perferendis accusantium in facere. Rem,
            blanditiis facere!
          </p>
        </div>
      </div>
    </section>
  );
}
