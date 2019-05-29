import React from "react";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return <article className="container">{children}</article>;
};

Layout.defaultProps = {
  children: "Place your child component here"
};

Layout.prototype = {
  children: PropTypes.string.isRequired
};

export default Layout;
