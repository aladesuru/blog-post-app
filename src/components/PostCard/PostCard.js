import React from "react";

// import Image from "../Image";
// import image from "../../assets/images/slider-image-1.jpg";
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
            <time datatime="2011-10-15" pubdate="pubdate">
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

export default PostCard;
