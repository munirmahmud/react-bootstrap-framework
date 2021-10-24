import React from "react";
import "./drawerfooter.styles.css";

const DrawerFooter = ({ children, className, ...rest }) => {
  return (
    <div className={`drawer-footer ${className ? className : ""}`} {...rest}>
      {children}
    </div>
  );
};

export default DrawerFooter;
