import React from 'react'

const SinglePost = ({ post }) => {
  console.log('post-single-post', post);
  return (
    <div className='post'>
      <img src={post.photo} alt="" />
      <div>{post.email}</div>
      <div>{post.text}</div>
    </div>
  )
}

export default SinglePost;
