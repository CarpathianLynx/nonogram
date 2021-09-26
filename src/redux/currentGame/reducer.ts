import {
	SET_CELL_COLOR,
	SET_CONSTRAINT_COMPLETE,
	SET_FILL_OPTION,
	SET_FILLING,
	SET_GAME
} from "./actions";
import CurrentGameState from "./CurrentGameState";
import FillOption, { EMPTY_OPTION } from "../../types/FillOption";
import Game from "../../types/Game";
import { setColor } from "../../types/Cell";
import Color from "../../types/Color";
import { setCompleted } from "../../types/Constraint";

interface Action {
	id: number;
	game: Game;
	option: FillOption;
	type: string;
	isFilling: boolean;
	row: number;
	col: number;
	color: Color;
}

function setFilling(state: CurrentGameState, { isFilling }: Action): void {
	state.isFilling = isFilling;
}

function setGame(state: CurrentGameState, { game }: Action): void {
	state.game = game;
	state.options = [
		EMPTY_OPTION,
		...game.colors.map((value) => ({ value, completed: false }))
	];
}

function setFillOption(state: CurrentGameState, { option }: Action): void {
	state.currentOption = option;
}

function setCellColor(
	{ game, currentOption }: CurrentGameState,
	{ row, col, color }: Action
): void {
	const { grid } = game!!;
	const { cells } = grid;
	setColor(cells[row][col], color);
}

function setConstraintComplete(
	{ game }: CurrentGameState,
	{ id, completed }
): void {
	const { rowsConstraints, colsConstraints } = game!!;
	for (const constraints of [...rowsConstraints, ...colsConstraints]) {
		for (const constraint of constraints) {
			if (constraint.id === id) {
				setCompleted(constraint, completed);
			}
		}
	}
}

const reducers = {
	[SET_FILLING]: setFilling,
	[SET_GAME]: setGame,
	[SET_FILL_OPTION]: setFillOption,
	[SET_CELL_COLOR]: setCellColor,
	[SET_CONSTRAINT_COMPLETE]: setConstraintComplete
};

export default function reducer(
	state: CurrentGameState = { isFilling: false },
	action: Action
): CurrentGameState {
	if (action.type in reducers) {
		reducers[action.type](state, action);
		return clone(state);
	} else {
		return state;
	}
}

function clone<T>(obj: T): T {
	return JSON.parse(JSON.stringify(obj));
}
