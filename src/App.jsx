import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Categories from './Categories';
import MyRecipes from './MyRecipes';
import Footer from './Footer';
import './App.css'; 
import RecipesDetails from './RecipesDetails';

function App() {
  const [myRecipes, setMyRecipes] = useState([]);

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
          <Route path="/" element={<Home addRecipeToMyRecipes={addRecipeToMyRecipes} />} />
          <Route path="/categories" element={<Categories />} />
          <Route
            path="/my-recipes"
            element={<MyRecipes myRecipes={myRecipes} removeRecipeFromMyRecipes={removeRecipeFromMyRecipes} />}
          />
          <Route path="/recipe/:id" element={<RecipesDetails recipes={myRecipes} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
