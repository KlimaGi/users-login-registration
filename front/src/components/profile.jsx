import React, { useRef, useState, useEffect } from 'react';
import { get, post } from '../plugins/http';
import MainContext from '../context/main-context';
import { useContext } from 'react';

const Profile = () => {
  const { setUser } = useContext(MainContext);

  const [photo, setPhoto] = useState('');
  const photoRef = useRef();

  useEffect(() => {
    const userData = async () => {
      let secretI = localStorage.getItem('secret');
      const res = await get(`userProfile/${secretI}`);
      console.log('res-profile', res);
      if (!res.error) setUser(res.data);
    }
    userData()
  }, [])

  const changePhoto = async () => {
    const photoData = {
      secret: sessionStorage.getItem('secret'),
      photo: photoRef.current.value
    };
    console.log('setPhotoData', photoData);

    const res = await post('setPhoto', photoData);
    console.log('res-front', res);
    setPhoto(photoRef.current.value);
  }


  return (
    <div>
      <div className=''>

        <img src={photo} alt="" className='profile-img' />
      </div>
      profile
      <button onClick={changePhoto}>change photo</button>
      <input ref={photoRef} type='text' placeholder='photo url' />
    </div>
  )
}

export default Profile;
