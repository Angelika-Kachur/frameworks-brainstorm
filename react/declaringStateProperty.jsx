//You create state in a React component
//by declaring a state property on the component class in its constructor

class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Lika"
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}
