import React from "react";

// import component
import Button from "../Button";

const LoadMorePost = ({ loadMorePost }) => {
  return (
    <div className="loadmore-post" onClick={loadMorePost}>
      <Button buttonLabel="Load More Post" bgColor="#777" />
    </div>
  );
};

export default LoadMorePost;
