import React, { useState } from 'react';

import { GistCard } from '../gistCard';
import { UserDetails } from '../userDetails';
import { api } from '../../utils';

import './homePage.css';

function HomePage() {
  const [gists, setGists] = useState([]);
  const [username, setUsername] = useState('');
  const [page, setPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchGists = async (pageNum = 1) => {
    if (pageNum === 1) {
      setGists([]);
      setShowLoadMore(true);
      setError('');
    }
    setIsLoading(true);
    const response = await api.getGistsByUser(username.trim(), 10, pageNum);
    setIsLoading(false);
    if (response.status === 'success') {
      setError('');
      let newGists = response.data;
      if (newGists.length === 0) {
        setShowLoadMore(false);
      } else {
        const updatedGists = pageNum === 1 ? newGists : gists.concat(newGists);
        setGists(updatedGists);
        setPage(pageNum + 1);
      }
    } else if (response.status === 'error') {
      setError(response.data);
      setGists([]);
    }
  };

  const onInputChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  const onBtnClick = () => {
    if (username && username.length > 0) {
      fetchGists();
    }
  };

  const onKeyUp = (event) => {
    if (event.key === 'Enter' && username.length > 0) {
      fetchGists();
    }
  };

  const onLoadMore = () => {
    fetchGists(page);
  };

  const renderContent = () => {
    if (error && error.length > 0) {
      return <div className="error">{error}</div>;
    } else {
      return (
        <div className="gistContainer">
          {gists.length > 0 && <UserDetails user={gists[0].user} />}
          <div className="gistList">
            {gists.map((gist) => {
              return <GistCard key={gist.id} gist={gist} />;
            })}
          </div>
          {gists.length > 0 && showLoadMore && (
            <div className="loadMore" onClick={onLoadMore}>
              {isLoading ? 'Loading...' : 'Load more...'}
            </div>
          )}
          {isLoading && gists.length === 0 && <div className="loading">Loading data....</div>}
        </div>
      );
    }
  };

  return (
    <div className="homePage">
      <div className="inputContainer">
        <input
          type="text"
          className="textField"
          name="username"
          autoComplete="off"
          value={username}
          onChange={onInputChange}
          placeholder="Enter github username"
          onKeyUp={onKeyUp}
          autoFocus
        />
        <div className="actions">
          <button className="button" onClick={onBtnClick}>
            Get Gists
          </button>
        </div>
      </div>
      {renderContent()}
    </div>
  );
}

export default HomePage;
