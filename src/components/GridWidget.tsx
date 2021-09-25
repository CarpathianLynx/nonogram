import Grid from "../types/Grid";
import React from "react";
import "./grid-widget.css";
import Cell from "../types/Cell";
import { EMPTY } from "../types/FillOption";
import X from "./X";
import classes from "./classes";

interface GridProps {
	grid: Grid;
	onMouseDown: (cell: Cell) => void;
	onMouseUp: () => void;
	onMouseEnter: (cell: Cell) => void;
	onMouseLeave: () => void;
}

const GridWidget: React.FC<GridProps> = ({
	grid,
	onMouseDown,
	onMouseUp,
	onMouseEnter,
	onMouseLeave
}) => {
	return (
		<div className={"grid"} onMouseLeave={onMouseLeave}>
			{grid.cells.map((row, rowIndex) => {
				return (
					<div key={`row-${rowIndex}`} className={"row"}>
						{row.map((cell) => {
							const { row, col, color } = cell;
							return (
								<div
									key={`cell-${row}-${col}`}
									className={classes("cell", color)}
									onMouseDown={() => onMouseDown(cell)}
									onMouseUp={() => onMouseUp()}
									onMouseEnter={() => onMouseEnter(cell)}
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
