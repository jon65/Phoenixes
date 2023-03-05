import React, { useState } from "react";
import '../../src/App.css';
import classes from './Register.module.css';
import Input from './UI/Input';
import Button from './UI/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        pass,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "./userDetails";
        }
      });
  }

  return (
    <div className="App">
      <div className="auth-form-container">
        <img class="logo" src={require('./../img/logo.png')} alt="Frienderlies logo" />
        <h2 class="title">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" class="input" />
          <Input label="Password" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" class="input" />
          <Button type="submit" class="login">Log In</Button>
        </form>
        <Link className="link-btn" to="/register">Don't have an account? Register here.</Link>
      </div>
    </div>

  );
}

export default Login;