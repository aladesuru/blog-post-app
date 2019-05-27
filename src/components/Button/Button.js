import React from "react";
// import PropTypes from 'prop-types';

const Button = ({ buttonLabel, bgColor, color }) => {
  return (
    <button className="btn" style={{ backgroundColor: bgColor, color: color }}>
      {buttonLabel}
    </button>
  );
};

Button.defaultProps = {
  buttonLabel: "Manual",
  color: "#fff",
  bgColor: "#e62718"
};

export default Button;
