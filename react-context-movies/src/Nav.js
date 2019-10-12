import React, {useContext} from 'react';
import {MovieContext} from './MovieContext'

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  console.log(MovieContext);
  return(
    <div>
      <h3>Lika</h3>
      <p>List of movies: {movies.length}</p>
    </div>
  );
}

export default Nav;