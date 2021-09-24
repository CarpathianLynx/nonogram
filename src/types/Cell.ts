import Color from "./Color";

export default interface Cell {
  color?: Color;
  row: number;
  col: number;
}
