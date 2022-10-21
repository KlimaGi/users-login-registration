import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/button';
import Profile from '../components/profile';
import { get } from '../plugins/http';

const IndexPage = () => {
  const [photo, setPhoto] = useState('');
  const nav = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("secret");
    nav('/login');
  }

  const getPhoto = async () => {
    let secretI = sessionStorage.getItem('secret');
    const res = await get(`getPhoto/${secretI}`);
    if (!res.error) setPhoto(res.data.photo);
    console.log('res-getPhoto', res);
  }

  return (
    <div className=''>

      <div className='line'>
        <div>Posts</div>
        <Button func={logout} text='logout' />
      </div>

      <Profile />

      <Button func={getPhoto} text='get photo' />
      <div className='post'>
        <img src={photo} alt="" />
      </div>

    </div>
  )
}

export default IndexPage;
