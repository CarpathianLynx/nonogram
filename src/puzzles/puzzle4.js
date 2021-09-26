import { brown, mustard, grey } from "./colors";
import { createGame } from "./common";

export const rowsConstraints = [
	[brown(3)],
	[brown(5)],
	[grey(3)],
	[grey(1), mustard(2)],
	[mustard(5)]
];

export const colsConstraints = [
	[brown(1), mustard(1)],
	[brown(2), grey(2), mustard(1)],
	[brown(2), grey(1), mustard(2)],
	[brown(2), grey(1), mustard(2)],
	[brown(1), mustard(1)]
];

const game = createGame(rowsConstraints, colsConstraints, [
	"brown",
	"grey",
	"mustard"
]);

export default game;
