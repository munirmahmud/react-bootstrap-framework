import React from "react";
import "./TextField.styles.css";

function TextField({ img = "", type = "text", placeholder = "", alt = "" }) {
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
        placeholder={placeholder}
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </div>
  );
}

export default TextField;
