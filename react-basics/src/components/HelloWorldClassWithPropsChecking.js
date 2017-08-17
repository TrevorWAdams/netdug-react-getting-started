import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HelloWorldClassWithPropsChecking extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  };

  render() {
    const { name } = this.props;
    return (
      <div>
        Hello {name}, I am a Component Class.
        <div>I check props!</div>
      </div>
    );
  }
}

export default HelloWorldClassWithPropsChecking;
