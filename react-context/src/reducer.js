//reducer
export const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + 1};
    case 'DECREMENT':
      return {count: state.count - 1};
    default:
      throw state;
  }
}

export const todosReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_TODOS':
      return action.todos;
    default:
      throw state;
  }
}

export const nameReducer = (state, action) => {
  switch (action.type) {
    case 'WRITE_NAME':
    console.log(state);
      return {name: action.name};
    default:
      throw state;
  }
}