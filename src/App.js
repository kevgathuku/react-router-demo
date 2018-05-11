import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { posts } from "./posts";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: posts
    };
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Blog Posts</h1>
        </header>
        <div>
          {posts.map(post => (
            <div key={post.id}>
              <Link to={`/posts/${post.id}`}>
                <h4>{post.title}</h4>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
