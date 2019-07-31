//In the render() method, before the return statement,
//you can write JavaScript directly.
//For example, you could declare functions,
//access data from state or props,
//perform computations on this data, and so on.
//Then, you can assign any data to variables,
//which you have access to in the return statement.

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "freeCodeCamp"
    };
  }
  render() {
    const name = this.state.name;
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
}
