import React from "react";
// import PropTypes from 'prop-types';

const Button = ({ buttonLabel, bgColor, color, id }) => {
  return (
    <button
      type="button"
      className="btn"
      id={id}
      style={{ backgroundColor: bgColor, color: color }}
    >
      {buttonLabel}
    </button>
  );
};

Button.defaultProps = {
  buttonLabel: "Manual",
  color: "#fff",
  bgColor: "#e62718",
  id: "all"
};

export default Button;
