import React from "react";
import "./button.styles.css";

export const Button = ({
  type,
  bg,
  className,
  spacing,
  icon,
  children,
  ...rest
}) => {
  const btnType = type ? type : "submit";
  const btnClass = className ? `btn btn-${className}` : "";

  return (
    <>
      <button type={btnType} className={btnClass} {...rest}>
        {icon && <img src={icon} alt="icon" className="icon-img" />}
        {children}
      </button>
    </>
  );
};
export default Button;
