import React, { useState, useEffect } from "react";
import "./App.css";
import Items from "./items";

export const Interval = () => {
  useEffect(() => {
   const time = setInterval(() => {
      console.log("ticking");
    }, 1000);
    return () => {
    clearInterval(time)
    };
  },[]);
  return <h1>I AM AN INTERVAL COMPONENT</h1>;
};
function App() {
  {/*const [modal, setModal] = useState(true);*/}
  return (
    <div className="App">
      <Items />
      {/* <button onClick={()=>
        setModal(false)
        }>Close Modal</button>
      <form action="post">
        <input type="text" name="query" id="query" placeholder="QUERY" />
      </form>
      {modal && <Interval />}
     */}
     </div>
  );
}
export default App;