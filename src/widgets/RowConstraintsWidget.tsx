import "./row-constraints-widget.css";
import ConstraintsWidget, { ConstraintsProps } from "./ConstraintsWidget";
import withExtraClasses from "./WithExtraClasses";

const extraClasses = {
  container: "row-constraints",
  group: "row-constraint-group",
  constraint: "row-constraint"
};

export default withExtraClasses<ConstraintsProps>(extraClasses)(
  ConstraintsWidget
);
