//React v15.5.0 - PropTypes is imported independently from React:
//import React, { PropTypes } from 'react';

const Items = props => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>;
};

Items.propTypes = {
  quantity: PropTypes.number.isRequired
};

Items.defaultProps = {
  quantity: 0 //if undefined -> 0, if null -> null
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items quantity={10} />;
  }
}
