import React, { useRef, useState } from 'react';
import { post } from '../plugins/http';

const RegisterPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const password2Ref = useRef();

  const [error, setError] = useState('');

  async function submit() {
    const registerData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password2: password2Ref.current.value,
    };
    setError('');
    const data = await post('validateRegister', registerData);
    setError(data.message);
    console.log('registerData res', data);
  }

  return (
    <div>
      <input ref={emailRef} type='text' placeholder='email' />
      <input ref={passwordRef} type='text' placeholder='password' />
      <input ref={password2Ref} type='text' placeholder='repeat password' />

      <button onClick={submit}>register</button>
      <span className='error-msg'>{error}</span>
    </div>
  )
}

export default RegisterPage;
