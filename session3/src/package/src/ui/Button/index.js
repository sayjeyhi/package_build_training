import React, { useState } from "react";
import propTypes from "prop-types";

const Button = ({ hasBorder, children, isSwitch }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (isSwitch) {
      setClicked(!clicked);
    }
  };

  const renderSwitchState = () => {
    return clicked ? "on" : "off";
  };

  return (
    <button
      onClick={handleClick}
      style={{ border: hasBorder ? "1px solid #ccc" : "none !important" }}
    >
      {typeof children === "function" ? children(clicked) : children}{" "}
      {isSwitch && renderSwitchState()}
    </button>
  );
};

Button.propTypes = {
  hasBorder: propTypes.bool,
  isSwitch: propTypes.bool,
  children: propTypes.oneOfType([propTypes.node, propTypes.func]),
};

export default Button;
