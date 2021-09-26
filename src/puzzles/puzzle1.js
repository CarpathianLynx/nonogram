import { blue, orange } from "./colors";
import { createGame } from "./common";

const colsConstraints = [
	[orange(1), blue(1), orange(1)],
	[orange(1), blue(1), orange(1)],
	[orange(3), blue(1), orange(1)],
	[orange(1), blue(1), orange(1)],
	[orange(1), blue(1), orange(1)]
];

const rowsConstraints = [
	[orange(1)],
	[orange(1)],
	[orange(5)],
	[blue(5)],
	[orange(5)]
];

const game = createGame(rowsConstraints, colsConstraints, ["orange", "blue"]);

export default game;
