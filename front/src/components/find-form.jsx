import React, { useRef } from 'react';
import { get } from '../plugins/http';

const FindForm = () => {
  const inpRef = useRef();
  const selectRef = useRef();

  async function find() {
    const res = await get(`find/${inpRef.current.value}/${selectRef.current.value}`);
    console.log('res-find', res);

    inpRef.current.value = '';
  }

  return (
    <div>
      <input ref={inpRef} type="text" placeholder='search word' />
      <select name='' id='' ref={selectRef}>
        <option value='color'>color</option>
        <option value='model'>model</option>
        <option value='year'>year</option>
        <option value='fuel'>fuel</option>
      </select>
      <button onClick={find}>Find</button>
    </div>
  )
}

export default FindForm;
