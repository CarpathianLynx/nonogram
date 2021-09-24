import React from "react";
import Constraint from "../types/Constraint";

interface ConstraintsProps {
  constraints: Constraint[][];
  extraClasses: {
    container: string;
    group: string;
    constraint: string;
  };
}

const ConstraintsWidget: React.FC<ConstraintsProps> = ({
  constraints,
  extraClasses,
}) => {
  return (
    <div className={extraClasses.container}>
      {constraints.map((constraintGroup, i) => (
        <div key={`constraint-group-${i}`} className={extraClasses.group}>
          {constraintGroup.map((constraint, j) => {
            const { color, count } = constraint;
            return (
              <div
                key={`constraint-${i}-${j}`}
                className={`${extraClasses.constraint} ${color}`}
              >
                {count}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default ConstraintsWidget;
