import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 123
        },
        {
            name: 'Pretty Woman',
            price: '$13',
            id: 234
        },
        {
            name: 'Silicon Valley',
            price: '$8',
            id: 345
        }
    ]);

    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}