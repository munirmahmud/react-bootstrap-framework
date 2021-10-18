import React from "react";
import "./Button.styles.css";

export const Button = ({
  type,
  bg,
  className,
  spacing,
  icon,
  text,
  ...styles
}) => {
  const btnType = type ? type : "submit";
  const btnClass = className ? `btn btn-${className}` : "";

  return (
    <>
      <button type={btnType} className={`commonButton ${btnClass}`} {...styles}>
        {icon && <img src={icon} alt="icon" className="IconImage" />}
        {text}
      </button>
    </>
  );
};
export default Button;
