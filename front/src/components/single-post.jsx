import React from 'react';
import { useNavigate } from 'react-router-dom';

const SinglePost = ({ post }) => {
  const nav = useNavigate();

  return (
    <div className='post' onClick={() => nav(`/singlePost/${post._id}`)}>
      <img src={post.photo} alt="" />
      <div>{post.email}</div>
      <div>{post.text}</div>
    </div>
  )
}

export default SinglePost;
