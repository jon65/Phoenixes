import React, { useEffect, useState } from "react";
import '../../src/App.css';

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(email);
      console.log(pass);
      console.log(name)
      fetch("http://localhost:5000/register", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            name,
            email,
            pass,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "userRegister");
            if (data.status == "ok") {
              alert("Registration Successful");
            } else {
              alert("Something went wrong");
            }});
  }

    return (
        <div className="auth-form-container">
            <img class="logo" src={require('./../img/logo.png')} alt="Frienderlies logo" />
            <h2 class="title">Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label class="subtitle" htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label class="subtitle" htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label class="subtitle" htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit" class="login">Continue</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}

export default Register;