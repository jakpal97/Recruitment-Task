import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Favourite.scss';

const Favourites = () => {
  const [favouriteRepos, setFavouriteRepos] = useState([]);

  useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem('favouriteRepos') || '[]');
    setFavouriteRepos(favourites);
  }, []);

  return (
    <div>
      <h1>Ulubione Repozytoria</h1>
      {favouriteRepos.length > 0 ? (
        <ul>
          {favouriteRepos.map(repo => (
            <li key={repo.id}>
              <Link className='fav-repo' to={`/favourites/${repo.id}`}>{repo.name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Brak ulubionych repozytoriów.</p>
      )}
    </div>
  );
};

export default Favourites;