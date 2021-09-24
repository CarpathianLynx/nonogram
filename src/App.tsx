import React from "react";
import "./App.css";
import GameWidget from "./widgets/GameWidget";
import FillOption from "./types/FillOption";

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
  return createMatrix(size, size, (row, col) => ({ row, col, color }));
}

const SIZE = 5;
const color = "empty";

const cells = createGrid(SIZE);

const randomNumber = (greaterThan = 0, lessThan) => {
  return (lessThan - greaterThan) * Math.random() + greaterThan;
};

const randomInt = (greaterThan = 0, lessThan) =>
  Math.floor(randomNumber(greaterThan, lessThan));

const rowsConstraints = createArray(SIZE, (row) =>
  createArray(randomInt(1, 4), (col) => ({
    color: "blue",
    count: randomInt(1, SIZE),
  }))
);

console.log(rowsConstraints);

const grid = { cells };
const colors: FillOption[] = [
  { value: "red", completed: false },
  { value: "blue", completed: false },
];
const game = { grid, colors, rowsConstraints };

function App() {
  return (
    <div className={"wrapper"}>
      <GameWidget game={game} />
    </div>
  );
}

export default App;
