import React, { useState } from "react";
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

  // 🔼 Didn't use the useEffect as I personally found it redundant here - no need to use a useEffect to determine when our axios call can run when it will only be run on form submission.

  const submitHandler = e => {
    e.preventDefault();

    // 🔽 Ternary operator to determine wether to display an error message on receiving any empty fields

    (formValues.username === '' || formValues.password === '') 
    ? 
    setErrorValue('Username or Password not valid.') : setErrorValue(null);

    // 🔽 Make axios call, handle errors by displaying to the page

    axios.post('http://localhost:5000/api/login', formValues)
    .then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.payload);
      push('/bubbles')
    })
    .catch(err => {
      setErrorValue('Username or Password not valid.');
      setFormValues(initFormValues);
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