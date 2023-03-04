import React, { useState } from "react";
// import logo from './logo.svg';
import './App.css';
import  Login  from "./components/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import NavBar  from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Hobby from './components/Hobby';

function App() {
  // const [currentForm, setCurrentForm] = useState('login');

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }

  return (
    <div>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" exact element={<Home /> } />
        <Route path="/register" exact element={<Register /> } />
        <Route path="/login" exact element={<Login /> } />
        <Route path="/hobby" exact element={<Hobby /> } />
      </Routes>
    </div>
  );

}

export default App;