export const students = (state = [students:[]], action) => { //...take copy of the state
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
            return state.filter((student => student.id !== action.id )) //we shoulnd use ... because filter makes copy and mutate is (in comparison to push) but slice dosn't mutate)
        default:
           return state
    }
}

//reducer will always have sate and action because we connected it inside app.js
//reducer just filters and sends result to the app
//reducer sees actions and go to switch to find out what type it has and do that code
//returns the hole state, not only this one
//only one thruth store
//from reducer all changes go to the store 
//and app will lisen for the store update

//reducer just a function with case 
//reducer returns variable - variable is a state



//click on the button
//take data from backend
//send action
//check type in reducer and give the result to the app