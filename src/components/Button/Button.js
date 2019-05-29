import React from "react";
// import PropTypes from 'prop-types';

const Button = ({ buttonLabel, bgColor, color, title }) => {
  return (
    <button
      type="button"
      className="btn"
      title={title}
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
  title: "general"
};

export default Button;
