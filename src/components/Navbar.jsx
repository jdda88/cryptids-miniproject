import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';  // Assuming you have a SearchBar component

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="javascript:void(0)">The Cryptid Collection</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
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
