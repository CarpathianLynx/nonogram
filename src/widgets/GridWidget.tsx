import Grid from "../types/Grid";
import React from "react";
import "./GridWidget.css";
import Cell from "../types/Cell";

interface GridProps {
  grid: Grid;
}

interface CellProps {
  cell: Cell;
}

const CellWidget: React.FC<CellProps> = ({ cell }) => {
  const { row, col, color } = cell;
  return <div key={`cell-${row}-${col}`} className={`cell ${color}`} />;
};

const GridWidget: React.FC<GridProps> = ({ grid }) => {
  return (
    <div className={"grid"}>
      {grid.cells.map((row, rowIndex) => {
        return (
          <div key={`row-${rowIndex}`} className={"row"}>
            {row.map((cell) => (
              <CellWidget key={`cell-${cell.row}-${cell.col}`} cell={cell} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default GridWidget;
