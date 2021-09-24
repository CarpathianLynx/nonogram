import React from "react";
import Constraint from "../types/Constraint";
import "./row-constraints-widget.css";
import ConstraintsWidget from "./ConstraintsWidget";

interface RowConstraintsProps {
  constraints: Constraint[][];
}

const extraClasses = {
  container: "row-constraints",
  group: "row-constraint-group",
  constraint: "row-constraint",
};

const RowConstraintsWidget: React.FC<RowConstraintsProps> = ({
  constraints,
}) => {
  return (
    <ConstraintsWidget constraints={constraints} extraClasses={extraClasses} />
  );
};

export default RowConstraintsWidget;
