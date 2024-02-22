import React, { useState } from "react";
import styles from "../../pages/Homepage.module.css";

export default function Contact() {
  const [hasEmail, setHasEmail] = useState(false);

  const [formData, setFormData] = useState();

  const getEmail = () => {
    navigator.clipboard.writeText("adrian40001@gmail.com");
    setHasEmail(true);
    setTimeout(() => setHasEmail(false), 2000);
  };

  function submitHandler(e) {
    e.preventDefault();
    setFormData("Submitted!");
    setTimeout(() => setFormData(""), 2000);
    // send message as an email
  }

  return (
    <section id="contact" className={styles.section}>
      <h2 className="fs-1 mb-5">Contact</h2>

      <form action="" className="w-75" onSubmit={submitHandler}>
        <div className="row">
          <div className="col-md-6">
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="bi bi-person-fill"></i>
              </span>
              <input type="text" className="form-control" placeholder="Name" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="input-group mb-3">
              <span className="input-group-text">@</span>
              <input type="text" className="form-control" placeholder="Email" />
            </div>
          </div>
        </div>
        <div className="form-group">
          {/* <label htmlFor="message" className="">Message</label> */}
          <textarea
            name=""
            id=""
            cols="50"
            rows="15"
            className="form-control"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="row mt-4 justify-content-around">
          <button
            className="btn btn-primary col-md-5 px-0 py-3 mb-2 mb-md-0"
            type="submit"
          >
            Send message<i className="bi bi-send-fill ms-3"></i>
          </button>
          <button
            className="btn btn-secondary col-md-5 px-0 py-3"
            onClick={getEmail}
            disabled={hasEmail}
          >
            {!hasEmail ? "Get Email" : "Email copied"}
            <i
              className={`bi bi-${
                !hasEmail ? "envelope-at-fill ms-3" : "check-lg ms-2"
              }`}
            ></i>
          </button>
        </div>
      </form>

      {formData && <p className="mt-4">{formData}</p>}
    </section>
  );
}
