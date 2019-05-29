import React from "react";
import PropTypes from "prop-types";

import SocialMediaIcon from "../SocialMediaIcon";

const Link = ({ link }) => {
  return (
    <a href={link} target="_blank">
      {link}
    </a>
  );
};

const PostCard = ({ url, text, publishDate, header, link, serviceName }) => {
  return (
    <article className="postcard-container">
      <header>
        <SocialMediaIcon serviceName={serviceName} />
        <div className="post-image">{/* <Image url={url} /> */}</div>
        <h2 className="post-header">
          {header}
          <div className="publish-date">
            Publish:
            <time datatime={publishDate} pubdate="pubdate">
              {publishDate}
            </time>
          </div>
        </h2>
      </header>
      <p className="post-text">{text}</p>
      <Link link={link} />
    </article>
  );
};

PostCard.prototype = {
  text: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  serviceName: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default PostCard;
