'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var propTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var propTypes__default = /*#__PURE__*/_interopDefaultLegacy(propTypes);

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
  const [clicked, setClicked] = React.useState(false);

  const handleClick = () => {
    if (isSwitch) {
      setClicked(!clicked);
    }
  };

  const renderSwitchState = () => {
    return clicked ? "on" : "off";
  };

  return /*#__PURE__*/React__default['default'].createElement("button", {
    onClick: handleClick,
    style: {
      border: hasBorder ? "1px solid #ccc" : "none !important"
    }
  }, typeof children === "function" ? children(clicked) : children, " ", isSwitch && renderSwitchState());
};

Button.propTypes = {
  hasBorder: propTypes__default['default'].bool,
  isSwitch: propTypes__default['default'].bool,
  children: propTypes__default['default'].oneOfType([propTypes__default['default'].node, propTypes__default['default'].func])
};

/**
 * Will say hello
 * @param {string} name
 */

const useSayHello = name => {
  logger(`Hello, ${name}`);
};

exports.Button = Button;
exports.logger = logger;
exports.useSayHello = useSayHello;
