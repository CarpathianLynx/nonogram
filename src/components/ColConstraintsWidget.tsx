import "./col-constraints-widget.css";
import ConstraintsWidget, { ConstraintsProps } from "./ConstraintsWidget";
import withExtraClasses from "./WithExtraClasses";

const extraClasses = {
	container: "col-constraints",
	group: "col-constraint-group",
	constraint: "col-constraint"
};

export default withExtraClasses<ConstraintsProps>(extraClasses)(
	ConstraintsWidget
);
