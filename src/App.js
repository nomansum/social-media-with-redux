import React, { Component } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/profile/:userId" element={<ProfilePage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
