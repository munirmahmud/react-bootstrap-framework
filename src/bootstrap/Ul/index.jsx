import React from "react";
import "./Ul.styles.css";

function Ul({ children }) {
  return <ul className="navbar-nav ms-auto mb-2 mb-lg-0">{children}</ul>;
}

export default Ul;
