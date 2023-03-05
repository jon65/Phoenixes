import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

const Home = () => {

  return (
    <div className="App">
      <div>
        <h1>This is the home page</h1>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
        <li>
          <Link to="/hobby">Hobby</Link>
        </li>
      </div>
    </div>
  );
}

export default Home;
