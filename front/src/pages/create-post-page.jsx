import React, { useRef } from 'react';
import { post } from '../plugins/http';
import { useNavigate } from 'react-router-dom';

const CreatePostPage = () => {
  const textRef = useRef();
  const photoRef = useRef();
  const nav = useNavigate();


  const createPost = async () => {
    const postData = {
      text: textRef.current.value,
      photo: photoRef.current.value,
      secret: localStorage.getItem('secret')
    }
    const res = await post('postData', postData);
    console.log('postData-res', res);
    if (!res.error) return nav('/allPosts');
  }

  return (
    <div>
      <input ref={photoRef} type='text' placeholder='photo' />
      <input ref={textRef} type='text' placeholder='text' />
      <button onClick={createPost}>Create</button>
    </div>
  )
}

export default CreatePostPage;
