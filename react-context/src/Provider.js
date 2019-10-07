import React, { useReducer } from 'react';
import {reducer} from './reducer';
import {increment, decrement} from './actions'

const initialState = {count: 0};

//7. here we create the context with an initial value of object
export const Context = React.createContext({});

const Provider = ({children}) => {
  //1. initialising the Reducer
  //2. add initial state which is {count: 0}
  //3. state is the returned value and dispatch is the action creators
  const [state, dispatch] = useReducer(reducer, initialState) //state and dispatch are just names

  //4.this function is to have an extra logic before dispatching
  //e.g. have API call
  const increaseNumber = () => {
    //dispatch(increment(res.data)) example for api call
    dispatch(increment())
  }

  const decrementNumber = () => {
    dispatch(decrement())
  }

  //5. then we return the context
  //6. value attribute is where you pass anything to children components
  return <Context.Provider value={{
    state, 
    dispatch, 
    increaseNumber,
    decrementNumber
  }}> {/* everything inside will be able from the context*/}
    {children} {/* for <Provider><App/></Provider> */}
  </Context.Provider>
}

export default Provider;

//if you want to dispatch actions with api call you need to dispatch it here in Provider