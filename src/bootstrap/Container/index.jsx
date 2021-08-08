import React from "react";
import "./Container.styles.css";

const Container = ({ children, sm = "", md = "", lg = "" }) => {
  const containerSM = sm && "container-sm";
  const containerMD = md && "container-md";
  const containerLG = lg && "container-ld";

  return (
    <div className={`${containerSM} ${containerMD} ${containerLG}`}>
      {children}
    </div>
  );
};

export default Container;
