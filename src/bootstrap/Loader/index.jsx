import React from "react";
import "./loader.styles.css";

{
  /* <div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-success" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-danger" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-warning" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-info" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-light" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-dark" role="status">
  <span class="visually-hidden">Loading...</span>
</div> */
}

const Loader = ({
  primary,
  secondary,
  success,
  danger,
  warning,
  info,
  light,
  dark,
  border,
  role,
  ...rest
}) => {
  const spinStyles = primary
    ? "primary"
    : secondary
    ? "secondary"
    : success
    ? "success"
    : danger
    ? "danger"
    : warning
    ? "warning"
    : info
    ? "info"
    : light
    ? "light"
    : dark
    ? "dark"
    : "primary";

  const borderSize =
    border === "sm"
      ? "border-sm"
      : border === "md"
      ? "border-md"
      : border === "lg"
      ? "border-lg"
      : "";

  const spnningRole = role ? role : "status";

  return (
    <div
      className={`spinner-border ${borderSize} ${spinStyles}`}
      role={spnningRole}
      {...rest}
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Loader;
