import React, { useState, useEffect,useRef } from "react";
import "./App.css";
function App() {
  const name = useRef('')
  const [todos, setTodos] = useState([]);
  const [query,setQuery] = useState("")
  const [state, setState] = useState({
    firstName: "",
    age: 0,
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleQueryChange = e => {
    const { value } = e.target;
    setQuery(value);
  };
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${query}`)
    .then(response => response.json())
    .then(res => setTodos(res));
  },[query]);
  console.log('query:', query)
  
  console.log('Todos',todos)
  console.log('State',state)
  // in order to see the value you should console log in onSubmit or any other event handler
  console.log('Ref',name.current.value)
  const { firstName, age } = state;
  return (
    <div className="App">
      <form action="post">
        <input type="text" name="firstName" id="firstName" placeholder="First Name" value={firstName} onChange={handleChange} />
        <input type="number" name="age" id="age" placeholder="Age" value={age} onChange={handleChange} />
      
      <input type="text" name="query" id="query" onChange={handleQueryChange} />
      <input type="text" name="name" id="name" ref={name} placeholder="Name using useRef"/>
      </form>
    </div>
  );
}
export default App;