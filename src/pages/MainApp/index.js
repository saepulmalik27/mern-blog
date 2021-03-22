import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home";
import CreateContent from "../CreateContent";
import CreateBlog from "../CreateBlog";

const MainApp = () => {
  return (
    <div>
      <p>Header</p>
      <Router>
        <Switch>
          <Route path="/create-blog">
            <CreateBlog />
          </Route>
          <Route path="/create-content">
            <CreateContent />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <p>Footer</p>
    </div>
  );
};

export default MainApp;
