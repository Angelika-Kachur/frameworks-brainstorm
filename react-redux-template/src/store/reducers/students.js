export const students = (state = [students:[]], action) => {
    switch (action.type) {
        case 'ADD_STUDENT':
            console.log('its in the reducer')
            console.log('state', state)
            console.log('action', action)
            return [...state, action.student]
        case 'DELETE_STUDENT':
            //ui in this file
            //it should be state.students instead of state
            console.log(action);
            //action this is function that returned the object
            //action can be anything that update the state and works with api
            return state.filter((student => student.id !== action.id ))
        default:
           return state
    }
}

//reducer will always have sate and action because we connected it inside app.js