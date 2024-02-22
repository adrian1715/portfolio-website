import React, { useEffect, useState } from "react";
import styles from "./Homepage.module.css";
import Home from "../components/homepage/Home";
import About from "../components/homepage/About";
import ScrollTop from "../components/ScrollTop";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Qualifications from "../components/homepage/Qualifications";
import Experience from "../components/homepage/Experience";
import Portfolio from "../components/homepage/Portfolio";

export default function Homepage() {
  const socials = ["linkedin", "github", "envelope-fill"];

  return (
    <>
      <Helmet>
        <title>Welcome</title>
      </Helmet>

      <Home />

      <About />

      <Qualifications />

      <Experience />

      <Portfolio />

      <section id="contact" className={styles.section}>
        <h2>Contact</h2>
      </section>

      <ScrollTop />
    </>
  );
}
