import { React, useRef, useState } from "react";
import "./Dropdown.styles.css";

const Dropdown = ({ text, dropdownText }) => {
  const [show, setShow] = useState(false);
  const modalRef = useRef();
  console.log("test", modalRef.current);

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShow(false);
    }
  };

  return (
    <button className="dropdown">
      <div className="text" onClick={() => setShow((prevState) => !prevState)}>
        Dropdown Link
      </div>
      {show && (
        <ul className="dropDownMenu" ref={modalRef} onClick={closeModal}>
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
