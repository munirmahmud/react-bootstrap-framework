import React from "react";
import "./Col.styles.css";

const Col = ({ children, sm = "", md = "", lg = "", xl = "" }) => {
  const smColumn = sm && sm;
  const mdColumn = md && md;

  return (
    <div
      className={`${smColumn && `col-sm-${smColumn}`} ${
        mdColumn && `col-md-${mdColumn}`
      }`}
    >
      {children}
    </div>
  );
};

export default Col;
