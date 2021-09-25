import React from "react";
import Constraint from "../types/Constraint";
import classes from "./classes";
import "./styles/constraints-widget.css";

export interface ConstraintsProps {
	constraints: Constraint[][];
	extraClasses?: {
		container: string;
		group: string;
		constraint: string;
	};
}

const ConstraintsWidget: React.FC<ConstraintsProps> = ({
	constraints,
	extraClasses
}) => {
	return (
		<div className={extraClasses?.container}>
			{constraints.map((constraintGroup, i) => (
				<div
					key={`constraint-group-${i}`}
					className={extraClasses?.group}
				>
					{constraintGroup.map((constraint, j) => {
						const { color, count, completed } = constraint;
						return (
							<div
								key={`constraint-${i}-${j}`}
								className={classes(
									extraClasses?.constraint,
									color,
									{
										completed
									}
								)}
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
