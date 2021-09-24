import React from "react";
import GridWidget from "./GridWidget";
import "./GameWidget.css";
import FillPicker from "./FillPicker";
import { EMPTY_OPTION } from "../types/FillOption";
import Game from "../types/Game";
import RowConstraintsWidget from "./RowConstraintsWidget";
import ColConstraintsWidget from "./ColConstraintsWidget";

interface GameProps {
  game: Game;
}

const GameWidget: React.FC<GameProps> = ({ game }) => {
  const { grid, colors, rowsConstraints } = game;
  const actualColors = [EMPTY_OPTION, ...colors];
  return (
    <div className={"game"}>
      <div className={"board"}>
        <div className={"spacer-row-constraints"}>
          <div className={"spacer"} />
          <RowConstraintsWidget constraints={rowsConstraints} />
        </div>
        <div className={"col-constraints-grid"}>
          <ColConstraintsWidget constraints={rowsConstraints} />
          <GridWidget grid={grid} />
        </div>
      </div>
      <FillPicker options={actualColors} />
    </div>
  );
};

export default GameWidget;
