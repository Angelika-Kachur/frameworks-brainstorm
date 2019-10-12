//actions
export const increment = (id) => ({
    type: 'INCREMENT',
    id: id
})

export const decrement = (id) => ({
    type: 'DECREMENT',
    id: id
})

//1 write payload in the action
//2 go to the provider -> pass payload to the increaseNumber = (id) => {} padd arguments where we dispatching it
//in app.js we now can write increaseNumber(24) instead of increaseNumber.

export const fetchTodos = (todos) => ({
    type: 'FETCH_TODOS',
    todos
})

export const write = (name) => ({
    type: 'WRITE_NAME',
    name: name
})
