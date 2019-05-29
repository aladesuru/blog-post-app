import React from "react";
import PropTypes from "prop-types";

// import component
import Button from "../Button";

const LoadMorePost = ({ loadMorePost }) => {
  return (
    <div className="loadmore-post" onClick={loadMorePost}>
      <Button buttonLabel="Load More Post" bgColor="#358ace" />
    </div>
  );
};

LoadMorePost.propTypes = {
  loadMorePost: PropTypes.func.isRequired
};

export default LoadMorePost;
