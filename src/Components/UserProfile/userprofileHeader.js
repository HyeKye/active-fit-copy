import React from 'react';

const UserProfileHeader = props => {
  const { username } = props;

  return (
    <div className='user-header'>
      <h2>{username}</h2>
    </div>
  );
};

export default UserProfileHeader;