import React from "react";
import styles from "../copa-do-mundo-2022/Copa.module.css";

export default function Pote({ teams, pote, copa, ...props }) {
  const groups = ["A", "B", "C", "D", "E", "F", "G", "H"];

  return (
    <ul
      {...props}
      id={`pote-${pote}`}
      className={`${styles.pote} justify-content-center text-lg-center col-8 col-sm-6 col-md-4 col-lg-3`}
    >
      <p>
        <b>Pote {pote}</b>
      </p>
      {teams.map((team, i) => (
        <li
          key={i}
          id={`${copa === "sulamericana" ? "sula" : ""}${
            pote === 1 ? "a1" : pote === 2 ? "b2" : pote === 3 ? "c3" : "d4"
          }${groups[i]}`}
          className={""}
        >
          <img
            src={`/src/projects/simulador-de-sorteio/assets/${copa}/${
              copa === "mundial"
                ? team === "New Zealand/Costa Rica"
                  ? "new rica"
                  : team === "Peru/Australia"
                  ? "perustralia"
                  : team === "Wales/Scotland/Ukraine"
                  ? "eu 4"
                  : team
                : team
            }.png`}
            alt={team}
            className={styles.escudos}
          />
          <span>
            {team}
            <b className="ms-1 d-block d-md-inline-block">
              {team === "Qatar"
                ? "(Grupo A)"
                : team === "Palmeiras"
                ? "(Grupo A)"
                : ""}
            </b>
          </span>
        </li>
      ))}
    </ul>
  );
}
