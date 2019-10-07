/* export const addStudent = (student) => ({
    type: "ADD_STUDENT",
    student: student //payload
    //or just type once student because of the es6
})

//implicity return -> to avoid {return {}}

*/

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

//implicity return -> to avoid {return {}}