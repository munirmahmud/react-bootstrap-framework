import React from "react";
import "./button.styles.css";

export const Button = ({
  type,
  className,
  color,
  children,
  outline,
  ...rest
}) => {
  const btnType = type ? type : "submit";
  const btnClass = className ? `btn-${className}` : "btn-primary";

  const btnColor =
    color === "primary"
      ? "btn-primary"
      : color === "secondary"
      ? "btn-secondary"
      : color === "success"
      ? "btn-success"
      : color === "danger"
      ? "btn-danger"
      : color === "warning"
      ? "btn-warning"
      : color === "info"
      ? "btn-info"
      : color === "light"
      ? "btn-light"
      : color === "dark"
      ? "btn-dark"
      : color === "black"
      ? "btn-black"
      : color === "white"
      ? "btn-white"
      : "btn-primary";

  const btnOutline =
    outline === "primary"
      ? "btn-outline-primary"
      : outline === "secondary"
      ? "btn-outline-secondary"
      : outline === "success"
      ? "btn-outline-success"
      : outline === "danger"
      ? "btn-outline-danger"
      : outline === "warning"
      ? "btn-outline-warning"
      : outline === "info"
      ? "btn-outline-info"
      : outline === "light"
      ? "btn-outline-light"
      : outline === "dark"
      ? "btn-outline-dark"
      : "btn-outline-gray";

  return (
    <>
      <button
        type={btnType}
        className={`btn ${outline ? btnOutline : btnColor}`}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};
export default Button;
