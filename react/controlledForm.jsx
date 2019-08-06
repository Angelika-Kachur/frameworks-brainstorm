//More complicated Controlled Form

//event.preventDefault() in the submit handler prevents the
//default form submit behavior which will refresh the web page.

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      submit: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      submit: this.state.input
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>{this.state.submit}</h1>
          <button type="submit">Submit!</button>
          <input value={this.state.input} onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}
