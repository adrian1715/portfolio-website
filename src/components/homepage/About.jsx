import React from "react";
import styles from "../../pages/Homepage.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <h2 id="about-title" className="fs-1 mb-4 mb-lg-5">
        About me
      </h2>

      <div id="about-content" className="row justify-content-center">
        <div
          id="about-image"
          className="col-auto col-lg-5 col-xl-4 mb-4 mb-lg-0"
        >
          <img src="/images/me-2.png" className="w-100 rounded" />
        </div>
        <div className="col-lg-6 d-flex flex-column justify-content-center">
          <p className="px-md-4 px-lg-3 mb-4 mb-xl-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            neque dicta quae illum hic, expedita aspernatur, cum a, blanditiis
            repudiandae assumenda! Tempore iusto facilis tenetur neque, delectus
            repudiandae nam harum? <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            enim minima ab expedita quis tempore, totam nisi soluta aperiam quia
            fuga voluptate modi, perferendis accusantium in facere. Rem,
            blanditiis facere!
          </p>
          <div className="row justify-content-around">
            <button
              className={`col-5 mb-2 mb-lg-0 btn btn-outline-primary ${styles.buttonText}`}
            >
              Button 1
            </button>
            <button
              className={`col-5 mb-2 mb-lg-0 btn btn-outline-secondary ${styles.buttonText}`}
            >
              Button 2
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
