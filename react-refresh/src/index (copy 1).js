import React, {Component, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const headerStyles = {
    background: '#333',
    color: 'orange',
    fontSize: 18,
    textAlign: 'center'
}


 
//Component instead of React.Component because of {Component} distracturing
//class App extends Component {
function App() {
        const title = "This is new Title";
        const subtitle = "This is Subtitle";
        const year = new Date().getFullYear();
        const main = {
            content: "Lorem ipsum ipsum ipsum ipsum ipsum ipsum",
            skills: ['HTML', 'CSS', 'JS', 'React']
        }

        //state = {
            //name: "",
            //age: 0
        //}
        //this.state.name
        

        //WITH HOOKS:

        //1) option
        
        //state -> can be any name
        const [state, setState] = useState({
            name: "Name",
            age: 0
        })

        const handleChange = (e) => {
            const {name, value} = e.target 
            setState({
                ...state, // always must spread at first
                //if don't spread state it will rewrite the state
                [name]: value,
                //[e.target.name]: e.target.name
                //this [name] will be name and age from attr name in tag
                //to avoid if
                //const Person = {
                    //firstName: 'Lika'
                //}
                //Person[firstName] =
                //Person.firstName =
            })
        }

        const {firstName, age} = state;
        console.log(state);
        //this.setState({
            //...
        //})

        //2) option
        //const [name, setName] = useState("");
        //const [age, setAge] = useState(0);
        return (
            <div>
                <input type="text" name="firstName" id="firstName" placeholder="First Name" value={firstName} onChange={handleChange} />
                <input type="text" name="age" placeholder="Age" />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        )
}

ReactDOM.render(<App example="Example"/>, document.getElementById('root'));