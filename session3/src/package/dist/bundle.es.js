import React, { useState } from 'react';
import propTypes from 'prop-types';

/**
 * Will log any param
 * @param {any} param
 */
const logger = param => {
  console.log(param);
};

const Button = ({
  hasBorder,
  children,
  isSwitch
}) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (isSwitch) {
      setClicked(!clicked);
    }
  };

  const renderSwitchState = () => {
    return clicked ? "on" : "off";
  };

  return /*#__PURE__*/React.createElement("button", {
    onClick: handleClick,
    style: {
      border: hasBorder ? "1px solid #ccc" : "none !important"
    }
  }, typeof children === "function" ? children(clicked) : children, " ", isSwitch && renderSwitchState());
};

Button.propTypes = {
  hasBorder: propTypes.bool,
  isSwitch: propTypes.bool,
  children: propTypes.oneOfType([propTypes.node, propTypes.func])
};

/**
 * Will say hello
 * @param {string} name
 */

const useSayHello = name => {
  logger(`Hello, ${name}`);
};

export { Button, logger, useSayHello };
