import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';  
import FavoritesList from "./FavoritesList.jsx";

function Navbar({favorites, setFavorites}) {
  const handleFavorite = () => {
    console.log("favorites button clicked");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="https://res.cloudinary.com/dprkq4xne/image/upload/c_pad,w_400/v1717605081/Monster-project/logo-cryptids_yplooc.png" alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/monsters">Monsters</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
             
            </ul>
            <div className="d-flex">
              <FavoritesList favorites={favorites} setFavorites={setFavorites}/>
              <SearchBar style={{ marginRight: '10px', width: '400px' }} />
            </div>
          </div>
        </div>
      </nav>
      <div style={{ paddingTop: '70px' }}>
        {/* The rest of your page content */}
      </div>
    </div>
  );
}

export default Navbar;
