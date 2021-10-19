import React from "react";
import "./Container.styles.css";

const Container = ({
  children,
  sm = "",
  md = "",
  lg = "",
  fullWidth = "",
  ...rest
}) => {
  const containerClass = fullWidth
    ? "container-fluid"
    : lg
    ? "container-lg"
    : md
    ? "container-md"
    : sm
    ? "container-sm"
    : "container";

  return (
    <div className={`${containerClass}`} {...rest}>
      {children}
    </div>
  );
};

export default Container;
