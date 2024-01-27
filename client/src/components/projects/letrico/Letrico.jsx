import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import "./Letrico.css";

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
          <div id="first-word" class="flex justify-center mb-3">
            {/* <!-- PRIMEIRA LETRA --> */}
            <button
              disabled
              id="firstA"
              class="btn btn-light letter-wrapper border rounded displaced me-2"
            >
              _
            </button>
            {/* <!-- SEGUNDA LETRA --> */}
            <button
              disabled
              id="firstB"
              class="btn btn-light letter-wrapper border rounded displaced me-2"
            >
              _
            </button>
            {/* <!-- TERCEIRA LETRA --> */}
            <button
              disabled
              id="firstC"
              class="btn btn-light letter-wrapper border rounded displaced me-2"
            >
              _
            </button>
            {/* <!-- QUARTA LETRA --> */}
            <button
              disabled
              id="firstD"
              class="btn btn-light letter-wrapper border rounded displaced me-2"
            >
              _
            </button>
            {/* <!-- QUINTA LETRA --> */}
            <button
              disabled
              id="firstE"
              class="btn btn-light letter-wrapper border rounded displaced me-2"
            >
              _
            </button>
          </div>

          {/* <!-- SEGUNDA PALAVRA --> */}
          <div id="second-word" class="flex justify-center mb-3">
            {/* <!-- PRIEMIRA LETRA --> */}
            <button
              disabled
              id="secondA"
              class="btn letter-wrapper border rounded displaced me-2"
            >
              _
            </button>
            {/* <!-- SEGUNDA LETRA --> */}
            <button
              disabled
              id="secondB"
              class="btn letter-wrapper rounded displaced me-2 border"
            >
              _
            </button>
            {/* <!-- TERCEIRA LETRA --> */}
            <button
              disabled
              id="secondC"
              class="btn letter-wrapper rounded displaced me-2 border"
            >
              _
            </button>
            {/* <!-- QUARTA LETRA --> */}
            <button
              disabled
              id="secondD"
              class="btn letter-wrapper rounded displaced me-2 border"
            >
              _
            </button>
            {/* <!-- QUINTA LETRA --> */}
            <button
              disabled
              id="secondE"
              class="btn letter-wrapper rounded displaced me-2 border"
            >
              _
            </button>
          </div>

          {/* <!-- TERCEIRA PALAVRA --> */}
          <div id="third-word" class="flex justify-center mb-3">
            <button
              disabled
              id="thirdA"
              class="btn letter-wrapper rounded displaced me-2 border"
            >
              _
            </button>
            <button
              disabled
              id="thirdB"
              class="btn letter-wrapper rounded displaced me-2 border"
            >
              _
            </button>
            <button
              disabled
              id="thirdC"
              class="btn letter-wrapper rounded displaced me-2 border"
            >
              _
            </button>
            <button
              disabled
              id="thirdD"
              class="btn letter-wrapper rounded displaced me-2 border"
            >
              _
            </button>
            <button
              disabled
              id="thirdE"
              class="btn letter-wrapper rounded displaced me-2 border"
            >
              _
            </button>
          </div>

          {/* <!-- QUARTA PALAVRA --> */}
          <div id="fourth-word" class="flex justify-center mb-3">
            <button
              disabled
              id="fourthA"
              class="btn letter-wrapper border rounded displaced me-2"
            >
              _
            </button>
            <button
              disabled
              id="fourthB"
              class="btn letter-wrapper border rounded displaced me-2"
            >
              _
            </button>
            <button
              disabled
              id="fourthC"
              class="btn letter-wrapper border rounded displaced me-2"
            >
              _
            </button>
            <button
              disabled
              id="fourthD"
              class="btn letter-wrapper border rounded displaced me-2"
            >
              _
            </button>
            <button
              disabled
              id="fourthE"
              class="btn letter-wrapper border rounded displaced me-2"
            >
              _
            </button>
          </div>

          {/* <!-- QUINTA PALAVRA --> */}
          <div id="fifth-word" class="flex justify-center mb-3">
            <button
              disabled
              id="fifthA"
              class="btn letter-wrapper border rounded displaced me-2"
            >
              _
            </button>
            <button
              disabled
              id="fifthB"
              class="btn letter-wrapper border rounded displaced me-2"
            >
              _
            </button>
            <button
              disabled
              id="fifthC"
              class="btn letter-wrapper border rounded displaced me-2"
            >
              _
            </button>
            <button
              disabled
              id="fifthD"
              class="btn letter-wrapper border rounded displaced me-2"
            >
              _
            </button>
            <button
              disabled
              id="fifthE"
              class="btn letter-wrapper border rounded displaced me-2"
            >
              _
            </button>
          </div>

          {/* <!-- SEXTA PALAVRA --> */}
          <div id="sixth-word" class="flex justify-center mb-3">
            <button
              disabled
              id="sixthA"
              class="btn letter-wrapper border rounded displaced me-2"
            >
              _
            </button>
            <button
              disabled
              id="sixthB"
              class="btn letter-wrapper border rounded displaced me-2"
            >
              _
            </button>
            <button
              disabled
              id="sixthC"
              class="btn letter-wrapper border rounded displaced me-2"
            >
              _
            </button>
            <button
              disabled
              id="sixthD"
              class="btn letter-wrapper border rounded displaced me-2"
            >
              _
            </button>
            <button
              disabled
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

        <div id="keyboard" class="text-center">
          <br />
          {/* {submitHandler && ( */}
          <form action="#" onSubmit={submitHandler} className="">
            <div className="flex justify-center items-center">
              <input
                id="chute"
                className="py-1.5 dark:py-2 dark:border-y-0 dark:border-l-0 border-r rounded-l w-3/12 text-black"
                type="text"
                placeholder="Chute uma palavra"
              />
              <button
                id="chutar"
                className="btn bg-gray-300 hover:bg-gray-200 !rounded-l-none text-black"
                type="submit"
              >
                Chutar
              </button>
            </div>
          </form>
          {/* )} */}
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
