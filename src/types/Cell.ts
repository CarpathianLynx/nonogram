import Color from "./Color";

export default interface Cell {
	color?: Color;
	row: number;
	col: number;
}

export function setColor(cell: Cell, color: Color) {
	cell.color = color;
}
