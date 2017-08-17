import React from 'react';
import Thing from './Thing';

const things = [
  {
    id: 1,
    name: 'Thing 1',
    description: "I'm just a thing"
  },
  {
    id: 2,
    name: 'Thing 2',
    description: "I'm a better thing"
  },
  {
    id: 3,
    name: 'Thing 3',
    description: "I'm the best thing"
  }
];

const Things = () => {
  return (
    <div>
      <div>List of Things:</div>
      <br/>
      <div>
        {things.map(thing =>
          <Thing
            key={thing.id}
            name={thing.name}
            description={thing.description}
          />
        )}
      </div>
    </div>
  );
};

export default Things;
