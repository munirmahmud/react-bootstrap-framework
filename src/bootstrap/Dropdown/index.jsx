import { React, useEffect, useState } from "react";
import "./Dropdown.styles.css";

const Dropdown = ({ text, dropdownText }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.onclick = function (event) {
      if (event.target.className !== "text" && show) {
        setShow((prevState) => !prevState);
      }
    };
  }, [show]);

  return (
    <button className="dropdown">
      <div className="text" onClick={() => setShow((prevState) => !prevState)}>
        Dropdown Link
      </div>
      {show && (
        <ul className="dropDownMenu">
          <li className="dropDownMenuList">
            <a href="/" className="dropDownMenuListLink">
              test
            </a>
          </li>
          <li className="dropDownMenuList">
            <a href="/" className="dropDownMenuListLink">
              test
            </a>
          </li>
          <li className="dropDownMenuList">
            <a href="/" className="dropDownMenuListLink">
              test
            </a>
          </li>
        </ul>
      )}
    </button>
  );
};

export default Dropdown;
