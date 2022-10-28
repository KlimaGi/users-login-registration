import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SinglePost from '../components/single-post';
import { get } from '../plugins/http';

const SinglePostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const singlePost = async () => {
      const secret = localStorage.getItem('secret');
      const res = await get(`singlePost/${id}/${secret}`);
      setPost(res.data);
    };
    singlePost();
  }, []);

  return (
    <div>
      Single Post Page
      {post && <SinglePost post={post} key={post._id} />}
    </div>
  )
}

export default SinglePostPage;
