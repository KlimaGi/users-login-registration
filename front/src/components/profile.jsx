import React, { useRef, useState, useEffect } from 'react';
import { get, post } from '../plugins/http';

const Profile = () => {
  const [photo, setPhoto] = useState('');
  const photoRef = useRef();

  useEffect(() => {
    const getPhoto = async () => {
      let secretI = sessionStorage.getItem('secret');
      const res = await get(`getPhoto/${secretI}`);
      if (!res.error) setPhoto(res.data.photo);
    }
    getPhoto()
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
