import React, { useRef, useEffect, useContext } from 'react';
import { get, post } from '../plugins/http';
import MainContext from '../context/main-context';

const Profile = () => {
  const { user, setUser } = useContext(MainContext);
  const photoRef = useRef();

  useEffect(() => {
    const userData = async () => {
      let secretI = localStorage.getItem('secret');
      const res = await get(`userProfile/${secretI}`);
      if (!res.error) setUser(res.data);
    };
    userData();
  }, [])

  const changePhoto = async () => {
    const photoData = {
      secret: localStorage.getItem('secret'),
      photo: photoRef.current.value
    };

    const res = await post('setPhoto', photoData);
    if (!res.error) {
      const userCopy = { ...user };
      userCopy.photo = res.data.photo;
      setUser(userCopy);
    }
  }

  return (
    <div >
      {
        user &&
        <div className='container'>
          <img src={user.photo} alt="" className='profile-img' />
          <button onClick={changePhoto} className="button">change photo</button>
          <input ref={photoRef} type='text' placeholder='photo url' className='input' />
        </div>

      }
    </div>
  )
}

export default Profile;
