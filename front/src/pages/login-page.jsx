import React, { useRef, useState } from 'react';
import { post } from '../plugins/http';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const nav = useNavigate();

  async function login() {
    const loginData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    const data = await post('login', loginData);
    console.log('loginData res', data);
    if (data.error) return setError(data.message);
    nav("/");
  }

  return (
    <div>
      <input ref={emailRef} type='text' placeholder='email' />
      <input ref={passwordRef} type='text' placeholder='password' />

      <button onClick={login}>login</button>
      <span className='error-msg'>{error}</span>
    </div>
  )
}

export default LoginPage;
