import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/button';
import Profile from '../components/profile';

const ProfilePage = () => {
  const nav = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("secret");
    nav('/');
  }

  return (
    <div className=''>

      <div className='line'>
        <div>Posts</div>
        <Button func={logout} text='logout' />
      </div>

      <Profile />

    </div>
  )
}

export default ProfilePage;
