import React,{useContext, useEffect} from 'react';
import {Context} from './Provider';

const Items = () => {

  //8. here we are calling the context
  const {counter, increaseNumber, decrementNumber, getTodos, writeName} = useContext(Context)
  //console.log(counter);

  useEffect(() => {
    getTodos()
   console.log('fetched')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) //function here is litening for changes

  
  const getName = (e) => {
    writeName(e.target.value)
  }

  return (
    <>
        <h1>Count: {counter.count}</h1>
        <button onClick={increaseNumber}>+</button>
        <button onClick={decrementNumber}>-</button>
        <input type="text" placeholder="Name" onChange={getName} />
    </>
  );
}

export default Items;
//we don't call dispatch here, we do it in Provider