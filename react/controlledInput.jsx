//When you type in the input box, that text is processed
//by the handleChange() method, set as the input property
//in the local state, and rendered as the value in the input
//box on the page. The component state is the single source
//of truth regarding the input data.

//don't forget to add the necessary bindings in the constructor.

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  render() {
    return (
      <div>
        <input value={this.state.input} onChange={this.handleChange} />
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
}
