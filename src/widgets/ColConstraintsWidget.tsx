import React from "react";
import Constraint from "../types/Constraint";
import "./col-constraints-widget.css";
import ConstraintsWidget from "./ConstraintsWidget";

interface ColConstraintsProps {
  constraints: Constraint[][];
}

const extraClasses = {
  container: "col-constraints",
  group: "col-constraint-group",
  constraint: "col-constraint",
};

const ColConstraintsWidget: React.FC<ColConstraintsProps> = ({
  constraints,
}) => {
  return (
    <ConstraintsWidget constraints={constraints} extraClasses={extraClasses} />
  );
};

export default ColConstraintsWidget;
