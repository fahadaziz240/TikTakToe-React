import React from "react";
import "../components/Box.css";

export const Box = ({ value, onClick }) => {
  const style = value === "X" ? "box x" : "box o";
  return (
    <div>
      <button className={style} onClick={onClick}>
        {value}
      </button>
    </div>
  );
};
