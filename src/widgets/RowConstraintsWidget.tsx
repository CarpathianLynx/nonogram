import React from "react";
import Constraint from "../types/Constraint";
import "./RowConstraintsWidget.css";

interface RowConstraintsProps {
  constraints: Constraint[][];
}

const RowConstraintsWidget: React.FC<RowConstraintsProps> = ({
  constraints,
}) => {
  return (
    <div className={"row-constraints"}>
      {constraints.map((constraintGroup) => (
        <div className={"row-constraint-group"}>
          {constraintGroup.map((constraint) => {
            const { color, count } = constraint;
            return <div className={`row-constraint ${color}`}>{count}</div>;
          })}
        </div>
      ))}
    </div>
  );
};

export default RowConstraintsWidget;
