import { useState, useEffect } from "react";
import styles from "./Timer.module.css";
import { ClockIcon } from "@heroicons/react/24/outline";
import Head from "react-helmet";

export default function Timer() {
  const [submitHandler, setSubmitHandler] = useState();

  async function imports() {
    console.log("trying to import");
    try {
      await import("./app");
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    imports();
  }, []);

  return (
    <>
      <Head>
        <title>Pomodoro Timer</title>
        {/* <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
          crossorigin="anonymous"
        /> */}
      </Head>

      <h1 class="display-1">
        Pomodoro Timer
        <ClockIcon className="max-w-8 inline-block ms-2 mb-1" />
      </h1>
      <br />
      <div id="buttons" class="flex justify-between">
        <button
          id="study-timer-btn"
          class="timer-btn btn bg-blue-700 hover:bg-blue-600 disabled:hover:bg-blue-700"
        >
          Start Studying
        </button>
        <div class="mid-btns">
          <button
            id="pause-btn"
            class="btn bg-zinc-800 hover:bg-zinc-700 disabled:hover:bg-zinc-800 me-1"
            disabled
          >
            Pause
          </button>
          <button
            id="restart-btn"
            class="btn bg-gray-600 hover:bg-gray-500 disabled:hover:bg-gray-600 ms-1"
            disabled
          >
            Restart Timer
          </button>
        </div>
        <button
          id="break-btn"
          class="timer-btn btn bg-green-700 hover:bg-green-600 disabled:bg-green-700"
        >
          Take a Break
        </button>
      </div>
      <div id="timer" className={styles.timer}>
        00:00
      </div>
      <h2>
        Pomodoros: <span id="pomodoros">0</span>
      </h2>

      <audio id="hurt-sound" src="assets/hurt.mp3" preload="auto"></audio>
      <audio id="tetra-sound" src="assets/acabouuu.m4a" preload="auto"></audio>

      {/* {ReactDOM.createPortal(
        <>
          <audio id="hurt-sound" src="assets/hurt.mp3" preload="auto"></audio>
          <audio
            id="tetra-sound"
            src="assets/acabouuu.m4a"
            preload="auto"
          ></audio>
        </>,
        document.querySelector("body")
      )} */}
    </>
  );
}
