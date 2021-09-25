import Constraint from "../types/Constraint";
import Game from "../types/Game";
import Grid from "../types/Grid";
import Color from "../types/Color";

export function constraint(color: string) {
	return function (count: number): Constraint {
		return {
			color,
			count,
			completed: false
		};
	};
}

function createArray<T>(length: number, creator: (index: number) => T): T[] {
	const array: T[] = [];
	for (let i = 0; i < length; i++) {
		array.push(creator(i));
	}
	return array;
}

function createMatrix<T>(
	height: number,
	width: number,
	creator: (row: number, col: number) => T
): T[][] {
	return createArray(height, (row) =>
		createArray(width, (col) => creator(row, col))
	);
}

function createCell(row, col) {
	return {
		row,
		col,
		color: undefined
	};
}

export function createGrid(height: number, width: number): Grid {
	const cells = createMatrix(height, width, createCell);
	return { cells };
}

export function createGame(
	rowsConstraints: Constraint[][],
	colsConstraints: Constraint[][],
	colors: Color[]
): Game {
	return {
		grid: createGrid(rowsConstraints.length, colsConstraints.length),
		rowsConstraints,
		colsConstraints,
		colors
	};
}

export function getRow(grid: Grid, index: number) {
	return grid.cells[index];
}

export function getCol(grid: Grid, index: number) {
	return grid.cells.map((row) => row[index]);
}
