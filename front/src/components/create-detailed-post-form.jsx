import React, { useRef, useState } from 'react';
import { post } from '../plugins/http';

const CreateDetailedPostForm = ({ posts, setPosts }) => {
  const postRefs = {
    titleRef: useRef(),
    descriptionRef: useRef(),
    photoRef: useRef(),
    usernameRef: useRef(),
    cityRef: useRef(),
  };

  const [error, setError] = useState('');


  const confirmData = async (e) => {
    e.preventDefault();
    const postData = {
      title: postRefs.titleRef.current.value,
      description: postRefs.descriptionRef.current.value,
      photo: postRefs.photoRef.current.value,
      username: postRefs.usernameRef.current.value,
      city: postRefs.cityRef.current.value,
    };
    setError('');
    const res = await post('createPost', postData);
    console.log('data-res', res);
    if (res.error) return setError(res.message);
    setPosts([...posts, res.post]);
  }

  return (

    <form onSubmit={confirmData} className='d-flex fd-column'>
      <label>title</label>
      <input ref={postRefs.titleRef} className='input' type="text" placeholder='title' />
      <label>description</label>
      <input ref={postRefs.descriptionRef} className='input' type="text" placeholder='description' />
      <label>photo</label>
      <input ref={postRefs.photoRef} className='input' type="text" placeholder='photo' />
      <label>username</label>
      <input ref={postRefs.usernameRef} className='input' type="text" placeholder='username' />
      <label>city</label>
      <select ref={postRefs.cityRef} className='input' type="text" placeholder='city'>
        <option value='vilnius'>Vilnius</option>
        <option value='kaunas'>Kaunas</option>
        <option value='klaipeda'>Klaipeda</option>
        <option value='trakai'>Trakai</option>
        <option value='marijampole'>Marijampole</option>
        <option value='panevezys'>Panevezys</option>
      </select>

      <button type='submit' className='button'>add post</button>
      <span className='error-msg'>{error}</span>
    </form>


  )
}

export default CreateDetailedPostForm;
