import React from 'react';

import { Avatar } from '../avatar';

import './userDetails.css';

function UserDetails(props) {
  const user = props.user;
  return (
    <div className="userDetails">
      <div className="userAvatar">
        <Avatar dimension={80} avatarUrl={user.avatar_url} />
      </div>
      <div className="username">
        <a href={user.html_url} target="_blank">
          {user.login}
        </a>
      </div>
    </div>
  );
}

export default UserDetails;
