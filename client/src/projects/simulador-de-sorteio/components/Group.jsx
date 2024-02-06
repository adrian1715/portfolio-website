import React from "react";

export default function Group({ group, copa, ...props }) {
  const nums = [1, 2, 3, 4];

  return (
    <ul
      {...props}
      id={`${copa === "sulamericana" ? "sula-" : ""}grupo-${group}`}
      className="grupos col-6 col-md-4 col-lg-3"
    >
      {nums.map((num) => (
        <li
          key={num}
          id={
            copa !== "mundial"
              ? `${copa === "sulamericana" ? "sula-" : ""}` + group + num
              : ""
          }
          className={copa === "mundial" ? group + num : ""}
        ></li>
      ))}

      {copa === "mundial" && (
        <div className="jogos mt-3">
          <p className="mb-1">
            <b>Jogos:</b>
          </p>
          <p>
            <span className={`${group}1`}>{group}1</span> x{" "}
            <span className={`${group}2`}>{group}2</span>
          </p>
          <p className="rodada-1">
            <span className={`${group}3`}>{group}3</span> x{" "}
            <span className={`${group}4`}>{group}4</span>
          </p>

          <p>
            <span className={`${group}1`}>{group}1</span> x{" "}
            <span className={`${group}3`}>{group}3</span>
          </p>
          <p className="rodada-2">
            <span className={`${group}4`}>{group}4</span> x{" "}
            <span className={`${group}2`}>{group}2</span>
          </p>

          <p>
            <span className={`${group}4`}>{group}4</span> x{" "}
            <span className={`${group}1`}>{group}1</span>
          </p>
          <p className="rodada-3">
            <span className={`${group}2`}>{group}2</span> x{" "}
            <span className={`${group}3`}>{group}3</span>
          </p>
        </div>
      )}
    </ul>
  );
}
