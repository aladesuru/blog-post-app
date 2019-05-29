import React from "react";
import PropTypes from "prop-types";

import Button from "../Button";

const Filter = ({ filterPost }) => {
  const postCategoryClick = e => {
    filterPost(e.target.title);
  };

  return (
    <div className="filter-container clearfix">
      <div className="collapse">
        <input type="checkbox" id="toggle-collapse" />
        <div className="filter-heading">
          <h1>
            <span>Posts Category</span>
            <label htmlFor="toggle-collapse" className="icon" />
          </h1>
        </div>
        <div className="filter-button-container" onClick={postCategoryClick}>
          <Button title="manual" />
          <Button buttonLabel="Twitter" bgColor="#00acee" title="twitter" />
          <Button buttonLabel="Instagram" bgColor="#3f729b" title="instagram" />
        </div>
      </div>
    </div>
  );
};

Filter.prototype = {
  filterPost: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Filter;
