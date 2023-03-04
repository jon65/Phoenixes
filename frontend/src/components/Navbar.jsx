import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Navbar = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/register">
                About
              </Link>
            </li>
            <li>
              <Link to="/login">
                Users
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}
export default Navbar;