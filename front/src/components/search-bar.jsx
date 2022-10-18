import React, { useRef } from 'react'
import { post } from '../plugins/http';

const SearchBar = ({ setPosts }) => {
  const inpRef = useRef();

  const filter = async () => {
    const username = inpRef.current.value;
    const res = await post('filter', { username });
    setPosts(res.posts);
    // inpRef.current.value = '';
  }

  return (
    <div>
      <input ref={inpRef} type="text" placeholder='username' />
      <button onClick={filter} >search</button>
    </div>
  )
}

export default SearchBar;
