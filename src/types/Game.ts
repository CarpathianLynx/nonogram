import Grid from "./Grid";
import Constraint from "./Constraint";
import Color from "./Color";

export default interface Game {
  grid: Grid;
  colors: Color[];
  rowsConstraints: Constraint[][];
  colsConstraints: Constraint[][];
}
