import React, { useEffect, useContext } from 'react';
import MainContext from '../context/main-context';
import { get } from '../plugins/http';
import SinglePost from './single-post';

const AllPosts = () => {

  const { posts, setPosts } = useContext(MainContext);

  useEffect(() => {
    const allPosts = async () => {

      const secret = localStorage.getItem('secret');
      const res = await get(`allPosts/${secret}`);
      setPosts(res.data);
    };
    allPosts();

  }, [])

  return (
    <div className='post-container'>
      {posts.map((post) => <SinglePost key={post._id} post={post} />)}
    </div>
  )
}

export default AllPosts;
