import { setCellColor, setConstraintComplete } from "./actions";
import Constraint from "../../types/Constraint";
import Cell from "../../types/Cell";
import { EMPTY } from "../../types/FillOption";
import { getCol, getRow } from "../../puzzles/common";

export function glideFillCell(row: number, col: number) {
	return function (dispatch, getState) {
		const isFilling = getState().currentGame.isFilling;
		const color = getState().currentGame.currentOption.value;
		if (isFilling) {
			dispatch(setCellColor(row, col, color));
			dispatch(checkConstraints());
			dispatch(checkCells(row, col));
		}
	};
}

export function clickFillCell(row: number, col: number) {
	return function (dispatch, getState) {
		const color = getState().currentGame.currentOption.value;
		dispatch(setCellColor(row, col, color));
		dispatch(checkConstraints());
		dispatch(checkCells(row, col));
	};
}

export function checkConstraints() {
	return function (dispatch, getState) {
		const { grid, rowsConstraints, colsConstraints } =
			getState().currentGame!!.game!!;

		for (let row = 0; row < rowsConstraints.length; row++) {
			_checkConstraints(
				rowsConstraints[row],
				getRow(grid, row),
				dispatch
			);
			_checkConstraints(
				reverse(rowsConstraints[row]),
				reverse(getRow(grid, row)),
				dispatch
			);
		}

		for (let col = 0; col < colsConstraints.length; col++) {
			_checkConstraints(
				colsConstraints[col],
				getCol(grid, col),
				dispatch
			);
			_checkConstraints(
				reverse(colsConstraints[col]),
				reverse(getCol(grid, col)),
				dispatch
			);
		}
	};
}

function _checkConstraints(constraints: Constraint[], cells: Cell[], dispatch) {
	let cellIndex = 0;
	let count = 0;
	for (
		let constraintIndex = 0;
		constraintIndex < constraints.length;
		constraintIndex++
	) {
		while (cellIndex < cells.length && cells[cellIndex].color === EMPTY) {
			cellIndex++;
		}

		while (
			cellIndex < cells.length &&
			cells[cellIndex].color === constraints[constraintIndex].color
		) {
			cellIndex++;
			count++;
		}

		if (count === constraints[constraintIndex].count) {
			dispatch(
				setConstraintComplete(constraints[constraintIndex].id, true)
			);
			count = 0;
		} else {
			dispatch(
				setConstraintComplete(constraints[constraintIndex].id, false)
			);
			break;
		}
	}
}

function checkCells(row: number, col: number) {
	return function (dispatch, getState) {
		const { grid, rowsConstraints, colsConstraints } =
			getState().currentGame!!.game!!;

		if (rowsConstraints[row].every(({ completed }) => completed)) {
			for (const cell of getRow(grid, row)) {
				if (cell.color === undefined) {
					dispatch(setCellColor(cell.row, cell.col, EMPTY));
				}
			}
		}

		if (colsConstraints[col].every(({ completed }) => completed)) {
			for (const cell of getCol(grid, col)) {
				if (cell.color === undefined) {
					dispatch(setCellColor(cell.row, cell.col, EMPTY));
				}
			}
		}

		if (
			getRow(grid, row).filter(
				({ color }) => color !== undefined && color !== EMPTY
			).length ===
			rowsConstraints[row]
				.map(({ count }) => count)
				.reduce((a, b) => a + b, 0)
		) {
			for (const cell of getRow(grid, row)) {
				if (cell.color === undefined) {
					dispatch(setCellColor(cell.row, cell.col, EMPTY));
				}
			}

			for(const constraint of rowsConstraints[row]) {
				dispatch(setConstraintComplete(constraint.id, true));
			}
		}

		if (
			getCol(grid, col).filter(
				({ color }) => color !== undefined && color !== EMPTY
			).length ===
			colsConstraints[col]
				.map(({ count }) => count)
				.reduce((a, b) => a + b, 0)
		) {
			for (const cell of getCol(grid, col)) {
				if (cell.color === undefined) {
					dispatch(setCellColor(cell.row, cell.col, EMPTY));
				}
			}

			for(const constraint of colsConstraints[col]) {
				dispatch(setConstraintComplete(constraint.id, true));
			}
		}
	};
}

function reverse(array: any[]) {
	return [...array].reverse();
}
