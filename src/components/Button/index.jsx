import React from "react";
import PropTypes from "prop-types";

import callAlert from "~/constants/myAlert";

function Button(props) {
  return <button onClick={callAlert}>Click me!</button>;
}

Button.propTypes = {};

export default Button;
