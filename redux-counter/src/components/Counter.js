import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from './Button';
import { incrementCounter, decrementCounter } from '../actions/counterActions';

class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    incrementCounter: PropTypes.func.isRequired,
    decrementCounter: PropTypes.func.isRequired
  };

  render() {
    const { counter, incrementCounter, decrementCounter } = this.props;
    return (
      <div>
        <h1>Counter: {counter}</h1>
        <Button onClick={incrementCounter}>+</Button>{' '}
        <Button onClick={decrementCounter}>-</Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    incrementCounter: () => dispatch(incrementCounter()),
    decrementCounter: () => dispatch(decrementCounter())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
