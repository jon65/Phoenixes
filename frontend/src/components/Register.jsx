import React, { useEffect, useState, useReducer, useRef } from "react";
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

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: '', isValid: false };
};

const usernameReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 4 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 4}
  }
  return { value: '', isValid: false };
}

const Register = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });

  const [usernameState, dispatchUsername] = useReducer(usernameReducer, {
    value: '',
    isValid: null,
  })

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;
  const { isValid: usernameIsValid } = usernameState;
  //refs
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const usernameInputRef = useRef();

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(emailIsValid && passwordIsValid && usernameIsValid);
    }, 500);
    
    console.log(formIsValid);
    return () => {
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid, usernameIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });

    // setFormIsValid(
    //   event.target.value.includes('@') && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value });

    // setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const usernameChangeHandler = (event) => {
    dispatchUsername({ type: 'USER_INPUT', val: event.target.value });
  }

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const validateUsernameHandler = () => {
    dispatchUsername({type: 'INPUT_BLUR'});
  }


  useEffect(() => {

  }, [formIsValid, passwordIsValid]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handlesubmit pressed');
    const username = usernameState.value;
    const email = emailState.value;
    const password = passwordState.value;
    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("Registration Successful");
        } else {
          alert("Something went wrong");
        }
      });
  };
    //       <div className="auth-form-container">
    //         <img class="logo" src={require('./../img/logo.png')} alt="Frienderlies logo" />
    //         <h2 class="title">Register</h2>
    //     <form className="register-form" onSubmit={handleSubmit}>
    //         <label class="subtitle" htmlFor="name">Full name</label>
    //     <input value={formState.name} name="name" onChange={(e) => dispatch({type: UPDATE_NAME, payload: e.target.value})} id="name" placeholder="full Name" />
    //         <label class="subtitle" htmlFor="email">email</label>
    //     <input value={formState.email} onChange={(e) => dispatch({type: UPDATE_EMAIL, payload: e.target.value})}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
    //     <div className={`${classes.control} ${
    //     formState.password != formState.verifyPassword && formState.password != '' ? classes.invalid : ''
    //   }`}>
    //         <label class="subtitle" htmlFor="password">password</label>
    //     <input value={formState.password} onChange={(e) => dispatch({type: PASSWORD, payload: e.target.value})} type="password" placeholder="********" id="password" name="password" />
    //         <label class="subtitle" htmlFor="verifyPassword">Verify Password</label>
    //     <input value={formState.verifyPassword} onChange={(e) => dispatch({type: VERIFY_PASSWORD, payload: e.target.value})} type="password" placeholder="" id="verifyPassword" name="verifyPassword" />
    //     </div>  
    //         <button type="submit" class="login">Continue</button>
    //     </form>
    //     <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    // </div>
  return (
    <div className="App">
    <div className="auth-form-container">
      <img class="logo" src={require('./../img/logo.png')} alt="Frienderlies logo" />
      <h2 class="title">Register</h2>
      <form onSubmit={ handleSubmit}>
        <Input
          ref={usernameInputRef}
          id="username"
          label="Username"
          type="text"
          isValid={usernameIsValid}
          value={usernameState.value}
          onChange={usernameChangeHandler}
          onBlur={validateUsernameHandler}
        />
        <Input
          ref={emailInputRef}
          id="email"
          label="Email"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
     <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={ !formIsValid}>
          Continue
          </Button>
        </div>
      </form>
        <Link className="link-btn" to="/login">Already have an account? Login here.</Link>
       {/* <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button> */}
    </div>
    </div>
  );

    //verify password
  // useEffect(() => {
  //   if (formState.password === formState.verifyPassword && formState.password != null) {
  //     dispatch({ type: SET_PASSWORD_MATCH, payload: true });
  //   }
  //   else {
  //     dispatch({ type: SET_PASSWORD_MATCH, payload: false });
  //   }
  // }, [formState.password, formState.verifyPassword]);
}

export default Register;