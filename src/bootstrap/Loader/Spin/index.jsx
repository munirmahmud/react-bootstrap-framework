import React from "react";
import "./spin.styles.css";

const Spin = ({ borderSize, spinStyles, spnningRole, className, ...rest }) => {
  const classes = [`spinner-border ${spinStyles} ${borderSize} ${className}`];

  return (
    <div className={classes} role={spnningRole} {...rest}>
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Spin;
