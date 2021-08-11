import React from "react";

function NavItem({ children, ...rest }) {
  return <li {...rest}>{children}</li>;
}

export default NavItem;
