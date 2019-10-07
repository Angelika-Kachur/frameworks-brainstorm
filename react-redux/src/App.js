import React from 'react';
import './App.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from './store/actions/actionCreators'

function App(props) {
  const student = {
    name: 'Lika'
  }
  console.log(props);
  //all props in addition to the store
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hey</h1>
        {
          props.students.map(student => <li key={student.id}>{student.name}
          <button onClick={()=>props.deleteStudent(student.id)}>Delete a student</button>
          </li>)
        }
        <button onClick={()=>props.addStudent(student)}>Add student</button>

         <button onClick={()=>props.fetchPosts()}>Fetch posts</button>
        {/*<button onClick={()=>props.deleteStudent(id)}>Delete a student</button>/}
        {/* arrow func to avoid executin just away - like example with set interval*/}
      </header>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    students: state.students,
    posts: state.posts //added to the 
  }
}
//get the state

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch)
}
//get all actions together



export default connect(mapStateToProps, mapDispatchToProps)(App);


//past past past prop? until you get a problem
//add applyMiddleware and redux-thunk