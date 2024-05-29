import React from "react";
import Home from "./Pages/Home/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Post from "./Pages/Post/Post";
import "./App.css";
import Profile from "./Pages/Profile/Profile";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

const App = () => {
  const authUser = JSON.parse(localStorage.getItem("user"));
  // basename="/m-snippetter-in-frontend"
  // https://chem0903.github.io/m-snippetter-in-frontend

  return (
    <Router basename="/m-snippetter-in-frontend">
      <Routes>
        <Route path="*" element={authUser ? <Home /> : <Login />} />
        <Route
          path="/post"
          element={authUser ? <Post /> : <Navigate to="/" />}
        />
        <Route
          path="/profile/:id"
          element={authUser ? <Profile /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={authUser ? <Navigate to="/" /> : <Register />}
        />
      </Routes>
    </Router>
  );
};

export default App;
