import { FILL_CELL, SET_FILL_OPTION, SET_FILLING, SET_GAME } from "./actions";
import CurrentGameState from "./CurrentGameState";
import FillOption, { EMPTY, EMPTY_OPTION } from "../../types/FillOption";
import Game from "../../types/Game";
import Constraint from "../../types/Constraint";
import Cell from "../../types/Cell";
import { getCol, getRow } from "../../puzzles/common";

interface Action {
  game: Game;
  option: FillOption;
  type: string;
  isFilling: boolean;
  row: number;
  col: number;
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

function reverse(array: any[]) {
  return [...array].reverse();
}

function fillCell(
  { game, currentOption }: CurrentGameState,
  { row, col }: Action
): void {
  const { grid, rowsConstraints, colsConstraints } = game!!;
  const { cells } = grid;
  const cell = cells[row][col];
  cell.color = currentOption!!.value;
  checkConstraints(rowsConstraints[row], getRow(grid, row));
  checkConstraints(reverse(rowsConstraints[row]), reverse(getRow(grid, row)));

  checkConstraints(colsConstraints[col], getCol(grid, col));
  checkConstraints(reverse(colsConstraints[col]), reverse(getCol(grid, col)));
}

function checkConstraints(constraints: Constraint[], cells: Cell[]) {
  let cellIndex = 0;
  let count = 0;
  for (
    let constraintIndex = 0;
    constraintIndex < constraints.length;
    constraintIndex++
  ) {
    while (cells[cellIndex].color === EMPTY) {
      cellIndex++;
    }

    if (constraints[constraintIndex].completed) {
      cellIndex += constraints[constraintIndex].count;
      continue;
    }

    while (cells[cellIndex].color === constraints[constraintIndex].color) {
      cellIndex++;
      count++;
    }

    if (count === constraints[constraintIndex].count) {
      constraints[constraintIndex].completed = true;
      count = 0;
    } else {
      break;
    }
  }
}

const reducers = {
  [SET_FILLING]: setFilling,
  [SET_GAME]: setGame,
  [SET_FILL_OPTION]: setFillOption,
  [FILL_CELL]: fillCell
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

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
