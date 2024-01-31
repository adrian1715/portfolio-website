import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

export default function Letrico() {
  const [submitHandler, setSubmitHandler] = useState();

  async function imports() {
    console.log("trying to import");
    try {
      const imp = await import("./app");
      setSubmitHandler(() => imp.submitHandler);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    imports();
  }, []);

  const ids = {
    letters: ["A", "B", "C", "D", "E"],
    count: ["first", "second", "third", "fourth", "fifth", "sixth"],
  };

  return (
    <>
      <div className="text-center">
        <h1 className="text-center mb-0 app-name">
          {"LETRiCO".split("").map((letter, i) => (
            <span key={i} className={`let-${i + 1}`}>
              {letter}
            </span>
          ))}
        </h1>

        <br />

        <div id="words">
          {/* <!-- PRIMEIRA PALAVRA --> */}
          {ids.count.map((count) => (
            <div
              key={count}
              id={`${count}-word`}
              className="flex justify-center mb-3"
            >
              {ids.letters.map((letter) => (
                <button
                  key={letter}
                  id={`${count}${letter}`}
                  className={`!font-bold btn ${
                    count === "first" ? "btn-light" : ""
                  } letter-wrapper rounded displaced me-2 border`}
                  disabled
                >
                  _
                </button>
              ))}
            </div>
          ))}
        </div>

        <br />
        <div id="message"></div>
        <br />

        {/* <div id="keyboard" class="text-center"> */}
        <form action="#" onSubmit={submitHandler}>
          <div className="flex justify-center items-center">
            <input
              id="chute"
              className="py-1.5 rounded-l w-3/12 text-black border dark:border-[3px]"
              type="text"
              placeholder="Chute uma palavra"
            />
            <button
              id="chutar"
              className={`btn bg-gray-300 hover:active:bg-gray-200  !rounded-l-none text-black disabled:cursor-not-allowed`}
              type="submit"
            >
              Chutar
            </button>
          </div>
        </form>
        {/* </div> */}
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
