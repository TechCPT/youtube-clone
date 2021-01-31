import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      
      <Router>
        <Switch>
          <Route path="/search" />
          <Route path="/" />
        </Switch>
      </Router>

      <Header />

      <div className="app__page">
        <Sidebar />
        <RecommendedVideos />
      </div>

    </div>
  );
}

export default App;
