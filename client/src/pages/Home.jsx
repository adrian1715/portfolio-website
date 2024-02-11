import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import About from "../components/About";
import ScrollTop from "../components/ScrollTop";

export default function Home() {
  return (
    <>
      <main>
        <section
          id="home"
          className={styles.section}
          style={{ height: "91vh" }}
        >
          <div className="row justify-content-center">
            <div className="d-inline-block col-md-5">
              <h1>Adrian Lobato</h1>
              <h2>Full-Stack developer</h2>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
                nulla necessitatibus, sed architecto minima ut maxime aspernatur
                facilis tenetur, natus quaerat adipisci ea non quos tempora
                obcaecati magni commodi ipsam!
              </p>
            </div>
            <img
              src="/images/me.jpg"
              alt=""
              className="rounded-4 d-inline-block w-auto"
              style={{ maxHeight: "20rem" }}
            />
          </div>
        </section>
      </main>

      <ScrollTop />

      <About />

      <section id="skills">
        <h2>Skills and Technologies</h2>
      </section>

      <section id="certificates">
        <h2>Certificates</h2>
      </section>

      <section id="portfolio">
        <h2>Projects</h2>
      </section>

      <section id="contact">
        <h2>Contact</h2>
      </section>
    </>
  );
}
