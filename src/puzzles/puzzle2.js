import { brown, grey } from "./colors";
import { createGame } from "./common";

const rowsConstraints = [
	[brown(1)],
	[brown(1)],
	[grey(2), brown(1), grey(2)],
	[grey(5)],
	[grey(3)]
];

const colsConstraints = [
	[grey(2)],
	[grey(3)],
	[brown(3), grey(2)],
	[grey(3)],
	[grey(2)]
];

const game = createGame(rowsConstraints, colsConstraints, ["grey", "brown"]);

export default game;
