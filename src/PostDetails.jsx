import React, { Component } from "react";
import { Link } from "react-router-dom";

class PostDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postDetails: {
        title: "",
        body: ""
      },
      recommendedPosts: []
    };

    this.fetchPostData();
  }

  componentDidMount() {
    this.fetchRecommendedPosts();
  }

  componentDidUpdate(prevProps) {
    const {
      match: {
        params: { postId }
      }
    } = this.props;
    const prevPostId = prevProps.match.params.postId;
    if (prevPostId !== postId) {
      this.fetchPostData();
    }
  }

  fetchPostData = async () => {
    const {
      match: {
        params: { postId }
      }
    } = this.props;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const json = await response.json();

    this.setState({
      postDetails: json
    });
  };

  fetchRecommendedPosts = () => {
    const rawData = window.localStorage.getItem("cachedLocalPosts");
    const recommendedPosts = JSON.parse(rawData);

    this.setState({
      recommendedPosts
    });
  };

  render() {
    const { recommendedPosts } = this.state;
    return (
      <div className="App container-fluid">
        <header className="App-header">
          <h1 className="App-title">{this.state.postDetails.title}</h1>
        </header>
        <p className="lead">{this.state.postDetails.body}</p>
        <div>
          <h4>Recommended Posts</h4>
          {recommendedPosts.slice(10, 13).map(post => (
            <div key={post.id}>
              <Link to={`/posts/${post.id}`}>
                <p>{post.title}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PostDetails;
