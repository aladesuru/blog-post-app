import React from "react";
import PropTypes from "prop-types";
import alternativeImage from "../../assets/images/slider-image-1.jpg";

const handleOnError = e => {
  e.target.src = alternativeImage;
};

const Image = ({ url }) => {
  return <img src={url} alt="post" onError={handleOnError} />;
};

Image.propTypes = {
  url: PropTypes.string.isRequired
};

export default Image;
