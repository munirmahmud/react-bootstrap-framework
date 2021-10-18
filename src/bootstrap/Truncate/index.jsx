import React from "react";
import { Header, Descriptation } from "./Truncate.styles.js";

const Truncate = ({ header, headerLength, str, number, ...rest }) => {
  return (
    <>
      {header && (
        <Header {...rest}>
          {header.length > 10
            ? header.substring(0, headerLength) + "..."
            : header}
        </Header>
      )}

      {str && (
        <Descriptation {...rest}>
          {str.length > 10 ? str.substring(0, number) + "..." : str}
        </Descriptation>
      )}
    </>
  );
};

export default Truncate;
