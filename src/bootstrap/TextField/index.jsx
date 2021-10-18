import React from "react";
import "./TextField.styles.css";

const TextField = ({ img = "", type = "text", placeholder = "", alt = "" }) => {
  const placeholderText = placeholder && `placeholder=${placeholder}`;
  console.log(placeholder);
  console.log(placeholderText);

  return (
    <div className="input-group mb-3">
      {img && (
        <span className="input-group-text" id="basic-addon1">
          <img src={img} alt={alt} />
        </span>
      )}
      <input
        type={type}
        className="form-control"
        placeholderText
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </div>
  );
};

export default TextField;
