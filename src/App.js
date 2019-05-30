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
    isLoading: true,
    error: false,
    qryString: ""
  };

  componentDidMount() {
    this.FetchPostFrmAPI();
  }

  // method use to fetch the data
  FetchPostFrmAPI = () => {
    axios
      .get("https://private-cc77e-aff.apiary-mock.com/posts")
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

  // callback funtion as props for the filter component to update qryString
  filterPost = qryStringValue => {
    this.FetchPostFrmAPI();
    if (qryStringValue !== " " && qryStringValue) {
      this.setState({
        qryString: qryStringValue
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
                    qryString={this.state.qryString}
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
