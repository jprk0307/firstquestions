// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import PostDetails from "./components/PostDetails";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:postId" element={<PostDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
