import React from 'react';

const HelloWorldWithProps = ({ firstprop }) => {
  return (
    <div>
      Hello World, I am a functional stateless component.
      <div>{firstprop}</div>
    </div>
  );
};

export default HelloWorldWithProps;
