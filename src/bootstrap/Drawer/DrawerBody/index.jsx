import React from "react";
import "./drawerbody.styles.css";

const DrawerBody = ({ children, className, ...rest }) => {
  return (
    <div className={`drawer-body ${className ? className : ""}`} {...rest}>
      {children}
    </div>
  );
};

export default DrawerBody;
