import React from 'react';

import './tag.css';

function Tag(props) {
  const name = props.name;
  if(!name) {
    return null;
  }
  return <div className="tag">{name}</div>;
}

export default Tag;
