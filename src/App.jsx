import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Categories from './Categories';
import MyRecipes from './MyRecipes';
import Footer from './Footer';
import RecipesDetails from './RecipesDetails';
import { recipes as defaultRecipes } from './Home';
import AddNewRecipe from './AddNewRecipe';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState(defaultRecipes); // Shared state for all recipes
  const [myRecipes, setMyRecipes] = useState([]); // State for "My Recipes"

  const handleAddRecipe = (newRecipe) => {
    // Add the new recipe to the `recipes` array
    setRecipes((prevRecipes) => [...prevRecipes, { ...newRecipe, id: prevRecipes.length }]);
  };

  const addRecipeToMyRecipes = (recipe) => {
    setMyRecipes((prevRecipes) => [...prevRecipes, recipe]);
  };

  const removeRecipeFromMyRecipes = (index) => {
    setMyRecipes((prevRecipes) => prevRecipes.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>

          <Route
            path="/"
            element={<Home recipes={recipes} addRecipeToMyRecipes={addRecipeToMyRecipes} />}
          />

          <Route path="/categories" element={<Categories recipes={recipes} />} />

          <Route
            path="/my-recipes"
            element={
              <MyRecipes
                myRecipes={myRecipes}
                removeRecipeFromMyRecipes={removeRecipeFromMyRecipes}
              />
            }
          />
          <Route
            path="/add-new-recipe"
            element={
              <AddNewRecipe
                recipes={recipes}
                handleAddRecipe={handleAddRecipe}
                addRecipeToMyRecipes={addRecipeToMyRecipes}
              />
            }
          />
          <Route path="/recipe/:id" element={<RecipesDetails recipes={recipes} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
