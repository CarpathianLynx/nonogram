import React from "react";
import "./game-widget.css";
import Game from "../types/Game";
import RowConstraintsWidget from "./RowConstraintsWidget";
import FillPickerContainer from "../containers/FillPickerContainer";
import GridContainer from "../containers/GridContainer";
import ColConstraintsWidget from "./ColConstraintsWidget";

interface GameProps {
  game: Game;
}

const GameWidget: React.FC<GameProps> = ({ game }) => {
  const { rowsConstraints, colsConstraints } = game;
  return (
    <div className={"game"}>
      <div className={"board"}>
        <div className={"spacer-row-constraints"}>
          <div className={"spacer"} />
          <RowConstraintsWidget constraints={rowsConstraints} />
        </div>
        <div className={"col-constraints-grid"}>
          <ColConstraintsWidget constraints={colsConstraints} />
          <GridContainer />
        </div>
      </div>
      <FillPickerContainer />
    </div>
  );
};

export default GameWidget;
