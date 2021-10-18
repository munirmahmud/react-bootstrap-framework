import React from "react";
import "./Container.styles.css";

const Container = ({ children, sm = "", md = "", lg = "", fullWidth = "" }) => {
  const containerSM = sm && "container-sm";
  const containerMD = md && "container-md";
  const containerLG = lg && "container-lg";
  const fluidContainer = fullWidth && "container-fluid";

  return (
    <div
      className={`${containerSM} ${containerMD} ${containerLG} ${fluidContainer}`}
    >
      {children}
    </div>
  );
};

export default Container;
