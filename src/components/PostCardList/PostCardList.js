import React from "react";

// import component
import PostCard from "../PostCard";

const PostCardList = ({ listOfPost }) => {
  console.log(listOfPost);
  return (
    <div className="postcardlist-container">
      {listOfPost.map(post => {
        let content;
        let pubDate = Date.parse(post.item_published);
        console.log(typeof pubDate);
        if (post.item_data.caption) {
          content = post.item_data.caption;
        } else if (post.item_data.tweet) {
          content = post.item_data.tweet;
        } else {
          content = post.item_data.text;
        }
        return (
          <PostCard
            key={post.item_id}
            url={post.item_data.image_url}
            text={content}
            header={post.item_name}
            link={post.item_data.link}
            publishDate={post.item_published}
            serviceName={post.service_name}
          />
        );
      })}
    </div>
  );
};

export default PostCardList;
