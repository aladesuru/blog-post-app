import React from "react";
import PropTypes from "prop-types";

const Image = ({ url }) => {
  return <img src={url} alt="post" />;
};

Image.prototype = {
  url: PropTypes.string.isRequired
};

export default Image;
