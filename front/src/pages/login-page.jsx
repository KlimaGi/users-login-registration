import React, { useRef } from 'react';
import { post } from '../plugins/http';

const LoginPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  async function submit() {
    const loginData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    const data = await post('validate', loginData);
    console.log('loginData res', data);
  }

  return (
    <div>
      <input ref={emailRef} type='text' placeholder='email' />
      <input ref={passwordRef} type='text' placeholder='password' />

      <button onClick={submit}>register</button>

    </div>
  )
}

export default LoginPage;
