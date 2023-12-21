import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

export default function Letrico() {
  const [submitHandler, setSubmitHandler] = useState();

  async function imports() {
    console.log("trying to import");
    try {
      const imp = await import("./app");
      setSubmitHandler(() => imp.submitHandler);
      // console.log(submitHandler);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    imports();
  }, []);

  return (
    <>
      <div className="text-center">
        <h1 class="text-center mb-0 app-name">
          <span class="let-1">L</span>
          <span class="let-2">E</span>
          <span class="let-3">T</span>
          <span class="let-4">R</span>
          <span class="let-5">i</span>
          <span class="let-6">C</span>
          <span class="let-7">O</span>
        </h1>

        <br />

        <div id="words">
          {/* <!-- PRIMEIRA PALAVRA --> */}
          <div id="first-word" class="d-flex justify-content-center mb-3">
            {/* <!-- PRIMEIRA LETRA --> */}
            <button
              id="firstA"
              class="btn btn-light letter-wrapper border rounded displaced me-2"
            >
              _
            </button>
            {/* <!-- SEGUNDA LETRA --> */}
            <button
              id="firstB"
              class="btn btn-light letter-wrapper border rounded displaced me-2"
            >
              _
            </button>
            {/* <!-- TERCEIRA LETRA --> */}
            <button
              id="firstC"
              class="btn btn-light letter-wrapper border rounded displaced me-2"
            >
              _
            </button>
            {/* <!-- QUARTA LETRA --> */}
            <button
              id="firstD"
              class="btn btn-light letter-wrapper border rounded displaced me-2"
            >
              _
            </button>
            {/* <!-- QUINTA LETRA --> */}
            <button
              id="firstE"
              class="btn btn-light letter-wrapper border rounded displaced me-2"
            >
              _
            </button>
          </div>

          {/* <!-- SEGUNDA PALAVRA --> */}
          <div id="second-word" class="d-flex justify-content-center mb-3">
            {/* <!-- PRIEMIRA LETRA --> */}
            <button
              id="secondA"
              class="btn letter-wrapper border rounded displaced me-2"
            >
              _
            </button>
            {/* <!-- SEGUNDA LETRA --> */}
            <button
              id="secondB"
              class="btn letter-wrapper rounded displaced me-2 border"
            >
              _
            </button>
            {/* <!-- TERCEIRA LETRA --> */}
            <button
              id="secondC"
              class="btn letter-wrapper rounded displaced me-2 border"
            >
              _
            </button>
            {/* <!-- QUARTA LETRA --> */}
            <button
              id="secondD"
              class="btn letter-wrapper rounded displaced me-2 border"
            >
              _
            </button>
            {/* <!-- QUINTA LETRA --> */}
            <button
              id="secondE"
              class="btn letter-wrapper rounded displaced me-2 border"
            >
              _
            </button>
          </div>

          {/* <!-- TERCEIRA PALAVRA --> */}
          <div id="third-word" class="d-flex justify-content-center mb-3">
            <button
              id="thirdA"
              class="btn letter-wrapper rounded displaced me-2 border"
            >
              _
            </button>

            <button
              id="thirdB"
              class="btn letter-wrapper rounded displaced me-2 border"
            >
              _
            </button>

            <button
              id="thirdC"
              class="btn letter-wrapper rounded displaced me-2 border"
            >
              _
            </button>

            <button
              id="thirdD"
              class="btn letter-wrapper rounded displaced me-2 border"
            >
              _
            </button>

            <button
              id="thirdE"
              class="btn letter-wrapper rounded displaced me-2 border"
            >
              _
            </button>
          </div>

          {/* <!-- QUARTA PALAVRA --> */}
          <div id="fourth-word" class="d-flex justify-content-center mb-3">
            <button
              id="fourthA"
              class="btn letter-wrapper border rounded displaced me-2"
            >
              _
            </button>

            <button
              id="fourthB"
              class="btn letter-wrapper border rounded displaced me-2"
            >
              _
            </button>

            <button
              id="fourthC"
              class="btn letter-wrapper border rounded displaced me-2"
            >
              _
            </button>

            <button
              id="fourthD"
              class="btn letter-wrapper border rounded displaced me-2"
            >
              _
            </button>

            <button
              id="fourthE"
              class="btn letter-wrapper border rounded displaced me-2"
            >
              _
            </button>
          </div>

          {/* <!-- QUINTA PALAVRA --> */}
          <div id="fifth-word" class="d-flex justify-content-center mb-3">
            <button
              id="fifthA"
              class="btn letter-wrapper border rounded displaced me-2"
            >
              _
            </button>

            <button
              id="fifthB"
              class="btn letter-wrapper border rounded displaced me-2"
            >
              _
            </button>

            <button
              id="fifthC"
              class="btn letter-wrapper border rounded displaced me-2"
            >
              _
            </button>

            <button
              id="fifthD"
              class="btn letter-wrapper border rounded displaced me-2"
            >
              _
            </button>

            <button
              id="fifthE"
              class="btn letter-wrapper border rounded displaced me-2"
            >
              _
            </button>
          </div>

          {/* <!-- SEXTA PALAVRA --> */}
          <div id="sixth-word" class="d-flex justify-content-center mb-3">
            <button
              id="sixthA"
              class="btn letter-wrapper border rounded displaced me-2"
            >
              _
            </button>

            <button
              id="sixthB"
              class="btn letter-wrapper border rounded displaced me-2"
            >
              _
            </button>

            <button
              id="sixthC"
              class="btn letter-wrapper border rounded displaced me-2"
            >
              _
            </button>

            <button
              id="sixthD"
              class="btn letter-wrapper border rounded displaced me-2"
            >
              _
            </button>

            <button
              id="sixthE"
              class="btn letter-wrapper border rounded displaced me-2"
            >
              _
            </button>
          </div>
        </div>

        <br />
        <div id="message"></div>
        <br />

        <div id="keyboard" class="d-flex justify-content-center">
          {/* <!-- <input type="text" placeholder="Enter text" onblur="getVal()" /> --> */}
          {/* <!-- <input type="checkbox" onchange="getChecked()" id="check1" /> --> */}

          {submitHandler && (
            <form action="#" onSubmit={submitHandler} class="input-group w-50">
              <input
                id="chute"
                class="form-control"
                type="text"
                placeholder="Chute uma palavra"
              />
              <button id="chutar" class="btn btn-light" type="submit">
                Enviar
              </button>
            </form>
          )}

          <br />
          <br />
        </div>
      </div>

      <p style={{ position: "fixed", bottom: 0 }}>
        <b>NOTE: </b>This app was originally made in vanilla JavaScript and
        adapted to React here!
      </p>
      {ReactDOM.createPortal(
        <script src="../src/components/projects/app.js"></script>,
        document.getElementById("vanilla-scripts")
      )}
    </>
  );
}