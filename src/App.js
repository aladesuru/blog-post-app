import React, { Component } from "react";
import axios from "axios";
// import "./App.css";

//import components
import HeroArea from "./components/HeroArea";
import Layout from "./components/Layout";
import Filter from "./components/Filter";
import PostCardList from "./components/PostCardList";

class App extends Component {
  state = {
    post: [],
    isLoading: true
  };

  componentDidMount() {
    this.performSearch();
  }
  performSearch = () => {
    // Make a request for a user with a given search term
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
      });
  };

  render() {
    return (
      <div className="App">
        <HeroArea />
        <Layout>
          <Filter />
          <PostCardList listOfPost={this.state.post} />
          {/* <PostCard />
          <PostCard />
          <PostCard /> */}
        </Layout>
      </div>
    );
  }
}

export default App;
