import React from 'react';          // Imports the React library to use React features like components.
import './App.css';                 // Imports the CSS file for styling the component.

function Categories() {             // Declares a functional component called Categories.
  return (
    <div className="categories">    // Defines a container with the class "categories" for styling purposes.
      <h2>Explore by Dietary Preferences</h2>   // Displays a heading "Explore by Dietary Preferences."

      <ul>                          // Creates an unordered list.
        <li>Vegan</li>              // List item for Vegan dietary preference.
        <li>Gluten-Free</li>        // List item for Gluten-Free dietary preference.
        <li>Keto</li>               // List item for Keto dietary preference.
        <li>Paleo</li>              // List item for Paleo dietary preference.
      </ul>                         // Closes the unordered list.
    </div>
  );
}

export default Categories;          // Exports the Categories component for use in other parts of the app.
