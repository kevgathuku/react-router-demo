import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };

    this.fetchInitialData();
  }

  fetchInitialData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await response.json();

    this.setState({
      posts: json
    });

    // Persist the posts to localstorage
    window.localStorage.setItem("cachedLocalPosts", JSON.stringify(json));
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="App container-fluid">
        <header className="App-header">
          <h1 className="App-title">Blog Posts</h1>
        </header>
        <div>
          {posts.slice(0, 3).map(post => (
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
