import React from "react";

const ErrorComponent = ({ content }) => {
  return (
    <div className="error-container">
      <p>{content} </p>
    </div>
  );
};

export default ErrorComponent;
