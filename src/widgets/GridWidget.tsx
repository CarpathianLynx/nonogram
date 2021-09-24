import Grid from "../types/Grid";
import React from "react";
import "./grid-widget.css";
import Cell from "../types/Cell";
import { EMPTY } from "../types/FillOption";
import X from "./X";

interface GridProps {
  grid: Grid;
  onClickCell: (cell: Cell) => void;
}

const GridWidget: React.FC<GridProps> = ({ grid, onClickCell }) => {
  console.log("bau", grid.cells[0][4]);

  return (
    <div className={"grid"}>
      {grid.cells.map((row, rowIndex) => {
        return (
          <div key={`row-${rowIndex}`} className={"row"}>
            {row.map((cell) => {
              const { row, col, color } = cell;
              return (
                <div
                  key={`cell-${row}-${col}`}
                  className={`cell ${color}`}
                  onClick={() => onClickCell(cell)}
                >
                  {color === EMPTY ? <X /> : null}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default GridWidget;
