import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home";
import CreateContent from "../CreateContent";
import CreateBlog from "../CreateBlog";
import { Footer, Header } from "../../components";
import './mainapp.scss';

const MainApp = () => {
  return (
    <div className="main-app--wrapper">
      <Header/>
      <div className="content-wrapper">
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
      </div>
      
      <Footer/>
    </div>
  );
};

export default MainApp;
