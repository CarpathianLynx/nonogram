import Color from "./types/Color";

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

function createGrid(size) {
  return createMatrix(size, size, (row, col) => ({
    row,
    col,
    color: undefined,
  }));
}

function randomNumber(greaterThan = 0, lessThan) {
  return (lessThan - greaterThan) * Math.random() + greaterThan;
}

function randomInt(greaterThan = 0, lessThan) {
  return Math.floor(randomNumber(greaterThan, lessThan));
}

function randomElement(list) {
  return list[randomInt(0, list.length)];
}

function createConstraints(size, colors) {
  return createArray(size, (row) =>
    createArray(randomInt(1, 3), (col) => ({
      color: randomElement(colors),
      count: randomInt(1, size / 3),
    }))
  );
}

export default function createGame(size: number, colors: Color[]) {
  const cells = createGrid(size);
  const grid = { cells };
  const rowsConstraints = createConstraints(size, colors);
  const colsConstraints = createConstraints(size, colors);
  return { grid, colors, rowsConstraints, colsConstraints };
}
