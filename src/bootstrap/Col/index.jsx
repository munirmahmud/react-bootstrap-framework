import React from "react";
import "./Col.styles.css";

const Col = (props) => {
  const {
    children,
    sm = "",
    md = "",
    lg = "",
    xl = "",
    xxl = "",
    className = "",
    ...rest
  } = props;

  const smColumn = sm && sm;
  const mdColumn = md && md;
  const lgColumn = lg && lg;
  const xlColumn = xl && xl;
  const xxlColumn = xxl && xxl;

  return (
    <div
      className={`${smColumn && `col-sm-${smColumn}`} ${
        mdColumn && `col-md-${mdColumn}`
      } ${lgColumn && `col-lg-${lgColumn}`} ${
        xlColumn && `col-xl-${xlColumn}`
      } ${xxlColumn && `col-xxl-${xxlColumn}`} ${className && className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Col;
