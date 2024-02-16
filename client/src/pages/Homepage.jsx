import React, { useEffect, useState } from "react";
import styles from "./Homepage.module.css";
import Home from "../components/homepage/Home";
import About from "../components/About";
import ScrollTop from "../components/ScrollTop";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

export default function Homepage() {
  const socials = ["linkedin", "github", "envelope-fill"];

  return (
    <>
      <Helmet>
        <title>Welcome</title>
      </Helmet>

      <Home />

      <ScrollTop />

      {/* <About /> */}
      <section id="about" className={styles.section}>
        <h2>About me</h2>
      </section>

      <section id="skills" className={styles.section}>
        <h2>Skills and Technologies</h2>
      </section>

      <section id="portfolio" className={styles.section}>
        <h2>Portfolio</h2>
      </section>

      <section id="curriculum" className={styles.section}>
        <h2>Curriculum</h2>
      </section>

      <section id="contact" className={styles.section}>
        <h2>Contact</h2>
      </section>
    </>
  );
}
