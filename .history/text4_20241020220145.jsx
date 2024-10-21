import React from 'react';              // Imports the React library to use React features like components.
import { Link } from 'react-router-dom'; // Imports the `Link` component from `react-router-dom` to create navigable links.

function Header() {                     // Declares a functional component called Header.
  return (
    <header className="header">         // Defines a header element with the class "header" for styling.
      <h1 className="logo">Culinary Corner</h1>  // Displays the app's logo or title, "Culinary Corner".

      <nav>                             // Adds a navigation element that wraps the navigation links.
        <ul className="nav-list">       // Creates an unordered list with the class "nav-list" for styling the navigation menu.
          <li className="nav-item">     // Each list item represents a navigation link.
            <Link to="/">Home</Link>    // Link to the Home page ("/" route).
          </li>
          <li className="nav-item">     // Link to the Categories page ("/categories" route).
            <Link to="/categories">Categories</Link>
          </li>
          <li className="nav-item">     // Link to the My Recipes page ("/my-recipes" route).
            <Link to="/my-recipes">My Recipes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;                  // Exports the Header component for use in other parts of the app.
