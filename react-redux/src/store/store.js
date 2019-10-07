import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import rootReducers from './reducers/rootReducer'



const initialState = {
    students: [
        {
            name: "Lika",
            id: 0
        },
        {
            name: "Lika",
            id: 1
        },
        {
            name: "Lika",
            id: 2
        }
    ],
    posts: []
}

console.log(initialState);


const store = createStore(rootReducers, initialState, applyMiddleware(thunk));

//thunk - avoid async await - it makes promise for you

console.log(store);

export default store;