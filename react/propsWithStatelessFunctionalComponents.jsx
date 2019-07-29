//Props with Stateless Functional Components

//A stateless functional component is any function you write
//which accepts props and returns JSX.
//A stateless component, on the other hand,
//is a class that extends React.Component,
//but does not use internal state.
//Finally, a stateful component is any component
//that does maintain its own internal state.
//You may see stateful components referred to simply as 'components' or 'React components'.

//A common pattern is to try to minimize statefulness
//and to create stateless functional components wherever possible.
//This helps contain your state management to
//a specific area of your application.
//In turn, this improves development and maintenance of your app
//by making it easier to follow how changes to state affect its behavior.

class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper />
      </div>
    );
  }
}

const Camper = props => {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  );
};

Camper.propTypes = {
  name: PropTypes.string.isRequired
};

Camper.defaultProps = {
  name: "CamperBot"
};
