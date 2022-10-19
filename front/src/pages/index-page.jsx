import React, { useState } from 'react';
import { useEffect } from 'react';
import { get } from '../plugins/http';

const IndexPage = () => {
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    console.log('reload-useEffect');
  }, [photo])

  const getPhoto = async () => {
    let secretI = sessionStorage.getItem('secret');
    console.log('secretI', secretI);
    const res = await get(`getPhoto/${secretI}`);
    if (!res.error) setPhoto(res.data);
    console.log('res-getPhoto', res);
  }

  return (
    <div className='d-flex fd-column'>
      <h5>Middles</h5>
      <p>hi, user</p>

      <button onClick={getPhoto} className='button'>get photo</button>
      <div className='post'>
        <img src={photo} alt="" />
      </div>

    </div>
  )
}

export default IndexPage;
