import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Culinary Corner</h1>
      <nav>
        <ul className="nav-list">
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/categories">Categories</Link></li>
          <li className="nav-item"><Link to="/my-recipes">My Recipes</Link></li>
          <li className="nav-item"><Link to="/add-new-recippe">Create New</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
