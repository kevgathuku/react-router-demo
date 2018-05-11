import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import PostDetails from "./PostDetails";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/posts/:postId" component={PostDetails} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
