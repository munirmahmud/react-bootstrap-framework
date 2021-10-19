import React from "react";
import "./spingrow.styles.css";

const SpinGrow = ({
  borderSize,
  spinStyles,
  spnningRole,
  className,
  ...rest
}) => {
  const classes = [`spinner-grow ${spinStyles} ${borderSize} ${className}`];

  return (
    <div className={classes} role={spnningRole} {...rest}>
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default SpinGrow;
