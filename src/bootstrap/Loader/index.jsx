import React from "react";
import "./loader.styles.css";
import Spin from "./Spin";
import SpinGrow from "./SpinGrow";

const Loader = ({
  className,
  type,
  primary,
  secondary,
  success,
  danger,
  warning,
  info,
  light,
  dark,
  border,
  left,
  center,
  right,
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
  const extraClassNames = className ? className : "";

  const position = left
    ? "text-start"
    : center
    ? "text-center"
    : right
    ? "text-end"
    : "";

  console.log("position", position);

  const displaySpinner = () => {
    if (type === "grow") {
      return (
        <>
          {position ? (
            <div className={position}>
              <SpinGrow
                spinStyles={spinStyles}
                borderSize={borderSize}
                spnningRole={spnningRole}
                className={extraClassNames}
                {...rest}
              />
            </div>
          ) : (
            <SpinGrow
              spinStyles={spinStyles}
              borderSize={borderSize}
              spnningRole={spnningRole}
              className={extraClassNames}
              {...rest}
            />
          )}
        </>
      );
    } else {
      return (
        <>
          {position ? (
            <div className={position}>
              <Spin
                spinStyles={spinStyles}
                borderSize={borderSize}
                spnningRole={spnningRole}
                className={extraClassNames}
                {...rest}
              />
            </div>
          ) : (
            <Spin
              spinStyles={spinStyles}
              borderSize={borderSize}
              spnningRole={spnningRole}
              className={extraClassNames}
              {...rest}
            />
          )}
        </>
      );
    }
  };

  return displaySpinner();
};

export default Loader;
