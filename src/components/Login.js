import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";

const initFormValues = {
  username: '',
  password: ''
}

const initErrorValue = null;

const Login = () => {
  const [formValues, setFormValues] = useState(initFormValues);
  const [errorValue, setErrorValue] = useState(initErrorValue);

  const { push } = useHistory();

  const changeHandler = e => {
    setFormValues({...formValues, [e.target.name]: e.target.value});
  };

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  // useEffect(()=>{
    
  // }, []);

  const submitHandler = e => {
    e.preventDefault();

    (formValues.username === '' || formValues.password === '') 
    ? 
    setErrorValue('Username or Password not valid.') : setErrorValue(null);

    (formValues.username !== 'Lambda School' || formValues.password !== 'i<3Lambd4')
    ?
    setErrorValue('Username or Password not valid.') : setErrorValue(null);

    axios.post('http://localhost:5000/api/login', formValues)
    .then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.payload);
      push('/bubbles')
    })
    .catch(err => {
      console.log(err);
    });
  };

  return (
    <>
      <h1>
        Welcome to the Bubble App!
        <p>Build a login page here</p>
      </h1>
      <form onSubmit={submitHandler}>
        {errorValue && <p style={{color: 'red'}}>{errorValue}</p>}
        <label>Username<br />
          <input
          type='text'
          name='username'
          value={formValues.username}
          onChange={changeHandler} />
        </label>
        <label>Password<br />
          <input
          type='text'
          name='password'
          value={formValues.password}
          onChange={changeHandler} />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displayed display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.