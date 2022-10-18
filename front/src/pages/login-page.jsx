import React, { useRef, useState } from 'react';
import { post } from '../plugins/http';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(false);
  const nav = useNavigate();

  async function submit() {
    const loginData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    const data = await post('validateLogin', loginData);
    console.log('loginData res', data);
    if (data.error) setError(data.error);
    else nav("/");
  }

  return (
    <div>
      <input ref={emailRef} type='text' placeholder='email' />
      <input ref={passwordRef} type='text' placeholder='password' />

      <button onClick={submit}>login</button>
      {error && <span className='error-msg'>wrong data</span>}
    </div>
  )
}

export default LoginPage;
