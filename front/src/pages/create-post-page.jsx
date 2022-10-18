import React, { useState } from 'react';
import { useEffect } from 'react';
import { get } from '../plugins/http';
import CreateDetailedPostForm from '../components/create-detailed-post-form';
import DetailedSinglePost from '../components/detailed-single-post';

const CreatePostPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const allPosts = async () => {
      const res = await get('detailedPosts');
      console.log('res-effect', res);
      setPosts(res.posts);
    };
    allPosts();
  }, []);

  console.log('posts', posts);
  return (
    <main>
      Create post page
      <CreateDetailedPostForm posts={posts} setPosts={setPosts} />

      <section>
        {posts.map((post, i) => <DetailedSinglePost key={i} post={post} />)}
      </section>
    </main>
  )
}

export default CreatePostPage;
