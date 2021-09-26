import { brown, green } from "./colors";
import { createGame } from "./common";

export const rowsConstraints = [
	[green(1)],
	[green(3)],
	[green(3)],
	[green(5)],
	[brown(1)]
];

export const colsConstraints = [
	[green(1)],
	[green(3)],
	[green(4), brown(1)],
	[green(3)],
	[green(1)]
];

const game = createGame(rowsConstraints, colsConstraints, ["green", "brown"]);

export default game;
