import React, { useRef } from "react";
import "./drawer.styles.css";

const Drawer = ({ children, open, onClose, title, ...rest }) => {
  const drawerRef = useRef();

  if (open) {
    let div = `<div class="drawer-backdrop fade show"></div>`;

    document.querySelector("body").style.overflow = "hidden";
    document.querySelector("body").style.paddingRight += "17px";

    drawerRef.current.insertAdjacentHTML("afterend", div);
  } else {
    drawerRef.current?.nextElementSibling.remove();
    document.querySelector("body").style = "";
  }

  const handleRemove = (e) => {
    // console.log(!drawerRef.current.closest(".drawer-start.show"));

    const isOutside = !drawerRef.current.closest(".drawer-start.show");
    const isSibling = !drawerRef.current.nextElementSibling;

    console.log("isSibling", !isSibling);
    console.log("isOutside", !isOutside);

    if (!drawerRef.current.nextElementSibling) {
      console.log("out side modal");
    } else {
      console.log("inside modal");
    }

    // if (!e.target.closest(".drawer-start")) {
    //   console.log("Not modal");
    // } else {
    //   console.log(" modal");
    // }
  };

  return (
    <div ref={drawerRef}>
      <div
        className={`drawer drawer-start ${open ? "show" : ""}`}
        style={open ? { visibility: "visible" } : { visibility: "hidden" }}
        onClick={handleRemove}
        {...rest}
      >
        {(title || onClose) && (
          <div className="drawer-header">
            {title && <h5 className="drawer-title">{title}</h5>}

            {onClose && (
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="drawer"
                aria-label="Close"
                onClick={onClose}
              ></button>
            )}
          </div>
        )}

        {children}
      </div>
    </div>
  );
};

export default Drawer;
