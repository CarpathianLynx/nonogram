import React from "react";

type ExtraClasses = any;

interface WithExtraClassesProps {
  extraClasses?: any;
}

export default function withExtraClasses<P>(extraClasses: ExtraClasses) {
  return function (Widget: React.ComponentType<P & WithExtraClassesProps>) {
    function Wrapper(props: P) {
      return <Widget extraClasses={extraClasses} {...props} />;
    }
    Wrapper.Widget = Widget;
    return Wrapper;
  };
}
