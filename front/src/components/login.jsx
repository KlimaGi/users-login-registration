import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { post } from '../plugins/http';
import Button from '../components/button';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const nav = useNavigate();

  async function login() {
    const loginData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    const res = await post('login', loginData);
    console.log('loginData res', res);
    sessionStorage.setItem('secret', res.data);
    if (res.error) return setError(res.message);
    nav("/profile");
  }

  return (
    <div className='main'>

      <div className='container'>
        <input ref={emailRef} type='text' placeholder='email' className='input' />
        <input ref={passwordRef} type='text' placeholder='password' className='input' />

        <Button func={login} text="login" />
        <span className='error-msg'>{error}</span>
      </div>
    </div>
  )
}

export default Login;
