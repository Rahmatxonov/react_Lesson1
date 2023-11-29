import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import ArticleList from "./components/ArticlesList";
import ArticleDetails from "./components/ArticleDetailsgit ";

function App() {
  return (
    <Router>
      <Route exact path="/" component={ArticleList} />
      <Route path="/article/:id" component={ArticleDetails} />
    </Router>
  );
}

export default App;
