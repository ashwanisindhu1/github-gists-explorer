import React from 'react';

import { Avatar } from '../avatar';
import { Tag } from '../tag';

import './gistCard.css';

function GistCard(props) {
  const { files, forkedUsers, description, url } = props.gist;

  return (
    <div className="gistCard">
      <div className="gistDetails">
        <div className="description">
          {description}
          <div className="githubLink">
            <a className="gistLink" href={url} target="_blank">
              See on github
            </a>
          </div>
        </div>
        <br />
        <div className="files">
          <h4>Files:</h4>
          {files.map((file, index) => (
            <div className="filename" key={index}>
              <a href={file.raw_url} target="_blank">
                {file.filename}
              </a>
              <div className="tagContainer">
                <Tag name={file.language} />
              </div>
            </div>
          ))}
        </div>
        {forkedUsers.length > 0 && (
          <div className="forks">
            <h4>Forked by:</h4>
            {forkedUsers.map((user, index) => (
              <a href={user.html_url} key={index} target="_blank">
                <Avatar dimension={30} avatarUrl={user.avatar_url} />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default GistCard;
