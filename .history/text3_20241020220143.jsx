import React, { useState } from 'react';    // Imports React and the `useState` hook to manage state in this component.
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Imports React Router components to handle routing.

import Header from './Header';              // Imports the Header component.
import Home from './Home';                  // Imports the Home component.
import Categories from './Categories';      // Imports the Categories component.
import MyRecipes from './MyRecipes';        // Imports the MyRecipes component.
import Footer from './Footer';              // Imports the Footer component.
import './App.css';                         // Imports the CSS file for styling.

function App() {                            // Declares a functional component called App.

  const [myRecipes, setMyRecipes] = useState([]);  // Initializes a state variable `myRecipes` as an empty array,
                                                   // and `setMyRecipes` is used to update the state.

  // Function to add a recipe to the `myRecipes` array.
  const addRecipeToMyRecipes = (recipe) => {       
    setMyRecipes((prevRecipes) => [...prevRecipes, recipe]);  // Adds a new recipe to the existing array.
  };

  // Function to remove a recipe from the `myRecipes` array.
  const removeRecipeFromMyRecipes = (index) => {
    setMyRecipes((prevRecipes) => prevRecipes.filter((_, i) => i !== index));  // Filters out the recipe at the given index.
  };

  return (
    <Router>                               // Wraps the app in the Router component to enable routing.
      <div className="App">                // The main container div with the class "App".
        <Header />                         // Includes the Header component at the top.

        <Routes>                           // Defines the routing structure for different pages.
          <Route 
            path="/"                       // The root route ("/") displays the Home component.
            element={<Home addRecipeToMyRecipes={addRecipeToMyRecipes} />} // Passes the addRecipeToMyRecipes function to Home.
          />
          <Route 
            path="/categories"             // The "/categories" route displays the Categories component.
            element={<Categories />} 
          />
          <Route
            path="/my-recipes"             // The "/my-recipes" route displays the MyRecipes component.
            element={
              <MyRecipes 
                myRecipes={myRecipes}       // Passes the `myRecipes` array and `removeRecipeFromMyRecipes` function as props.
                removeRecipeFromMyRecipes={removeRecipeFromMyRecipes}
              />
            }
          />
        </Routes>

        <Footer />                         // Includes the Footer component at the bottom.
      </div>
    </Router>
  );
}

export default App;                        // Exports the App component for use in the main entry file (e.g., `main.jsx`).
