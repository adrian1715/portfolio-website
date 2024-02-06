import React, { useEffect, useState } from "react";
import ProjectsNote from "../../components/ProjectsNote";

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
          {ids.count.map((count) => (
            <div
              key={count}
              id={`${count}-word`}
              className="d-flex justify-content-center mb-3"
            >
              {ids.letters.map((letter) => (
                <button
                  key={letter}
                  id={`${count}${letter}`}
                  className={`cursor-default fw-bold btn rounded me-2 border ${
                    count === "first" ? "btn-light border-dark" : ""
                  } letter-wrapper`}
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

        <div
          id="keyboard"
          className="text-center d-flex justify-content-center"
        >
          <form action="#" onSubmit={submitHandler}>
            <div className="input-group">
              <input
                id="chute"
                className="form-control"
                type="text"
                placeholder="Chute uma palavra"
              />
              <button id="chutar" className="btn border" type="submit">
                Chutar
              </button>
            </div>
          </form>
        </div>
      </div>

      <ProjectsNote />
    </>
  );
}
