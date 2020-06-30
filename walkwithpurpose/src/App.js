import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./css/wwp_homepage.css";
import "./css/profile.css";
import Navbar from "./components/navbar";
import Home from "./components/homepage";
import Profile from "./components/profile";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
      </div>
    </BrowserRouter>
  );
}

export default App;
