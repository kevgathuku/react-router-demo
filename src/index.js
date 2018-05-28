import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Home from "./Home";
import PostDetails from "./PostDetails";
import registerServiceWorker from "./registerServiceWorker";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/posts/:postId" component={PostDetails} />
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
