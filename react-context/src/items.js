import React,{useContext} from 'react';
import {Context} from './Provider';

const Items = () => {

  //8. here we are calling the context
  const {state, increaseNumber, decrementNumber} = useContext(Context)
  console.log(state);

  return (
    <>
        <h1>Count: {state.count}</h1>
        <button onClick={increaseNumber}>+</button>
        <button onClick={decrementNumber}>-</button>
    </>
  );
}

export default Items;
//we don't call dispatch here, we do it in Provider