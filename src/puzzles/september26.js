import { lightGrey, gold, black } from "./colors";
import { createGame } from "./common";

const rowsConstraints = [
	[lightGrey(2), lightGrey(2)],
	[gold(1), lightGrey(2), lightGrey(2), gold(1)],
	[gold(2), lightGrey(2), lightGrey(2), gold(2)],
	[gold(1), lightGrey(6), gold(1)],
	[gold(1), lightGrey(4), gold(1)],
	[gold(1), black(1),  lightGrey(2), black(1), gold(1)],
	[gold(2), lightGrey(2), gold(2)],
	[gold(2), lightGrey(2), gold(2)],
	[gold(1), black(2), gold(1)],
	[lightGrey(2), gold(1), black(2), gold(1), lightGrey(2) ],
];

const colsConstraints = [
	[lightGrey(1), gold(2)],
	[lightGrey(2), gold(2), lightGrey(1)],
	[lightGrey(3), gold(4), lightGrey(1)],
	[lightGrey(3), black(1), gold(4)],
	[lightGrey(5), black(2)],
	[lightGrey(5), black(2)],
	[lightGrey(3), black(1), gold(4)],
	[lightGrey(3), gold(4), lightGrey(1)],
	[lightGrey(2), gold(2), lightGrey(1)],
	[lightGrey(1), gold(2)],
];

const game = createGame(rowsConstraints, colsConstraints, [
	"lightGrey",
	"gold",
	"black"
]);

export default game;
