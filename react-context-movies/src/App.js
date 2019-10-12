import React from "react";
import {MovieProvider} from './MovieContext';
import Nav from "./Nav";
import MovieList from "./MovieList";
import AddMovie from './AddMovie';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <MovieList />
        <AddMovie />
      </div>
     </MovieProvider>
  );
}
export default App;