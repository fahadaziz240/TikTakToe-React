import React from "react";
import { Box } from "./Box";
import "./ScoreBoard.css";

const ScoreBoard = ({ scores, Xplaying }) => {
  return (
    <div className="scoreboard">
      <span className={`scores xscore ${!Xplaying} && "inactive"`}>
        X- {scores?.xScore}
      </span>
      <span className={`scores oscore ${!Xplaying} && "inactive"`}>
        O- {scores?.oScore}
      </span>
    </div>
  );
};

export default ScoreBoard;
