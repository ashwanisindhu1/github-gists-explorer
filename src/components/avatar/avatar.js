import React from 'react';
import PropTypes from 'prop-types';

import './avatar.css';

function Avatar(props) {
  const avatarStyle = {
    backgroundSize: 'cover',
    height: props.dimension,
    width: props.dimension
  };

  let url = false;
  if (props.avatarUrl) {
    url = props.avatarUrl;
  }
  if (!url) {
    return false;
  }
  avatarStyle.backgroundImage = `url(${url})`;

  const avatarContainerStyle = {
    height: props.dimension,
    width: props.dimension
  };

  return (
    <div className="avatarContainer" style={avatarContainerStyle}>
      <div className="avatar" style={avatarStyle} />
    </div>
  );
}

Avatar.defaultProps = {
  dimension: 44
};

Avatar.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  dimension: PropTypes.number
};

export default Avatar;
