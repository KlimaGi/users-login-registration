import React from 'react';
import { Link } from 'react-router-dom';

const Toolbar = () => {
  return (
    <div className='toolbar'>
      <Link to='/register'>Register</Link>
      <Link to='/'>Login</Link>

      <Link to='/profile'>Profile</Link>
      <Link to='/create'>Create</Link>
      <Link to='/allPosts'>All</Link>
    </div>
  )
}

export default Toolbar;
