import FillOption from "../../types/FillOption";
import Game from "../../types/Game";
import Color from "../../types/Color";

export const SET_FILL_OPTION = "SET_FILL_OPTION";
export const setFillOption = (option: FillOption) => ({
	type: SET_FILL_OPTION,
	option
});

export const SET_GAME = "SET_GAME";
export const setGame = (game: Game) => ({
	type: SET_GAME,
	game
});

export const SET_CELL_COLOR = "SET_CELL_COLOR";
export const setCellColor = (row: number, col: number, color: Color) => ({
	type: SET_CELL_COLOR,
	row,
	col,
	color
});

export const SET_FILLING = "SET_FILLING";
export const setFilling = (isFilling: boolean) => ({
	type: SET_FILLING,
	isFilling
});

export const SET_CONSTRAINT_COMPLETE = "SET_CONSTRAINT_COMPLETE";
export const setConstraintComplete = (id: number, completed: boolean) => ({
	type: SET_CONSTRAINT_COMPLETE,
	id,
	completed
});
