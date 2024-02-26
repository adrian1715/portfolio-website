import React, { useState } from "react";
import styles from "../../pages/Homepage.module.css";
import Spinner from "../Spinner";
import Alert from "../Alert";

export default function Contact() {
  const [hasEmail, setHasEmail] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const getEmail = () => {
    navigator.clipboard.writeText("adrian40001@gmail.com");
    setHasEmail(true);
    setTimeout(() => setHasEmail(false), 2000);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setFormStatus({ loading: true, success: false, error: null });

    fetch("https://formsubmit.co/ajax/adrian40001@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) =>
        setFormStatus((prevState) => ({
          ...prevState,
          loading: false,
          success: true,
        }))
      )
      .catch((error) =>
        setFormStatus((prevState) => ({ ...prevState, loading: false, error }))
      );

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className={styles.section}>
      <h2 id="contact-title" className="fs-1 mb-5">
        Contact
      </h2>

      <div
        id="contact-content"
        className="w-100 d-flex flex-column align-items-center"
      >
        <form className="col-9" onSubmit={submitHandler}>
          <input type="hidden" name="_captcha" value="false" />
          <div className="row">
            <div className="col-md-6">
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-person-fill"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={changeHandler}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group mb-3">
                <span className="input-group-text">@</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={changeHandler}
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-floating">
            <textarea
              className="form-control"
              id="floatingTextarea"
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={changeHandler}
              style={{ height: "30vh" }}
              required
            ></textarea>
            <label htmlFor="floatingTextarea">Message</label>
          </div>
          <div className="row mt-4 justify-content-between mx-1">
            <button
              className={`btn btn-primary col-md-auto col-lg-5 py-md-3 mb-2 mb-md-0 ${styles.buttonText}`}
              type="submit"
              disabled={formStatus.loading}
            >
              {!formStatus.loading ? (
                <>
                  Send message<i className="bi bi-send-fill ms-3"></i>
                </>
              ) : (
                <div className="d-flex align-items-center justify-content-center">
                  <span className="me-3">Submitting...</span>
                  <Spinner />
                </div>
              )}
            </button>
            <button
              className={`btn btn-secondary col-md-5 py-md-3 ${styles.buttonText}`}
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
          {formStatus.success && (
            <Alert type="success" message="Message successfully submitted" />
          )}
          {formStatus.error && (
            <Alert
              type="danger"
              message="Looks like an error occurred, please try again"
            />
          )}
        </form>
      </div>
    </section>
  );
}
