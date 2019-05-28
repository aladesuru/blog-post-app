import React, { Component } from "react";
import axios from "axios";
// import "./App.css";

//import components
import HeroArea from "./components/HeroArea";
import Layout from "./components/Layout";
import Filter from "./components/Filter";
import PostCardList from "./components/PostCardList";
import LoadMorePost from "./components/LoadMorePost";

class App extends Component {
  state = {
    post: [],
    filteredPost: [],
    isLoading: true,
    error: false,
    limit: 6
  };

  componentDidMount() {
    this.FetchPostFrmAPI();
  }

  FetchPostFrmAPI = () => {
    axios
      .get("http://private-cc77e-aff.apiary-mock.com/posts")
      .then(response => {
        // handle success
        this.setState({
          post: response.data.items,
          isLoading: false
        });
      })
      .catch(error => {
        // handle error: for the purpose of the code test ,in real world is different
        console.log("Error fetching and parsing data", error);
        this.setState({
          error: true
        });
      });
  };

  filterPost = qryString => {
    console.log("target id is ", qryString);
    let result;
    if (qryString === "twitter") {
      result = this.state.post.filter(
        post => post.service_name.toLowerCase() === qryString.toLowerCase()
      );
    } else if (qryString === "instagram") {
      result = this.state.post.filter(
        post => post.service_name.toLowerCase() === qryString.toLowerCase()
      );
    } else {
      result = this.state.post.filter(
        post => post.service_name.toLowerCase() === qryString.toLowerCase()
      );
    }
    if (result.length > 0) {
      this.setState({
        filteredPost: result
      });
    }
  };

  loadMorePost = () => {
    this.setState(prevState => {
      return {
        limit: prevState.limit + 6
      };
    });
  };

  render() {
    return (
      <div className="App">
        <HeroArea />
        {this.state.isLoading ? (
          "Loading"
        ) : (
          <Layout>
            <Filter filterPost={this.filterPost} />
            <PostCardList
              listOfPost={this.state.post}
              filteredPost={this.state.filteredPost}
              limit={this.state.limit}
            />
            {this.state.limit < this.state.post.length && (
              <LoadMorePost loadMorePost={this.loadMorePost} />
            )}
          </Layout>
        )}
      </div>
    );
  }
}

export default App;
