import React, { Component } from "react";

// import component
import PostCard from "../PostCard";
import LoadMorePost from "../LoadMorePost";

class PostCardList extends Component {
  state = {
    limit: 6
  };

  loadMorePost = () => {
    this.setState(prevState => {
      return {
        limit: prevState.limit + 6
      };
    });
  };

  render() {
    const { listOfPost, filteredPost } = this.props;
    //callback function for sort method
    const latestToOldDate = (a, b) => {
      return Date.parse(b.item_published) - Date.parse(a.item_published);
    };
    // check which post to list
    let post = filteredPost.length > 0 ? filteredPost : listOfPost;

    return (
      <div className="postcardlist-container">
        {post
          .sort(latestToOldDate)
          .slice(0, this.state.limit)
          .map(post => {
            let content;
            if (post.item_data.caption) {
              content = post.item_data.caption;
            } else if (post.item_data.tweet) {
              content = post.item_data.tweet;
            } else {
              content = post.item_data.text;
            }

            let publishDate = post.item_published.split(" ");
            publishDate = publishDate[0];
            return (
              <PostCard
                key={post.item_id}
                url={post.item_data.image_url}
                text={content}
                header={post.item_name}
                link={post.item_data.link}
                publishDate={publishDate}
                serviceName={post.service_name}
              />
            );
          })}

        {this.state.limit < post.length && (
          <LoadMorePost loadMorePost={this.loadMorePost} />
        )}
      </div>
    );
  }
}
export default PostCardList;
