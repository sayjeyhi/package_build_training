import React, { useState } from "react";
import propTypes from "prop-types";
import { StyledButton } from "./styles";

const Button = ({ textVariant, variant, size, children, isSwitch }) => {
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
    <StyledButton onClick={handleClick} className={}>
      {typeof children === "function" ? children(clicked) : children}{" "}
      {isSwitch && renderSwitchState()}
    </StyledButton>
  );
};

Button.propTypes = {
  hasBorder: propTypes.bool,
  isSwitch: propTypes.bool,
  children: propTypes.oneOfType([propTypes.node, propTypes.func]),
  textVariant: propTypes.oneOf(["Type1", "Type2", "micro"]),
};

export default Button;
