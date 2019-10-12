import React, {useState, useContext} from 'react';
import {MovieContext} from './MovieContext'

const AddMovie = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext);

    const updateName = e => {
        console.log(e.target.value);
        setName(e.target.value);
    };

    const updatePrice = e => {
        console.log(e.target.value);
        setPrice(e.target.value);
    };

    const addMovie = e => {
        e.preventDefault();
      
        setMovies(prevMovies => [...prevMovies, {name: name, price: price, id: `id_ ${name}`}]);
    }

    return(
        <form onSubmit={addMovie}>
            <input type="text" name="name" value={name} onChange={updateName}/>
            <input type="text" name="price" value={price} onChange={updatePrice}/>
            <button>Submit</button>
        </form>
    );
}

export default AddMovie;