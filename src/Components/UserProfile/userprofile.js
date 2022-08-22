import React from 'react';
import UserProfileHeader from './userprofileHeader';
import './Userz.css';

function UserProfile() {  
  const dummydata = {userid: 1, email: "jordan@gmail.com", username: "Jordan Wilia", password: 1234, profilePicUrl: "https://pbs.twimg.com/media/FaEdannXkAIaEyx?format=jpg&name=large", aboutme: "Looking forward to an ez pz move"}

return (
  <div className='user-container-wrapper'>
    <div className='user-border'>
      <UserProfileHeader
        username={dummydata.username}
      />
      <p>"{dummydata.aboutme}"</p>
      <div className='user-image-wrapper'>
        <img
          alt='user profile picture'
          className='user-image'
          src={dummydata.profilePicUrl}
        />
      </div>
    </div>
    </div>
  );
};

export default UserProfile;