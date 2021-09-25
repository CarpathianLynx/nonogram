import { fillCell } from "./actions";

export const fillGlideCell = (row: number, col: number) => {
	return function (dispatch, getState) {
		const isFilling = getState().currentGame.isFilling;
		if (isFilling) dispatch(fillCell(row, col));
	};
};
