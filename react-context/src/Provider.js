import React, { useReducer } from 'react';
import axios from 'axios'
import {reducer, todosReducer} from './reducer';
import {increment, decrement, fetchTodos} from './actions'

const initialState = {count: 0};

//7. here we create the context with an initial value of object
export const Context = React.createContext({});

const Provider = ({children}) => {
  //1. initialising the Reducer
  //2. add initial state which is {count: 0}
  //3. state is the returned value and dispatch is the action creators
  const [counter, dispatch] = useReducer(reducer, initialState) //state and dispatch are just names

  const [todos, dispatchTodos] = useReducer(todosReducer, [])
  //todos is a state of the reducer 

  //4.this function is to have an extra logic before dispatching
  //e.g. have API call
  const increaseNumber = () => {
    //dispatch(increment(res.data)) example for api call
    dispatch(increment())
  }

  const decrementNumber = () => {
    dispatch(decrement())
  }

  const getTodos = async() => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    dispatchTodos(fetchTodos(res.data))
    console.log(res.data);
  }

  //5. then we return the context
  //6. value attribute is where you pass anything to children components
  return <Context.Provider value={{
    counter, 
    dispatch, 
    increaseNumber,
    decrementNumber,
    getTodos,
    todos,
    dispatchTodos
  }}> {/* everything inside will be able from the context*/}
    {children} {/* for <Provider><App/></Provider> */}
  </Context.Provider>
}

export default Provider;

//if you want to dispatch actions with api call you need to dispatch it here in Provider

//whatever we want to fetch data we can use context
//!!!! in redux there are store, here value={{ it is like a store

// this is store and provider on one file
//<Context.Provider value={{
//<Context.Provider - this is a provider, value={{ - this is like a store