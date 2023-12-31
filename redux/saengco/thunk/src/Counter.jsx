import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { up } from './counterSlice';
import { asyncUpFetch } from './counterSlice';

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.counter.value;
  });
  const status = useSelector((state) => {
    return state.counter.status;
  });
  return (
    <div>
      <button
        onClick={() => {
          dispatch(up(2));
        }}
      >
        +
      </button>

      <button
        onClick={() => {
          dispatch(asyncUpFetch());
        }}
      >
        + async fetch
      </button>
      <br />

      <div>
        {count} | {status}
      </div>
    </div>
  );
}
