import React from 'react';

const TripsProfile = props => {
  const { destination } = props;

  return (
    <div className='trip-header'>
      <h2>{destination}</h2>
    </div>
  );
};

export default TripsProfile;