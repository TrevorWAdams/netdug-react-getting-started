import React, { Component } from 'react';

class HelloWorldClassWithProps extends Component {
  render() {
    const { firstprop } = this.props;
    return (
      <div>
        Hello World, I am a Component Class.
        <div>{firstprop}</div>
      </div>
    );
  }
}

export default HelloWorldClassWithProps;
