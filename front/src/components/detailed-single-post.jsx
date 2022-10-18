import React from 'react'

const DetailedSinglePost = ({ post }) => {
  return (
    <div className='post'>
      <img className='img' src={post.photo} alt="" />
      <h4>{post.title}</h4>
      <span>{post.username}</span>
      <p>{post.description}</p>
      <p>{post.city}</p>
    </div>
  )
}

export default DetailedSinglePost;
