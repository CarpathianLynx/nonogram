import React from "react";
import Constraint from "../types/Constraint";
import "./ColConstraintsWidget.css";

interface RowConstraintsProps {
  constraints: Constraint[][];
}

const ColConstraintsWidget: React.FC<RowConstraintsProps> = ({
  constraints,
}) => {
  return (
    <div className={"col-constraints"}>
      {constraints.map((constraintGroup) => (
        <div className={"col-constraint-group"}>
          {constraintGroup.map((constraint) => {
            const { color, count } = constraint;
            return <div className={`col-constraint ${color}`}>{count}</div>;
          })}
        </div>
      ))}
    </div>
  );
};

export default ColConstraintsWidget;
