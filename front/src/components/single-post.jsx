import React, { useState, useRef } from 'react';
import { get, post } from '../plugins/http';

const SinglePost = ({ post: item, postRemoved }) => {
  const inpRef = useRef();
  const [showForm, setShowForm] = useState(false);

  async function remove() {
    const res = await get(`delete/${item._id}`);
    console.log('res', res);
    postRemoved(item._id);
  }

  async function update() {
    const val = inpRef.current.value;

    const res = await post("update", { title: val, id: item._id });
    console.log('res-update', res);
  }


  return (
    <div className='post'>
      <img src={item.image} alt="" />
      <div>

        <h4>{item.title}</h4>
        <p>{item.username}</p>
        <p>{item.description}</p>
      </div>

      <input ref={inpRef} type='text' />
      <button onClick={update}>update</button>
      <button onClick={remove}>delete</button>
    </div>
  )
}

export default SinglePost;
