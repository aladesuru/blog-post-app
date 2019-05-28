import React from "react";

import Button from "../Button";

const Filter = ({ filterPost }) => {
  const twitterClick = e => {
    filterPost(e.target.id);
  };

  return (
    <div className="filter-container clearfix">
      <div className="collapse">
        <input type="checkbox" id="toggle-collapse" />
        <div className="filter-heading">
          <h1>
            <span>Posts Category</span>
            <label htmlFor="toggle-collapse">
              <span className="icon" />
            </label>
          </h1>
        </div>
        <div className="filter-button-container" onClick={twitterClick}>
          <Button id="manual" />
          <Button buttonLabel="Twitter" bgColor="#00acee" id="twitter" />
          <Button buttonLabel="Instagram" bgColor="#3f729b" id="instagram" />
        </div>
      </div>
    </div>
  );
};

export default Filter;
