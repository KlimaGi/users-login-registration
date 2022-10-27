import React, { useEffect } from 'react';
import { get } from '../plugins/http';

const AllPosts = () => {

  useEffect(() => {
    const allPosts = async () => {

      const secret = localStorage.getItem('secret');
      const res = await get(`allPosts/${secret}`);
      console.log('all-posts-res', res);
    };
    allPosts();

  }, [])

  return (
    <div>

    </div>
  )
}

export default AllPosts;
