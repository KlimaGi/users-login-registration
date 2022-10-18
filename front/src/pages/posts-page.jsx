import React, { useState, useEffect } from 'react';
import SearchBar from '../components/search-bar';
import SinglePost from '../components/single-post';
import { post } from '../plugins/http.js';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const allPosts = async () => {
      const res = await post('filter', { username: "" });
      setPosts(res.posts);
    };
    allPosts();
  }, []);

  // filtruoti istrintus postus patogiau fronte, kai rodomi vieno userio postai, po istrinimo svarbu vis dar rodyti pasirinkto userio postus
  const postRemoved = (id) => {
    let updatedPosts = [...posts];
    updatedPosts = updatedPosts.filter(post => post._id !== id);
    setPosts(updatedPosts);
  };

  return (
    <div className='container fd-column'>
      <SearchBar setPosts={setPosts} />
      <div>
        {posts.map(post => <SinglePost key={post._id} post={post} postRemoved={postRemoved} />)}

      </div>

    </div>
  )
}

export default PostsPage;
