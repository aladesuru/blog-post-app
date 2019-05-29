import React, { Component } from "react";
import axios from "axios";

//import components
import HeroArea from "./components/HeroArea";
import Layout from "./components/Layout";
import Filter from "./components/Filter";
import PostCardList from "./components/PostCardList";
import LoadingScreen from "./components/LoadingScreen";
import ErrorComponent from "./components/ErrorComponent";

class App extends Component {
  state = {
    post: [],
    filteredPost: [],
    isLoading: true,
    error: false
  };

  componentDidMount() {
    this.FetchPostFrmAPI();
  }
  // method use to fetch the data
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
        this.setState({
          error: true
        });
      });
  };

  // callback funtion as props for the production list component
  filterPost = qryString => {
    this.FetchPostFrmAPI();
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

  render() {
    return (
      <div className="App">
        {this.state.error ? (
          <ErrorComponent content="Error fetching and parsing data please try again later" />
        ) : (
          <div>
            {this.state.isLoading ? (
              <LoadingScreen />
            ) : (
              <div>
                <HeroArea />
                <Layout>
                  <Filter filterPost={this.filterPost} />
                  <PostCardList
                    listOfPost={this.state.post}
                    filteredPost={this.state.filteredPost}
                  />
                </Layout>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default App;
