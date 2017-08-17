import React from 'react';

const Thing = ({ name, description }) => {
  return (
    <div>
      {name} - {description}
    </div>
  );
};

export default Thing;
