import {createStore} from 'redux'
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
    ]
}

console.log(initialState);


const store = createStore(rootReducers, initialState);

console.log(store);

export default store;