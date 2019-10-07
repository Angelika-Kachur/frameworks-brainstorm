import React,{useReducer, useContext} from 'react';
import {Context} from './Provider';

const initialState = {count: 0};

const Increment = (id) => ({
    type: 'INCREMENT',
    id: id
})

const Decrement = (id) => ({
    type: 'DECREMENT',
    id: id
})

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + 1};
    case 'DECREMENT':
      return {count: state.count - 1};
    default:
      throw state;
  }
}

const Items = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);
    const {variable} = useContext(Context)
    console.log(variable);
  return (
    <>
        <h1>Count: {state.count}</h1>
        <button onClick={() => dispatch(Increment('idddd'))}>+</button>
        <button onClick={() => dispatch(Decrement('idddd'))}>-</button>
    </>
  );
}

export default Items;