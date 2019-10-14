import React, {Component} from 'react';
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
class App extends Component {
    constructor(props) {
        super(props)
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
    }
    state = {
        count: 0,
        name: 'name'
    }
    addOne() {
        this.setState({count: this.state.count + 1})
    }
    minusOne() {
        this.setState({count: this.state.count - 1})
    }
    reset() {
        this.setState({count: 0})
    }
    render() {
        const title = "This is new Title";
        const subtitle = "This is Subtitle";
        const year = new Date().getFullYear();
        const main = {
            content: "Lorem ipsum ipsum ipsum ipsum ipsum ipsum",
            skills: ['HTML', 'CSS', 'JS', 'React']
        }

        console.log(this.props);
        return (
            <div>
                <h2>{this.state.name}</h2>
                <form action="">
                    <label htmlFor="name" onChange={(e) => this.setState({ name: e.target.value})}>Name: </label>
                    <input type="text" id="name" />
                </form>
                <div>
                    <button onClick={this.addOne}>+</button>
                    {this.state.count}
                    <button onClick={this.minusOne}>-</button>
                    </div>
                <div>
                    <button onClick={this.reset}>reset</button>
                </div>
                <Header title={title} subtitle={subtitle} styles={headerStyles}/>
                <Main main={main} />
                <Footer year={year}/>
            </div>
        )
    }
}

ReactDOM.render(<App example="Example"/>, document.getElementById('root'));