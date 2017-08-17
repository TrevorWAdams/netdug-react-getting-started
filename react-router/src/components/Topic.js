import React from 'react';

const Topic = ({ match }) => {
  return (
    <div>
      <h3>
        {match.params.topicId}
      </h3>
    </div>
  );
};

export default Topic;
