import React from 'react';
import PropTypes from 'prop-types';

const HelloWorldWithPropsChecking = ({ name }) => {
  return (
    <div>
      Hello {name}, I am a functional stateless component.
      <div>I check props!</div>
    </div>
  );
};

HelloWorldWithPropsChecking.propTypes = {
  name: PropTypes.string.isRequired
};

export default HelloWorldWithPropsChecking;
