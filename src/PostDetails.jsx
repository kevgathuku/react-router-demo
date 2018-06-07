import React, { Component } from "react";
import { Link } from "react-router-dom";
import { allPosts, recommendedPosts } from "./posts";

class PostDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postDetails: {
        id: "",
        title: "",
        body: ""
      }
    };
  }

  componentDidUpdate(prevProps) {
    const {
      match: {
        params: { postId }
      }
    } = this.props;
    const prevPostId = prevProps.match.params.postId;
    if (prevPostId !== postId) {
      this.fetchPostData(postId);
    }
  }

  componentDidMount() {
    const {
      match: {
        params: { postId }
      }
    } = this.props;
    this.fetchPostData(postId);
  }

  fetchPostData = postId => {
    const post = allPosts.find(post => post.id == postId);
    this.setState({
      postDetails: post
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.postDetails.title}</h1>
        </header>
        <p className="lead">{this.state.postDetails.body}</p>
        <section>
          <h4>Recommended Posts</h4>
          {recommendedPosts.map(post => (
            <div key={post.id}>
              <Link to={`/posts/${post.id}`}>
                <p>{post.title}</p>
              </Link>
            </div>
          ))}
        </section>
      </div>
    );
  }
}

export default PostDetails;
