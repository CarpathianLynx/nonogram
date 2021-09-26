import Color from "./Color";

export default interface Constraint {
	id: number;
	color: Color;
	count: number;
	completed: boolean;
}

export function setCompleted(constraint: Constraint, completed: boolean) {
	constraint.completed = completed;
}
