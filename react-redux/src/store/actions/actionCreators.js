/* export const addStudent = (student) => ({
    type: "ADD_STUDENT",
    student: student //payload
    //or just type once student because of the es6
})

//implicity return -> to avoid {return {}}

*/

import axios from 'axios';

export const addStudent = (student) => {
    console.log('dispatched an action')
    return {
        type: "ADD_STUDENT", //type
        student: student //payload 
        //action.student
    }
}

export const deleteStudent = (id) => { //id payload
    return {
        //ip call in this file
        type: "DELETE_STUDENT", //type
        id
    }
}

export const fetchPost = () => {
    return async (dispatch) => { //asynchronous func
        const res = await axios.get('/posts');
        /*dispatch({
            type: "FETCH_POSTS"
            posts: res.data.posts
        })*/
        console.log(res);
    }
}

//implicity return -> to avoid {return {}}
//action this is object
//type and payload