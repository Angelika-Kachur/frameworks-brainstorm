import {combineReducers} from 'redux'
import {students} from './students'
const rootRedusers = combineReducers(
    {
        students
    }
)

export default rootRedusers;