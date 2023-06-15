import React from 'react';
import './Nav.scss';
import { Link, Outlet } from 'react-router-dom';

const Nav = () => {
  return (
    
      <div className='nav-div'>
        <Link className='home-button' to="/">Strona główna</Link>
        <Link className='fav-button' to="/favourites">Ulubione</Link>
        <Outlet/>
      </div>
   
  );
};

export default Nav;