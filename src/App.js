import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import PostPage from "./Components/PostPage";
import Profile from "./Components/Profile";
import Sidebar from "./Components/Sidebar";
import Works from "./Components/Works";
import "./CSS/style.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="page">
          <Header />
          <Sidebar />
          <Switch>
            <Route path="/profile" component={Profile} />
            <Route path="/works" component={Works} />
            <Route path="/post" component={PostPage} />
            <Route path="/" component={MainContent} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
